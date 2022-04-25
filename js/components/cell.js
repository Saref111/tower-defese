import { Cell as CellEnum } from '../constants.js'

export default class Cell {
    constructor(x, y) {
        console.log(CellEnum);
        this.x = x
        this.y = y
        this.width = CellEnum.SIZE
        this.height = CellEnum.SIZE
    }

    draw(ctx) {
        ctx.strokeStyle = CellEnum.COLOR
        ctx.strokeRect(this.x, this.y, this.width, this.height)
    }
}