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
}