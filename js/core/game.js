import Canvas from "./canvas.js"
import Mouse from "./mouse.js"
import Board from "../components/board.js"
import Defender from "../components/defender.js"
import Enemy from "../components/enemy.js"
import { 
    START_MONEY,
    Defender as DefenderEnum, 
    Enemy as EnemyEnum,
    Canvas as CanvasEnum,
    Cell as CellEnum,
    Resource as ResourceEnum,
} from "../constants.js"
import Resource from "../components/resource.js"
import FloatingMessage from "../components/floating-message.js"

export default class Game {
    constructor() {
        this.canvas = new Canvas()
        this.ctx = this.canvas.getContext()
        this.mouse = new Mouse(this)
        this.board = new Board(this)
        this.projectiles = []
        this.defenders = []
        this.enemies = []
        this.enemiesPositions = []
        this.resources = []
        this.floatingMessages = []
        this.money = START_MONEY
        this.scores = 0
        this.frameCount = 0
        this.enemyInterval = EnemyEnum.INTERVAL
        this.isOver = false
        this.isWin = false
        this.defenderType = 'swordman'
    }

    addMessage(source) {
        this.floatingMessages.push(new FloatingMessage({
            text: source.value,
            x: source.x,
            y: source.y,
            color: source.color,
        }))
    }

    removeResource(resource) {
        this.money += resource.value
        this.resources.splice(this.resources.indexOf(resource), 1)
        this.addMessage(resource)
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
        const isEmpty = !this.defenders.some(({x, y}) => x === cell.x && y === cell.y)
        if (
            cell &&
            isEmpty &&
            this.money >= DefenderEnum.COST  
        ) {
            this.defenders.push(new Defender(cell.x, cell.y, this.defenderType))
            this.money -= DefenderEnum.COST
        } else if (!isEmpty) {
            this.addMessage({
                value: `This cell is already occupied`,
                x: this.mouse.x,
                y: this.mouse.y,
                color: 'red',
            })
        } else{
            this.addMessage({
                value: `Not enough money`,
                x: this.mouse.x,
                y: this.mouse.y,
                color: 'red',
            })
        }
    }

    removeEnemy(i) {
        this.enemiesPositions.splice(this.enemiesPositions.indexOf(this.enemies[i].y), 1)
        this.scores += this.enemies[i].maxHealth / 2
        this.addMessage(this.enemies[i])
        this.enemies.splice(i, 1)
    }

    addEnemy() {
        const {y} = this.board.getRandomCell()
        this.enemies.push(new Enemy(y))
        this.enemiesPositions.push(y)
    }

    update(delta) {
        this.frameCount += 1

        this.handleEnemies(delta)
        this.handleDefenders(delta)
        this.handleProjectile(delta)    
        this.handleCollisions()
        this.handleResources()
        this.handleFloatingMessages(delta)
    }
    
    handleFloatingMessages(delta) {
        this.floatingMessages.forEach((message, i) => {
        message.update(delta)
            if (message.isOver) {
                this.floatingMessages.splice(i, 1)
            }
        })
    }

    handleEnemies(delta) {
        this.enemies.forEach((enemy, i) => {
            if (enemy.health < 0) {
                this.removeEnemy(i)
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
        this.enemies.forEach((enemy, j) => {
            this.projectiles.forEach((projectile, j) => {
                if (this.checkCollision(projectile, enemy)) {
                    enemy.health -= projectile.damage
                    this.projectiles.splice(j, 1)
                }
            })

            this.defenders.forEach((defender) => {
                if (this.checkCollision(enemy, defender)) {
                    defender.stab = true
                    enemy.movement = 0
                    defender.health -= enemy.damage
                    enemy.health -= defender.damage
                    
                    if (defender.health < 1) {
                        enemy.movement = enemy.speed
                    }
                    
                    if (enemy.health < 1) {
                        defender.stab = false
                    }
                }
            })
        })
    }

    handleDefenders(delta) {
        this.defenders.forEach((defender, i) => {
            if (defender.health < 0) {
                this.defenders.splice(i, 1)
            } else {
                let isEnemyOnLine = false
                this.enemiesPositions.forEach((enemyPosition) => {
                    if (enemyPosition === defender.y) {
                        isEnemyOnLine = true
                    }
                })

                if (defender.type === 'archer') {
                    defender.shooting = isEnemyOnLine
                }

                defender.update(delta, this.projectiles)
            }
        })
    }

    handleProjectile(delta) {
        this.projectiles.forEach((projectile, i) => {
            if (projectile.x > CanvasEnum.WIDTH - CellEnum.SIZE) {
                this.projectiles.splice(i, 1)
            } else {
                projectile.update(delta)
            }
        })
    }

    handleResources() {
        if (this.frameCount % ResourceEnum.INTERVAL === 0) {
            this.resources.push(new Resource())
        }
    }

    draw(delta) {
        this.clear()
        
        this.board.draw()

        this.projectiles.forEach((projectile) => projectile.draw(this.ctx))
        this.defenders.forEach((defender) => defender.draw(this.ctx))
        this.enemies.forEach((enemy) => enemy.draw(this.ctx))
        this.resources.forEach((resource) => resource.draw(this.ctx))
        
        this.board.drawControlBar(this.ctx)
        this.floatingMessages.forEach((message) => message.draw(this.ctx))
    }
    
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
}