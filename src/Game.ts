import { Board, Square } from "./Board";

interface Player {
    name: string,
    score: number
}

export default class Game {
    board: Board
    players: Array<Player>
    currentPlayer: Player

    constructor(board: Board, ...players: string[]) {
        players.map(playerName => {
            this.players.push({name: playerName, score: 0})
        })
        this.currentPlayer = this.players[0]
    }

    playLine(x: number, y: number, direction: string, name: string) {
        this.board.setLineOwner(x,y,direction,name)
    }

    isSquareFull(square: Square) {
        return (square.linesOwners.left != null) &&
        (square.linesOwners.top != null) &&
        (square.linesOwners.right != null) &&
        (square.linesOwners.bottom != null)
    }

    calculateBoxes() {
        for (let y = 0; y < this.board.height; y++) {
            for (let x = 0; x < this.board.width; x++) {
                if (this.board[y][x].owner == null) {
                    if (this.isSquareFull(this.board[y][x])) {
                        this.board[y][x].owner = this.currentPlayer
                    }
                }
            }
        }
    }
}