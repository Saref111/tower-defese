import { Canvas, Cell, Enemy as EnemyEnum } from "../constants.js";
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
    }

    update(delta) {
        this.x -= this.movement
    }

    draw(ctx) {
        ctx.fillStyle = EnemyEnum.COLOR
        ctx.fillRect(this.x, this.y, this.width, this.height)

        ctx.fillStyle = EnemyEnum.TEXT_COLOR
        ctx.font = EnemyEnum.TEXT_LINE_HEIGHT + "px Arial"
        ctx.fillText(Math.floor(this.health), this.x, this.y + EnemyEnum.TEXT_LINE_HEIGHT)
    }
}