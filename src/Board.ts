export interface Square {
    owner: string | null,
    linesOwners : {
        top: string | null,
        left: string | null,
        right: string | null,
        bottom: string | null
    }
}

export class Board {
    board: Array<Array<Square>>
    height: number
    width: number

    constructor(width: number, height: number) {
        this.board = []
        this.height = height
        this.width = width
        for (let i = 0; i < height; i++) {
            let line: Array<Square> = []
            for (let j = 0; j < width; j++) {
                line.push({
                    owner: null,
                    linesOwners : {
                        top: null,
                        left: null,
                        right: null,
                        bottom: null
                    }
                })
            }
            this.board.push(line)
        }
    }

    setSquareOwner(x: number, y: number, name: string) {
        this.board[y][x].owner = name
    }

    setLineOwner(x: number, y: number, direction: string, name: string) {
        switch (direction) {
            case "right":
                this.board[y][x].linesOwners.right = name
                if (x < this.width - 1) this.board[y][x+1].linesOwners.left = name
                break
            case "left":
                this.board[y][x].linesOwners.left = name
                if (x > 0) this.board[y][x-1].linesOwners.right = name
                break
            case "top":
                this.board[y][x].linesOwners.top = name
                if (y > 0) this.board[y-1][x].linesOwners.bottom = name
                break
            case "bottom":
                this.board[y][x].linesOwners.bottom = name
                if (y < this.height - 1) this.board[y+1][x].linesOwners.top = name
                break
        }
    }

    printBoard() {
        let str = ""
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                if (j == 0) {
                    str += "□ "
                } else {
                    str += " □ "
                }
            }
            str += "\n"
        }
        console.log(str)
    }
}