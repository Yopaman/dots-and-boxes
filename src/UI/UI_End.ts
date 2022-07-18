import {Board} from "../Board";
import UI_Board from "./UI_Board";
import {Game} from "../Game";
import UI_Infos from "./UI_Infos";

export default class UI_End extends HTMLElement {

    connectedCallback() {
        const replayButton: HTMLButtonElement | null = document.querySelector(".replay-button")
        replayButton!.addEventListener("click", () => {
            this.replay()
        })
    }

    constructor() {
        super()

        const overlay = document.createElement("div")
        overlay.classList.add("overlay")

        // Tailwind
        overlay.classList.add(
            "absolute",
            "top-0",
            "left-0",
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
            "sm:w-1/4",
            "h-fit",
            "sm:h-fit",
            "p-5",
            "bg-white",
            "shadow-sm",
            "rounded-md"
        )

        const endText = document.createElement("h1")
        endText.classList.add("end-text")

        const replayButton = document.createElement("button")
        replayButton.classList.add("replay-button")
        replayButton.appendChild(document.createTextNode("Rejouer"))

         // Tailwind
         replayButton.classList.add(
            "h-10",
            "w-2/4",
            "mt-5",
            "bg-blue-600",
            "text-white",
            "rounded-md",
            "hover:bg-blue-700",
            "active:bg-blue-800",
            "shadow-md",
            "hover:shadow-lg"
        )

        container.appendChild(endText)
        container.appendChild(replayButton)

        overlay.appendChild(container)
        this.appendChild(overlay)
    }

    setWinner(name: string | null) {
        const endText = document.querySelector(".end-text")
        if (name == null) {
            endText!.appendChild(document.createTextNode("Égalité"))
        } else {
            endText!.appendChild(document.createTextNode("Victoire de " + name))
        }
    }

    replay() {
        window.location.reload()
    }

}