import { Board, Square } from "./Board";

interface Player {
    name: string,
    score: number,
    color: string
}

export default class Game {
    board: Board
    players: Array<Player>
    currentPlayer: number

    constructor(board: Board, ...players: string[]) {
        const colors = ["blue", "red"]
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
        return (square.linesOwners.left != null) &&
        (square.linesOwners.top != null) &&
        (square.linesOwners.right != null) &&
        (square.linesOwners.bottom != null)
    }

    calculateBoxes() {
        let turnScore = 0
        for (let y = 0; y < this.board.height; y++) {
            for (let x = 0; x < this.board.width; x++) {
                if (this.board[y][x].owner == null) {
                    if (this.isSquareFull(this.board[y][x])) {
                        this.board[y][x].owner = this.currentPlayer
                        turnScore++
                    }
                }
            }
        }
        return turnScore
    }

    playTurn(player: Player, x: number, y: number, direction: string) {
        this.playLine(x, y, direction, player.name)
        let turnScore = this.calculateBoxes()
        if (turnScore <= 0) {
            this.nextPlayer()
        } else {
            player.score += turnScore
        }
    }
}