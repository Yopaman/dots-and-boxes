interface Square {
    owner: string | null,
    linesOwners : {
        top: string | null,
        left: string | null,
        right: string | null,
        bottom: string | null
    }
}

class Board {
    board: Array<Array<Square>>

    constructor(width: number, height: number) {
        this.board = []
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
}