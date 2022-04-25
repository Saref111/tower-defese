import Board from "../components/board.js"
export default class Game {
    constructor(ctx, mouse) {
        this.ctx = ctx
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
        this.board.draw()
        // this.projectiles.forEach(projectile => projectile.draw())
        // this.defenders.forEach(defender => defender.draw())
        // this.enemies.forEach(enemy => enemy.draw())
        // this.resources.forEach(resource => resource.draw())
    }
}