import Board from "./Board"
import UI_Board from "./UI/UI_Board"

customElements.define("game-board", UI_Board)

const board = new Board(10,10)

board.printBoard()