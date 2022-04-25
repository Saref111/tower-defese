import Canvas from "./canvas.js"
import Mouse from "./mouse.js"
import Board from "../components/board.js"
import Defender from "../components/defender.js"

export default class Game {
    constructor() {
        this.canvas = new Canvas()
        this.ctx = this.canvas.getContext()
        this.mouse = new Mouse(this)
        this.board = new Board(this)
        this.projectiles = []
        this.defenders = []
        this.enemies = []
        this.resources = []
        // this.gameState = new GameState()
        // this.utilities = new Utilities()

    }

    addDefender(cell) { 
        this.defenders.push(new Defender(cell.x, cell.y))
    }

    update(delta) {}

    draw(delta) {
        this.clear()

        this.board.draw()
        // this.projectiles.forEach(projectile => projectile.draw())
        this.defenders.forEach((defender) => defender.draw(this.ctx))
        // this.enemies.forEach(enemy => enemy.draw())
        // this.resources.forEach(resource => resource.draw())
    }
    
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
}