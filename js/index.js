import Game from "./core/game.js"
import Canvas from "./core/canvas.js"
import { animate } from "./utils.js"
import Mouse from "./core/mouse.js"

const canvas = new Canvas()
const mouse = new Mouse(canvas)

const ctx = canvas.getContext()
const game = new Game(ctx, mouse)


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

