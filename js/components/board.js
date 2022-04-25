import { Canvas, Cell as CellEnum, ControlBar } from "../constants.js"
import Cell from "./cell.js"

export default class Board { 
    constructor(game) {
        this.game = game
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
        const { mouse } = this.game

        this.drawControlBar()
        this.board.forEach((cell) => {
            if (cell.contains(mouse)) {
                cell.draw(this.game.ctx)
            }
        })
    }

    drawControlBar() {
        this.game.ctx.fillStyle = this.controlBar.color
        this.game.ctx.fillRect(0, 0, this.controlBar.width, this.controlBar.height)

        this.game.ctx.fillStyle = ControlBar.TEXT_COLOR
        this.game.ctx.font = ControlBar.TEXT_LINE_HEIGHT + "px Arial"
        this.game.ctx.fillText(' Money: ' + Math.floor(this.game.money), 0, ControlBar.TEXT_LINE_HEIGHT)

    }
}