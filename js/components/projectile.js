import { Cell, Projectile as ProjectileEnum } from "../constants.js"

export default class Projectile {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.width = ProjectileEnum.WIDTH
        this.height = ProjectileEnum.HEIGHT
        this.speed = ProjectileEnum.SPEED
        this.damage = ProjectileEnum.DAMAGE
        this.image = new Image()
        this.image.src = ProjectileEnum.IMG_SRC
    }

    update(delta) {
        this.x += this.speed
        
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y + (Cell.SIZE / 2 - 10), this.width, this.height)

    }
}