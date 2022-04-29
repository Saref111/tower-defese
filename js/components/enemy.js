import { Canvas, Cell, Enemy as EnemyEnum, FPS } from "../constants.js";
import { getRandomNumber } from "../utils.js";

export default class Enemy {
    constructor(y) {
        this.x = Canvas.WIDTH
        this.y = y
        this.width = Cell.SIZE
        this.height = Cell.SIZE
        this.speed = getRandomNumber(EnemyEnum.MIN_SPEED, EnemyEnum.MAX_SPEED)
        this.movement = this.speed
        this.health = EnemyEnum.HEALTH
        this.maxHealth = this.health
        this.color = EnemyEnum.COLOR
        this.value = this.maxHealth / 2
        this.frameX = 0
        this.frameY = 0
        this.frameHeight = Cell.SIZE
        this.frameCount = EnemyEnum.WALK_SPRITE_COUNT
        this.image = null
        this.imageAttack = new Image()
        this.imageWalk = new Image()
        this.imageAttack.src = EnemyEnum.IMG_SRC_ATTACK
        this.imageWalk.src = EnemyEnum.IMG_SRC_WALK
        this.frameWidth = 0  
        this.frameWidth = 0  
        this.frameTimer = 0
        this.frameInterval = 1000 / FPS
        this.damage = EnemyEnum.DAMAGE
    }

    toggleFrame() {
        this.frameX += 1
        if (this.frameX >= this.frameCount) {
            this.frameX = 0
        }
    }

    setSprite() {
        if (this.movement > 0) {
            this.image = this.imageWalk
            this.frameCount = EnemyEnum.WALK_SPRITE_COUNT
            this.frameWidth = EnemyEnum.WALK_SPRITE_WIDTH / this.frameCount
            this.frameY = 0
        } else {
            this.image = this.imageAttack
            this.frameCount = EnemyEnum.ATTACK_SPRITE_COUNT
            this.frameWidth = EnemyEnum.ATTACK_SPRITE_WIDTH / this.frameCount
            this.frameY = 0
        }
    }

    update(delta) {
        this.x -= this.movement

        if (this.frameTimer > this.frameInterval / (this.movement === 0 ? EnemyEnum.MIN_SPEED : this.speed)) {
            this.frameTimer = 0
            this.toggleFrame()
        } else {
            this.frameTimer += delta
        }
    }

    draw(ctx) {
        this.setSprite()
        ctx.drawImage(
            this.image,
            this.frameX * this.frameWidth,
            this.frameY,
            this.frameWidth,
            this.frameHeight,
            this.x,
            this.y,
            this.width,
            this.height
        )

        ctx.fillStyle = EnemyEnum.TEXT_COLOR
        ctx.font = EnemyEnum.TEXT_LINE_HEIGHT + "px Arial"
        ctx.fillText(Math.floor(this.health), this.x, this.y + EnemyEnum.TEXT_LINE_HEIGHT * 2)
    }
}