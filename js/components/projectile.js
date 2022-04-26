import { Projectile as ProjectileEnum } from "../constants.js"

export default class Projectile {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.width = ProjectileEnum.SIZE
        this.height = ProjectileEnum.SIZE
        this.speed = ProjectileEnum.SPEED
        this.damage = ProjectileEnum.DAMAGE
    }

    update(delta) {
        this.x += this.speed
    }

    draw(ctx) {
        ctx.fillStyle = ProjectileEnum.COLOR
        ctx.beginPath()
        ctx.arc(this.x, this.y, ProjectileEnum.SIZE, 0, Math.PI * 2, false)
        ctx.fill()
    }
}