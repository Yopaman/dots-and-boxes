import {Board} from "../Board";
import UI_Board from "./UI_Board";
import {Game} from "../Game";
import UI_Infos from "./UI_Infos";

export default class UI_Creation extends HTMLElement {

    connectedCallback() {
        const submitButton: HTMLButtonElement = document.querySelector(".validate-button")
        submitButton.addEventListener("click", () => {
            this.createGame()
        })
    }

    constructor() {
        super()

        const overlay = document.createElement("div")
        overlay.classList.add("overlay")

        const container = document.createElement("div")
        container.classList.add("form-container")

        const player1Input = document.createElement("input")
        player1Input.classList.add("player1-input")
        player1Input.setAttribute("value", "Joueur 1")
        const player2Input = document.createElement("input")
        player2Input.classList.add("player2-input")
        player2Input.setAttribute("value", "Joueur 2")

        const validateButton = document.createElement("button")
        validateButton.classList.add("validate-button")
        validateButton.appendChild(document.createTextNode("Valider"))

        const inputsContainer = document.createElement("div")
        inputsContainer.classList.add("inputs-container")
        inputsContainer.appendChild(player1Input)
        inputsContainer.appendChild(player2Input)

        const sizeLabel = document.createElement("label")
        sizeLabel.appendChild(document.createTextNode("Taille de la grille :"))
        const sizeInput = document.createElement("input")
        sizeInput.classList.add("size-input")
        sizeInput.setAttribute("type", "number")
        sizeInput.setAttribute("value", "5")
        sizeInput.setAttribute("min", "4")
        sizeInput.setAttribute("max", "20")

        container.appendChild(inputsContainer)
        container.appendChild(sizeLabel)
        container.appendChild(sizeInput)
        container.appendChild(validateButton)


        overlay.appendChild(container)
        this.appendChild(overlay)
    }

    createGame() {
        const sizeInput: HTMLInputElement = document.querySelector(".size-input")
        const boardSize = parseInt(sizeInput.value)
        const board = new Board(boardSize, boardSize)

        const player1: HTMLInputElement = document.querySelector(".player1-input")
        const p1_name = player1.value
        const player2: HTMLInputElement = document.querySelector(".player2-input")
        const p2_name = player2.value

        const overlay: HTMLDivElement = document.querySelector(".overlay")
        overlay.style.display = "none"

        const ui_board = document.createElement("game-board")
        ui_board.setAttribute("board-width", boardSize.toString())
        ui_board.setAttribute("board-height", boardSize.toString())
        document.querySelector(".app").appendChild(ui_board)
        customElements.define("game-board", UI_Board)

        const game = new Game(board, p1_name, p2_name);
        UI_Board.prototype.game = game;

        UI_Infos.prototype.game = game;

        const ui_infos = document.createElement("game-infos")
        customElements.define("game-infos", UI_Infos)
        document.querySelector(".app").appendChild(ui_infos)
        
    }
}