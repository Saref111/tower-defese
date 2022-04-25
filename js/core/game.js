import Board from "./board.js"
export default class Game {
    constructor(ctx) {
        this.ctx = ctx
        this.board = new Board(ctx)
        this.projectiles = []
        this.defenders = []
        this.enemies = []
        this.resources = []
        // this.gameState = new GameState()
        // this.utilities = new Utilities()
    }

    update(delta) {}

    draw(delta) {
        this.board.draw()
        this.projectiles.forEach(projectile => projectile.draw())
        this.defenders.forEach(defender => defender.draw())
        this.enemies.forEach(enemy => enemy.draw())
        this.resources.forEach(resource => resource.draw())
    }
}