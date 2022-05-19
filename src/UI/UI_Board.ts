import Game from "../Game";

export default class UI_Board extends HTMLElement {
    game: Game

    get board_height() {
        if (this.hasAttribute("board-height")) {
            return parseInt(this.getAttribute("board-height"))
        } else {
            return 10;
        }
    }

    get board_width() {
        if (this.hasAttribute("board-width")) {
            return parseInt(this.getAttribute("board-width"))
        } else {
            return 10;
        }
    }

    connectedCallback() {
        const boxes = document.getElementsByTagName("td") 
        for (let i = 0; i < boxes.length; i++) {
            ["left", "right", "top", "bottom"].forEach(dir => {
                const hitbox = boxes[i].querySelector(".hitbox-" + dir) 
                hitbox.addEventListener("mouseenter", () => {
                    this.interractLine(Array.from(boxes[i].parentNode.children).indexOf(boxes[i]), Array.from(boxes[i].parentNode.parentNode.children).indexOf(boxes[i].parentElement), dir, "select")
                })
                hitbox.addEventListener("mouseleave", () => {
                    this.interractLine(Array.from(boxes[i].parentNode.children).indexOf(boxes[i]), Array.from(boxes[i].parentNode.parentNode.children).indexOf(boxes[i].parentElement), dir, "reset")
                })
                hitbox.addEventListener("click", () => {
                    this.interractLine(Array.from(boxes[i].parentNode.children).indexOf(boxes[i]), Array.from(boxes[i].parentNode.parentNode.children).indexOf(boxes[i].parentElement), dir, "click")
                })
            })
        }
    }

    constructor(game: Game) {
        super()

        this.game = game

        const body = document.createElement("tbody")
        for (let i = 0; i < this.board_height; i++) {
            const line = document.createElement("tr");
            for (let j = 0; j < this.board_width; j++) {

                // Create dot elements
                const dot_top_right = document.createElement("span")
                dot_top_right.className = "dot dot-top-right"
                const dot_top_left = document.createElement("span")
                dot_top_left.className = " dot dot-top-left"
                const dot_bottom_right = document.createElement("span")
                dot_bottom_right.className = "dot dot-bottom-right"
                const dot_bottom_left = document.createElement("span")
                dot_bottom_left.className = "dot dot-bottom-left"
                
                const square = document.createElement("td")
                square.className = "square"

                // Append dot elements
                square.appendChild(dot_top_left)
                if (j == this.board_width - 1) {
                    square.appendChild(dot_top_right)
                }
                if (i == this.board_height - 1) {
                    square.appendChild(dot_bottom_left)
                }
                if ((i == this.board_height - 1) && (j == this.board_width - 1)) {
                    square.appendChild(dot_bottom_right)
                }

                ["left", "right", "top", "bottom"].forEach(dir => {
                    const hitbox = document.createElement("span")
                    hitbox.className = "hitbox hitbox-" + dir
                    square.appendChild(hitbox)
                })

                line.appendChild(square)
            }
            body.appendChild(line)
        }
        const table = document.createElement("table")
        table.appendChild(body)
        this.appendChild(table)
    }

    interractLine(x: number, y: number, direction: string, interractionType: string = "select", color: string = "none") {
        const typeString = interractionType == "select" ? "selected" : "clicked"
        const table: HTMLTableElement = this.getElementsByTagName("table")[0]
        const box = table.rows[y].cells[x]

        if (interractionType == "click" && box.className.includes("selected-" + direction)) {
            box.classList.remove("selected-" + direction)
        }

        if (!box.className.includes("clicked-" + direction)) {
            switch (direction) {
                case "right":
                    if ((x < this.board_width-1)) {
                        const neighborBox = table.rows[y].cells[x+1]

                        if (interractionType == "click" && neighborBox.className.includes("selected-left")) {
                            neighborBox.classList.remove("selected-left")
                        }

                        interractionType == "reset" ? ["selected"].forEach(c => neighborBox.classList.remove(c + "-left")) :
                        neighborBox.classList.add(typeString + "-left") 

                        if (interractionType == "click") {
                            neighborBox.classList.add(color + "-left")
                        }
                    }
                    interractionType == "reset" ? ["selected"].forEach(c => box.classList.remove(c + "-right")) :
                    box.classList.add(typeString + "-right")
                    break
                case "left":
                    if ((x > 0)) {
                        const neighborBox = table.rows[y].cells[x-1]

                        if (interractionType == "click" && neighborBox.className.includes("selected-right")) {
                            neighborBox.classList.remove("selected-right")
                        }

                        interractionType == "reset" ? ["selected"].forEach(c => neighborBox.classList.remove(c + "-right")) :
                        neighborBox.classList.add(typeString + "-right")

                        if (interractionType == "click") {
                            neighborBox.classList.add(color + "-right")
                        }
                    }
                    interractionType == "reset" ? ["selected"].forEach(c => box.classList.remove(c + "-left")) :
                    box.classList.add(typeString + "-left")
                    break
                case "top":
                    if ((y > 0)) {
                        const neighborBox = table.rows[y-1].cells[x]

                        if (interractionType == "click" && neighborBox.className.includes("selected-bottom")) {
                            neighborBox.classList.remove("selected-bottom")
                        }

                        interractionType == "reset" ? ["selected"].forEach(c => neighborBox.classList.remove(c + "-bottom")) :
                        neighborBox.classList.add(typeString + "-bottom")

                        if (interractionType == "click") {
                            neighborBox.classList.add(color + "-bottom")
                        }
                    }
                    interractionType == "reset" ? ["selected"].forEach(c => box.classList.remove(c + "-top")) :
                    box.classList.add(typeString + "-top")
                    break
                case "bottom":
                    if ((y < this.board_height-1)) {
                        const neighborBox = table.rows[y+1].cells[x]

                        if (interractionType == "click" && neighborBox.className.includes("selected-")) {
                            neighborBox.classList.remove("selected-top")
                        }

                        interractionType == "reset" ? ["selected"].forEach(c => neighborBox.classList.remove(c + "-top")) :
                        neighborBox.classList.add(typeString + "-top")

                        if (interractionType == "click") {
                            neighborBox.classList.add(color + "-top")
                        }
                    }
                    interractionType == "reset" ? ["selected"].forEach(c => box.classList.remove(c + "-bottom")) :
                    box.classList.add(typeString + "-bottom")
                    break
            }
            if (interractionType == "click") {
                box.classList.add(color + "-" + direction)
            }
        }
    }
}

