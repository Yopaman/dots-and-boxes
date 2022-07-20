import {Board} from "../Board";
import UI_Board from "./UI_Board";
import {Game} from "../Game";
import UI_Infos from "./UI_Infos";

export default class UI_Creation extends HTMLElement {

    connectedCallback() {
        const submitButton = document.querySelector(".validate-button")
        submitButton!.addEventListener("click", () => {
            this.createGame()
        })
    }

    constructor() {
        super()

        const overlay = document.createElement("div")
        overlay.classList.add("overlay")

        // Tailwind
        overlay.classList.add(
            "flex",
            "h-screen",
            "w-screen",
            "bg-black",
            "bg-opacity-50",
            "backdrop-blur-lg",
            "z-0"
        )

        const container = document.createElement("div")
        container.classList.add("form-container")

        // Tailwind
        container.classList.add(
            "container",
            "relative",
            "flex",
            "flex-col",
            "justify-center",
            "items-center",
            "m-auto",
            "w-full",
            "sm:w-1/2",
            "h-fit",
            "sm:h-1/2",
            "bg-white",
            "shadow-sm",
            "rounded-md"
        )

        const title = document.createElement("h1")
        title.classList.add("creation-title")
        title.appendChild(document.createTextNode("Créer une partie"))

        //Tailwind
        title.classList.add(
            "text-3xl",
            "font-bold",
            "absolute",
            "top-3"
        )

        const player1Input = document.createElement("input")
        player1Input.classList.add("player1-input")
        player1Input.setAttribute("value", "Joueur 1")

        // Tailwind
        player1Input.classList.add(
            "pl-1",
            "border",
            "rounded-md",
            "text-slate-600",
            "border-slate-300",
            "h-10",
            "shadow-sm",
            "w-1/2",
            "mr-2"
        )

        const player2Input = document.createElement("input")
        player2Input.classList.add("player2-input")
        player2Input.setAttribute("value", "Joueur 2")

        // Tailwind
        player2Input.classList.add(
            "pl-1",
            "border",
            "rounded-md",
            "text-slate-600",
            "border-slate-300",
            "h-10",
            "shadow-sm",
            "w-1/2",
            "ml-2"
        )

        const validateButton = document.createElement("button")
        validateButton.classList.add("validate-button")
        validateButton.appendChild(document.createTextNode("Valider"))

        // Tailwind
        validateButton.classList.add(
            "absolute",
            "bottom-5",
            "h-10",
            "w-2/4",
            "bg-blue-600",
            "text-white",
            "rounded-md",
            "hover:bg-blue-700",
            "active:bg-blue-800",
            "shadow-md",
            "hover:shadow-lg"
        )
        
        const inputsContainer = document.createElement("div")
        inputsContainer.classList.add("inputs-container")
        inputsContainer.appendChild(player1Input)
        inputsContainer.appendChild(player2Input)

        // Tailwind
        inputsContainer.classList.add(
            "w-3/4",
            "mb-5",
            "mt-16",
            "sm:mt-0",
            "flex",
            "flex-row",
            "justify-between"
        )

        const sizeLabel = document.createElement("label")
        sizeLabel.appendChild(document.createTextNode("Taille de la grille :"))
        const sizeInput = document.createElement("input")
        sizeInput.classList.add("size-input")
        sizeInput.setAttribute("type", "number")
        sizeInput.setAttribute("value", "5")
        sizeInput.setAttribute("min", "4")
        sizeInput.setAttribute("max", "20")

        // Tailwind
        sizeInput.classList.add(
            "h-10",
            "w-1/4",
            "border",
            "rounded-md",
            "border-slate-300",
            "pl-1",
            "text-slate-600",
            "mb-20",
            "sm:mb-0"
        )

        container.appendChild(title)
        container.appendChild(inputsContainer)
        container.appendChild(sizeLabel)
        container.appendChild(sizeInput)
        container.appendChild(validateButton)


        overlay.appendChild(container)
        this.appendChild(overlay)
    }

    createGame() {
        const sizeInput: HTMLInputElement | null = document.querySelector(".size-input")
        const boardSize = parseInt(sizeInput!.value)
        const board = new Board(boardSize, boardSize)

        const player1: HTMLInputElement | null = document.querySelector(".player1-input")
        const p1_name = player1!.value
        const player2: HTMLInputElement | null = document.querySelector(".player2-input")
        const p2_name = player2!.value

        const overlay: HTMLDivElement | null = document.querySelector(".overlay")
        overlay!.style.display = "none"

        const ui_board = document.createElement("game-board")
        ui_board.setAttribute("board-width", boardSize.toString())
        ui_board.setAttribute("board-height", boardSize.toString())
        document.querySelector(".app")!.appendChild(ui_board)
        customElements.define("game-board", UI_Board)

        const game = new Game(board, p1_name, p2_name);
        UI_Board.prototype.game = game;

        UI_Infos.prototype.game = game;

        const ui_infos = document.createElement("game-infos")
        customElements.define("game-infos", UI_Infos)
        document.querySelector(".app")!.appendChild(ui_infos)
        
    }
}