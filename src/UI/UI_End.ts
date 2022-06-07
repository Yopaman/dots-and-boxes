import {Board} from "../Board";
import UI_Board from "./UI_Board";
import {Game} from "../Game";
import UI_Infos from "./UI_Infos";

export default class UI_End extends HTMLElement {

    connectedCallback() {
        const replayButton: HTMLButtonElement = document.querySelector(".replay-button")
        replayButton.addEventListener("click", () => {
            this.replay()
        })
    }

    constructor() {
        super()

        const overlay = document.createElement("div")
        overlay.classList.add("overlay")

        const container = document.createElement("div")
        container.classList.add("form-container")

        const endText = document.createElement("h1")
        endText.classList.add("end-text")

        const replayButton = document.createElement("button")
        replayButton.classList.add("replay-button")
        replayButton.appendChild(document.createTextNode("Rejouer"))

        container.appendChild(endText)
        container.appendChild(replayButton)

        overlay.appendChild(container)
        this.appendChild(overlay)
    }

    setWinner(name: string | null) {
        const endText = document.querySelector(".end-text")
        if (name == null) {
            endText.appendChild(document.createTextNode("Égalité"))
        } else {
            endText.appendChild(document.createTextNode("Victoire de " + name))
        }
    }

    replay() {
        window.location.reload()
    }

}