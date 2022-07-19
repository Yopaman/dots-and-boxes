import {Game, Player} from "../Game"
import { truncate } from "../helpers/truncate"

export default class UI_Infos extends HTMLElement {
    game: Game

    constructor() {
        super()
        const container = document.createElement("div")
        container.classList.add("game-infos-container")

        //Tailwind
        container.classList.add(
            "container",
            "relative",
            "sm:w-fit",
            "w-full",
            "p-5",
            "pt-0",
            "flex",
            "flex-col",
            "content-top",
            "items-center",
            "mx-auto",
            "mt-10",
            "bg-slate-200",
            "rounded-md"
        )

        const title = document.createElement("h1")
        title.classList.add("infos-title")
        title.appendChild(document.createTextNode("Score :"))

        //Tailwind
        title.classList.add(
            "text-2xl",
            "font-bold",
            "mt-3",
            "mb-3"
        )

        const score1 = document.createElement("span")
        const score2 = document.createElement("span")
        score1.classList.add("score-1")
        score2.classList.add("score-2")

        // Tailwind
        const attributes = [
            "mx-2"
        ]
        score1.classList.add(...attributes)
        score2.classList.add(...attributes)

        score1.innerHTML = "<strong>" + truncate(this.game.players[0].name, 8) + "</strong>" + " : " + this.game.players[0].score.toString()
        score2.innerHTML = "<strong>" + truncate(this.game.players[1].name, 8) + "</strong>" + " : " + this.game.players[1].score.toString()

        container.appendChild(title)

        const scoreDiv = document.createElement("div")
        scoreDiv.classList.add("scores")

        // Tailwind
        scoreDiv.classList.add(
            "w-3/4",
            "sm:w-fit",
            "flex",
            "justify-between",
            "mb-2"
        )

        scoreDiv.appendChild(score1)
        scoreDiv.appendChild(score2)
        container.appendChild(scoreDiv)

        const currentPlayer = document.createElement("span")
        currentPlayer.classList.add("current-player")
        currentPlayer.innerHTML = "Au tour de " + "<strong>" + truncate(this.game.players[this.game.currentPlayer].name, 8) + "</strong>" + " de jouer"
        container.appendChild(currentPlayer)

        this.appendChild(container)
    }

    updateScore() {
        const score1: HTMLSpanElement | null = document.querySelector(".score-1")
        const score2: HTMLSpanElement | null = document.querySelector(".score-2")
        const currentPlayer: HTMLSpanElement | null = document.querySelector(".current-player")

        score1!.innerHTML = "<strong>" + truncate(this.game.players[0].name, 8) + "</strong>" + " : " + this.game.players[0].score.toString()
        score2!.innerHTML = "<strong>" + truncate(this.game.players[1].name, 8) + "</strong>" + " : " + this.game.players[1].score.toString()
        currentPlayer!.innerHTML = "Au tour de " + "<strong>" + truncate(this.game.players[this.game.currentPlayer].name, 8) + "</strong>" + " de jouer"
    }
}