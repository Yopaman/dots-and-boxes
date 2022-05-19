import Game from "../Game";

export default class UI_Creation extends HTMLElement {
    constructor() {
        super()

        const overlay = document.createElement("div")
        overlay.classList.add("overlay")

        const container = document.createElement("div")
        container.classList.add("form-container")

        const player1Input = document.createElement("input")
        const player2Input = document.createElement("input")

        const validateButton = document.createElement("button")
        validateButton.appendChild(document.createTextNode("Valider"))

        container.appendChild(player1Input)
        container.appendChild(player2Input)
        container.appendChild(validateButton)


        overlay.appendChild(container)
        this.appendChild(overlay)
    }
}