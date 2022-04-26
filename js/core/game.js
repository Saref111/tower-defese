import Canvas from "./canvas.js"
import Mouse from "./mouse.js"
import Board from "../components/board.js"
import Defender from "../components/defender.js"
import Enemy from "../components/enemy.js"
import { 
    START_MONEY,
    Defender as DefenderEnum, 
    Enemy as EnemyEnum,
} from "../constants.js"

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
        this.enemyInterval = EnemyEnum.INTERVAL
        this.isOver = false
        // this.gameState = new GameState()
        // this.utilities = new Utilities()

    }

    checkCollision(object1, object2) {
        return (
            object1.x < object2.x + object2.width &&
            object1.x + object1.width > object2.x &&
            object1.y < object2.y + object2.height &&
            object1.y + object1.height > object2.y
        )
    }

    addDefender(cell) { 
        if (
            cell &&
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

        this.handleEnemies(delta)
        this.handleDefenders(delta)
        this.handleCollisions()
    }
    
    handleEnemies(delta) {
        this.enemies.forEach((enemy) => {
            if (enemy.health < 0) {
                this.enemies.splice(this.enemies.indexOf(enemy), 1)
            } else {
                enemy.update(delta)
                if (enemy.x <= 0) {
                    this.isOver = true
                }
            }
        })
    
        if (this.frameCount % this.enemyInterval === 0) {
            this.addEnemy()
            if (this.enemyInterval > EnemyEnum.MIN_INTERVAL) {
                this.enemyInterval -= EnemyEnum.INTERVAL_DECREMENT
            }
        }
    }

    handleCollisions() {
        this.defenders.forEach((defender) => {
            this.enemies.forEach((enemy) => {
                if (this.checkCollision(enemy, defender)) {
                    enemy.movement = 0
                    defender.health -= EnemyEnum.DAMAGE
                    enemy.health -= DefenderEnum.DAMAGE
                    
                    if (defender.health < 1) {
                        enemy.movement = enemy.speed
                    }
                }
            })
        })
    }

    handleDefenders(delta) {
        this.defenders.forEach((defender) => {
            if (defender.health < 0) {
                this.defenders.splice(this.defenders.indexOf(defender), 1)
            } else {
                defender.update(delta)
            }
        })
    }

    draw(delta) {
        this.clear()

        // this.projectiles.forEach(projectile => projectile.draw())
        this.defenders.forEach((defender) => defender.draw(this.ctx))
        this.enemies.forEach((enemy) => {
            enemy.draw(this.ctx)
            
        })
        // this.resources.forEach(resource => resource.draw())
        this.board.draw()
    }
    
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
}