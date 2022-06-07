import { Board, Square } from "./Board";

export interface Player {
    name: string,
    score: number,
    color: string
}

export class Game {
    board: Board
    players: Array<Player>
    currentPlayer: number

    constructor(board: Board, ...players: string[]) {
        this.board = board;
        const colors = ["blue", "red"]
        this.players = []
        let i = 0
        players.map(playerName => {
            this.players.push({name: playerName, score: 0, color: colors[i]})
            i++
        })
        this.currentPlayer = 0
    }

    playLine(x: number, y: number, direction: string, name: string) {
        this.board.setLineOwner(x,y,direction,name)
    }

    nextPlayer() {
        this.currentPlayer != this.players.length - 1 ? this.currentPlayer++ : this.currentPlayer = 0
    }

    isSquareFull(square: Square): boolean {
        return ((square.linesOwners.left != null) &&
        (square.linesOwners.top != null) &&
        (square.linesOwners.right != null) &&
        (square.linesOwners.bottom != null))
    }

    isGameFinished() {
        const boxesCount = this.board.width * this.board.height
        let filledBoxesCount = 0
        for (let y = 0; y < this.board.height; y++) {
            for (let x = 0; x < this.board.width; x++) {
                if (this.board.board[y][x].owner != null) {
                    filledBoxesCount++
                } else {
                    return false
                }
            }
        }
        return filledBoxesCount == boxesCount
    }

    getWinner(): string | null {
        if (this.players[0].score > this.players[1].score) {
            return this.players[0].name
        } else if (this.players[1].score > this.players[0].score) {
            return this.players[1].name
        } else {
            return null
        }
    }

    calculateBoxes() {
        let turnScore = 0
        let xy_arr = []
        for (let y = 0; y < this.board.height; y++) {
            for (let x = 0; x < this.board.width; x++) {
                if (this.board.board[y][x].owner == null) {
                    if (this.isSquareFull(this.board.board[y][x])) {
                        this.board.board[y][x].owner = this.players[this.currentPlayer].name
                        turnScore++
                        xy_arr.push([x,y])
                    }
                }
            }
        }
        return {score: turnScore, xy: xy_arr}
    }

    playTurn(x: number, y: number, direction: string) {
        this.playLine(x, y, direction, this.players[this.currentPlayer].name)
        let calculation = this.calculateBoxes()
        let turnScore: number = calculation.score
        if (turnScore <= 0) {
            this.nextPlayer()
        } else {
            this.players[this.currentPlayer].score += turnScore
        }
        return calculation.xy
    }
}