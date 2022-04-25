import { Cell, Canvas, ControlBar } from "./constants.js"

export default class Board { 
    constructor(ctx) {
        this.ctx = ctx
        this.cell = {
            size: Cell.SIZE,
            gap: Cell.GAP,
            color: Cell.COLOR,
        }
        this.controlBar = {
            height: ControlBar.HEIGHT,
            width: ControlBar.WIDTH,
            color: ControlBar.COLOR,
        }
        this.board = []

    }

    update(delta) {}

    draw() {
        this.drawControlBar()
        this.board.forEach(row => {
            row.forEach(cell => {
                this.ctx.strokeStyle = cell.color
                this.ctx.strokeRect(cell.x, cell.y, this.cell.size, this.cell.size)
            })
        })
    }

    drawControlBar() {
        this.ctx.fillStyle = this.controlBar.color
        this.ctx.fillRect(0, 0, this.controlBar.width, this.controlBar.height)
    }
}