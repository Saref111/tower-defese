import Canvas from "./canvas.js"
import Mouse from "./mouse.js"
import Board from "../components/board.js"
import Defender from "../components/defender.js"
import Enemy from "../components/enemy.js"
import { START_MONEY, Defender as DefenderEnum } from "../constants.js"
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
        this.money = START_MONEY
        this.frameCount = 0
        // this.gameState = new GameState()
        // this.utilities = new Utilities()

    }

    addDefender(cell) { 
        if (
            this.money >= DefenderEnum.COST && 
            !this.defenders.some(({x, y}) => x === cell.x && y === cell.y)
        ) {
            this.defenders.push(new Defender(cell.x, cell.y))
            this.money -= DefenderEnum.COST
        }
    }

    addEnemy() {
        const {y} = this.board.getRandomCell()
        this.enemies.push(new Enemy(y))
    }

    update(delta) {
        this.frameCount += 1
        this.enemies.forEach(enemy => enemy.update(delta))

        if (this.frameCount % 300 === 0) {
            this.addEnemy()
        }
    }

    draw(delta) {
        this.clear()

        this.board.draw()
        // this.projectiles.forEach(projectile => projectile.draw())
        this.defenders.forEach((defender) => defender.draw(this.ctx))
        this.enemies.forEach(enemy => enemy.draw(this.ctx))
        // this.resources.forEach(resource => resource.draw())
    }
    
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
}