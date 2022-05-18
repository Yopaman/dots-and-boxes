import {Board} from "./Board"
import UI_Board from "./UI/UI_Board"

customElements.define("game-board", UI_Board)
const ui_board: UI_Board = document.querySelector("game-board")

const board = new Board(10,10)

board.printBoard()

ui_board.interractLine(2,0,"top","click")