import { Cell, Canvas } from "./constants.js"

export default class Board { 
    constructor(ctx) {
        this.ctx = ctx
        this.canvas = {
            width: Canvas.WIDTH,
            height: Canvas.HEIGHT,
        }
        this.cell = {
            size: Cell.SIZE,
            gap: Cell.GAP,
        }
    }
}