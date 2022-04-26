import { Cell, Projectile as ProjectileEnum } from "../constants.js"

export default class Projectile {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.width = ProjectileEnum.WIDTH
        this.height = ProjectileEnum.HEIGHT
        this.speed = ProjectileEnum.SPEED
        this.damage = ProjectileEnum.DAMAGE
    }

    update(delta) {
        this.x += this.speed
        
    }

    draw(ctx) {
        ctx.fillStyle = ProjectileEnum.COLOR    
        ctx.beginPath()
        ctx.arc(this.x + Cell.SIZE / 2, this.y + Cell.SIZE / 2, this.width, 0, Math.PI * 2)
        ctx.fill()
    }
}