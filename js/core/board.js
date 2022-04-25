import { Canvas, Cell as CellEnum, ControlBar } from "./constants.js"
import Cell from "../components/cell.js"

export default class Board { 
    constructor(ctx) {
        this.ctx = ctx
        this.controlBar = {
            height: ControlBar.HEIGHT,
            width: ControlBar.WIDTH,
            color: ControlBar.COLOR,
        }
        this.board = []
        this.createGrid()

    }

    createGrid() {
        for (let y = CellEnum.SIZE; y < Canvas.HEIGHT; y += CellEnum.SIZE) {
            for (let x = 0; x < Canvas.WIDTH; x += CellEnum.SIZE) {
                this.board.push(new Cell(x, y))
            }
        }
    }

    update(delta) {}

    draw() {
        this.drawControlBar()
        this.board.forEach((cell) => {
            cell.draw(this.ctx)
            console.log(cell);
        })
    }

    drawControlBar() {
        this.ctx.fillStyle = this.controlBar.color
        this.ctx.fillRect(0, 0, this.controlBar.width, this.controlBar.height)
    }
}