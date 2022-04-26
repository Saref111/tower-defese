import { Cell, Canvas, Resource as ResourceEnum } from "../constants.js"
import { getRandomNumber } from "../utils.js"

export default class Resource {
    constructor() {
        this.x = getRandomNumber(0, Canvas.WIDTH - Cell.SIZE)
        this.y = getRandomNumber(0, Canvas.HEIGHT / Cell.SIZE) + Cell.SIZE
        this.width = Cell.SIZE * ResourceEnum.MULTIPLIER
        this.height = Cell.SIZE * ResourceEnum.MULTIPLIER
        this.value = ResourceEnum.VALUE
    }

    update(delta) {}

    draw(ctx) {
        ctx.fillStyle = ResourceEnum.COLOR
        ctx.fillRect(this.x, this.y, this.width, this.height)
        
        ctx.fillStyle = ResourceEnum.TEXT_COLOR
        ctx.fillText(this.value, this.x + this.width / 4, this.y + this.height / 2)
    }
}