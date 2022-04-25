import Game from "./core/game.js"
import Canvas from "./core/canvas.js"
import { animate } from "./utils.js"
import Mouse from "./core/mouse.js"

const canvas = new Canvas()
const mouse = new Mouse(canvas)
const game = new Game(canvas, mouse)



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

