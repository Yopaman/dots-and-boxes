# Dots and Boxes

"Dot and Boxes" or "Pipopipette" in french is a two players game you can play with paper and pencil. I decided to recreate it using pure Typescript. Currently, you can only play offline, on the same computer. The main goal of this project is for me to practice Typescript, and have fun.

## Rules

The game is very simple. Each player can place a line between two dots. The goal is to close a square to get one point. When a player close a square, he can play again. The game finish when all boxes are closed. The player with the most points wins.

## Installation

1. Clone this project
```bash
git clone https://github.com/Yopaman/dots-anb-boxes.git
cd dots-and-boxes
```
2. Install the dependencies
```bash
npm install
```
3. You can run a small dev server
```bash
npm run dev
```
4. To build the project, run
```bash
npm run build
```

## Roadmap

- [x] Add an end screen/end of game detection
- [X] Improve UI
- [ ] Add game rules
- [ ] Add an AI player
- [ ] Add online mode