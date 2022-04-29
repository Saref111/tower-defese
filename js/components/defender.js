import { Cell, Defender as DefenderEnum, FPS } from "../constants.js"
import { getRandomNumber } from "../utils.js"
import Projectile from "./projectile.js"
export default class Defender {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.width = Cell.SIZE
        this.height = Cell.SIZE
        this.shooting = false
        this.shootingNow = false
        this.health = DefenderEnum.HEALTH
        this.shootingDelay = DefenderEnum.SHOOTING_DELAY
        this.timer = 0
        this.image = new Image()
        this.image.src = DefenderEnum.IMG_SRC
        this.frameX = 0
        this.frameY = 0
        this.frameTimer = 0
        this.frameInterval = 1000 / FPS
        this.maxFrameX = DefenderEnum.MAX_FRAME_X
        this.frameWidth = DefenderEnum.SPRITE_WIDTH / (this.maxFrameX + 1)
        this.shootSpritePosition = DefenderEnum.SHOOT_SPRITE_POSITION
    }

    isShootingNow() {
        if (this.frameX === this.shootSpritePosition) {
            this.shootingNow = true
        } else {
            this.shootingNow = false
        }
    }

    toggleFrame() {
        this.frameX += 1
        if (this.frameX >= this.maxFrameX) {
            this.frameX = 0
        }

        this.isShootingNow()
    }

    countTimer(delta) {
        if (this.frameTimer > this.frameInterval) {            
            this.frameTimer = 0
            this.toggleFrame()
        } else {
            this.frameTimer += delta    
        }
    }

    update(delta, projectiles) {
        if (this.shooting) {
            this.countTimer(delta)
            
            if (this.shootingNow) {
                projectiles.push(new Projectile(this.x, this.y))
                this.toggleFrame()
            }
        }
    }

    draw(ctx) {
        ctx.drawImage(
            this.image, 
            this.frameX * this.frameWidth, 
            this.frameY, 
            this.width, 
            this.height,
            this.x,
            this.y,
            this.width,
            this.height
            )

        ctx.fillStyle = DefenderEnum.TEXT_COLOR
        ctx.font = DefenderEnum.TEXT_LINE_HEIGHT + "px Arial"
        ctx.fillText(Math.floor(this.health), this.x, this.y + DefenderEnum.TEXT_LINE_HEIGHT)
    }
}