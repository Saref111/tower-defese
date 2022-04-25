import Board from "../components/board.js"
export default class Game {
    constructor(canvas, mouse) {
        this.canvas = canvas
        this.ctx = this.canvas.getContext()
        this.mouse = mouse
        this.board = new Board(this)
        this.projectiles = []
        this.defenders = []
        this.enemies = []
        this.resources = []
        // this.gameState = new GameState()
        // this.utilities = new Utilities()
        console.log(this.board);
    }

    update(delta) {}

    draw(delta) {
        this.clear()

        this.board.draw()
        // this.projectiles.forEach(projectile => projectile.draw())
        // this.defenders.forEach(defender => defender.draw())
        // this.enemies.forEach(enemy => enemy.draw())
        // this.resources.forEach(resource => resource.draw())
    }
    
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
}