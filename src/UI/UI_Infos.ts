import {Game, Player} from "../Game"

export default class UI_Infos extends HTMLElement {
    game: Game

    constructor() {
        super()
        const container = document.createElement("div")
        container.classList.add("game-infos-container")
        const score1 = document.createElement("span")
        const score2 = document.createElement("span")
        score1.classList.add("score-1")
        score2.classList.add("score-2")
        score1.innerHTML = this.game.players[0].name + " : " + this.game.players[0].score.toString()
        score2.innerHTML = this.game.players[1].name + " : " + this.game.players[1].score.toString()

        const scoreDiv = document.createElement("div")
        scoreDiv.classList.add("scores")
        scoreDiv.appendChild(score1)
        scoreDiv.appendChild(score2)
        container.appendChild(scoreDiv)

        this.appendChild(container)
    }

    updateScore() {
        const score1: HTMLSpanElement = document.querySelector(".score-1")
        const score2: HTMLSpanElement = document.querySelector(".score-2")

        score1.innerHTML = this.game.players[0].name + " : " + this.game.players[0].score
        score2.innerHTML = this.game.players[1].name + " : " + this.game.players[1].score
    }
}