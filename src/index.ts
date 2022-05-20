import {Board} from "./Board"
import UI_Board from "./UI/UI_Board"
import UI_Creation from "./UI/UI_Creation"

customElements.define("game-board", UI_Board)
const ui_board: UI_Board = document.querySelector("game-board")

customElements.define("game-info", UI_Creation)
const ui_score: UI_Board = document.querySelector("score")

const board = new Board(10,10)

board.printBoard()

ui_board.interractLine(2,0,"top","click","red")