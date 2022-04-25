import { Canvas, Cell } from "./core/constants.js"
import Game from "./core/game.js"
import { animate } from "./utils.js"

const canvas = document.createElement('canvas')
canvas.width = Canvas.WIDTH
canvas.height = Canvas.HEIGHT
document.body.appendChild(canvas)

const ctx = canvas.getContext('2d')
const game = new Game(ctx)

animate(game)
//constants
//game class
//create a game board
// projectiles
//defenders
//enemies
//game state
//resources
//utilities

