import Board from "./Board";

interface Player {
    name: string,
    score: number
}

export default class Game {
    board: Board
    players: Array<Player>

    constructor(board: Board, ...players: string[]) {
        players.map(playerName => {
            this.players.push({name: playerName, score: 0})
        })
    }

    playLine(x: number, y: number, direction: string, name: string) {
        this.board.setLineOwner(x,y,direction,name)
    }

    calculateCases() {
        for (let y = 0; y < this.board.height*2; y++) {
            
        }
    }
}