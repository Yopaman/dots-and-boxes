export default class UI_Board extends HTMLElement {
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

    constructor(width: number, height: number) {
        super()
        const body = document.createElement("tbody")
        for (let i = 0; i < this.board_height; i++) {
            const line = document.createElement("tr");
            for (let j = 0; j < this.board_width; j++) {
                const square = document.createElement("td")
                square.className = "square"
                line.appendChild(square)
            }
            body.appendChild(line)
        }
        const table = document.createElement("table")
        table.appendChild(body)
        this.appendChild(table)
    }
}

