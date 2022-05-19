import Game from "../Game";

export default class UI_Creation extends HTMLElement {
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
        sizeInput.setAttribute("value", "10")
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
        
    }
}