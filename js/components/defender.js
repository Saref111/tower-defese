import { Cell, Defender as DefenderEnum } from "../constants.js"
import { getRandomNumber } from "../utils.js"
import Projectile from "./projectile.js"
export default class Defender {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.width = Cell.SIZE
        this.height = Cell.SIZE
        this.shooting = false
        this.health = DefenderEnum.HEALTH
        this.shootingDelay = DefenderEnum.SHOOTING_DELAY
        this.timer = 0
    }

    update(delta, projectiles) {
        if (this.shooting) {
            this.timer += 1
            if (this.timer % this.shootingDelay === 0) {
                projectiles.push(new Projectile(this.x, this.y))
            }
        } else {
            this.timer = 0
        }
    }

    draw(ctx) {
        ctx.fillStyle = DefenderEnum.COLOR
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.fillStyle = DefenderEnum.TEXT_COLOR
        ctx.font = DefenderEnum.TEXT_LINE_HEIGHT + "px Arial"
        ctx.fillText(Math.floor(this.health), this.x, this.y + DefenderEnum.TEXT_LINE_HEIGHT)
    }
}