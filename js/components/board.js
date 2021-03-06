import { ButtonStateColors, Canvas, Cell as CellEnum, ControlBar } from "../constants.js"
import { getRandomNumber } from "../utils.js"
import Cell from "./cell.js"

export default class Board { 
    constructor(game) {
        this.game = game
        this.controlBar = {
            x: 0,
            y: 0,
            height: ControlBar.HEIGHT,
            width: ControlBar.WIDTH,
            color: ControlBar.COLOR,
        }
        this.swordmanButtonImage = new Image()
        this.swordmanButtonImage.src = 'assets/swordman.png'
        this.archerButtonImage = new Image()
        this.archerButtonImage.src = 'assets/archer.png'
        this.tree1Img = new Image()
        this.tree2Img = new Image()
        this.tree3Img = new Image()
        this.tree1Img.src = 'assets/tree_44.png'
        this.tree2Img.src = 'assets/tree_51.png'
        this.tree3Img.src = 'assets/tree_54.png'
        this.grassImg = new Image()
        this.grassImg.src = 'assets/grass_template2.jpg'

        this.cells = []
        this.createGrid()

        this.swordmanButton = {
            x: ControlBar.WIDTH - CellEnum.SIZE + CellEnum.GAP, 
            y: 0 + CellEnum.GAP, 
            width: CellEnum.SIZE - CellEnum.GAP * 2,
            height: ControlBar.HEIGHT - CellEnum.GAP * 2, 
            image: this.swordmanButtonImage, 
            color: `rgba(0, 0, 255, ${this.buttonAlfa})`,
            state: 'normal',
            value: 'swordman',
        }
        this.archerButton = {
            x: ControlBar.WIDTH - (CellEnum.SIZE * 2) + CellEnum.GAP, 
            y: 0 + CellEnum.GAP, 
            width: CellEnum.SIZE - CellEnum.GAP * 2,
            height: ControlBar.HEIGHT - CellEnum.GAP * 2, 
            image: this.archerButtonImage, 
            color: `rgba(0, 0, 255, ${this.buttonAlfa})`,
            state: 'normal',
            value: 'archer',
        }

    }

    getRandomCell() {
        return this.cells[getRandomNumber(0, this.cells.length - 1)]
    }

    createGrid() {
        for (let y = CellEnum.SIZE; y < Canvas.HEIGHT; y += CellEnum.SIZE) {
            for (let x = 0; x < Canvas.WIDTH; x += CellEnum.SIZE) {
                this.cells.push(new Cell(x, y))
            }
        }
    }

    drawBackground() {
        this.game.ctx.drawImage(this.grassImg, 0, 0, Canvas.WIDTH, Canvas.HEIGHT)
    }

    getTreeImg(treeNumber) {
        switch (treeNumber) {
            case 1:
                return this.tree1Img
            case 2:
                return this.tree2Img
            case 3:
                return this.tree3Img
            default:
                return this.tree1Img
        }
    }

    drawTree(cell) {
        const treeNumber = getRandomNumber(1, 3)
        const treeImg = this.getTreeImg(treeNumber)
    }
    

    draw() {
        const { mouse } = this.game

        this.drawBackground()

        this.cells.forEach((cell, i) => {
            if (i % 9 === 0) {
                this.drawTree(cell)
            }

            if (mouse.hover(cell)) {
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
        this.game.ctx.fillText(' Scores: ' + Math.floor(this.game.scores), 0, ControlBar.TEXT_LINE_HEIGHT * 2)

        if (this.game.isOver) {
            this.drawGameOver()
        }

        this.drawButton(this.swordmanButton)
        this.drawButton(this.archerButton)
    }

    drawButton({x, y, width, height, image, state, value}) {
        this.game.ctx.fillStyle = ButtonStateColors[state]

        if (this.game.defenderType === value) {
            this.game.ctx.fillStyle = `red`
        }

        this.game.ctx.fillRect(x, y, width, height)
        this.game.ctx.drawImage(
            image,
            0,
            0,
            100,
            100,
            x,
            y,
            width,
            height
        )
    }
    
    drawGameOver() {
        const str = 'Game Over'
        this.game.ctx.font = ControlBar.WARN_TEXT_SIZE + " " + ControlBar.WARN_TEXT_FONT
        this.game.ctx.fillStyle = ControlBar.WARN_TEXT_COLOR
        const strWidth = this.game.ctx.measureText(str).width
        this.game.ctx.fillText(str, this.game.canvas.width / 2 - strWidth / 2, 300)
    }
}