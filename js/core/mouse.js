import { Cell } from "../constants.js"

export default class Mouse {
    constructor(game) {
        this.x = undefined
        this.y = undefined
        this.currentCell = undefined
        this.width = 0.1
        this.height = 0.1
        this.game = game
        this.canvas = this.game.canvas
        this.canvasElement = this.canvas.element
        this.canvasPosition = this.canvas.position
        
        this.canvasElement.addEventListener('mousemove', (e) => this.handleMove(e))
        this.canvasElement.addEventListener('mouseleave', (e) => this.reset(e))
        this.canvasElement.addEventListener('click', (e) => this.handleClick(e))
    }

    handleClick(e) {
        const clickedRecourses = this.game.resources.reduce(( acc, resource) => {
            if (this.hover(resource)) {
                acc.push(resource)
            }
            return acc
        }, [])

        if (!clickedRecourses.length) {
            this.game.addDefender(this.currentCell)
            return
        }

        clickedRecourses.forEach((resource) => this.game.removeResource(resource))
    }
    
    handleMove(e) {
        this.x = e.clientX - this.canvasPosition.x
        this.y = e.clientY - this.canvasPosition.y
        
        this.setCurrentCell()
    }
    
    
    setCurrentCell() {
        const cellSize = Cell.SIZE
        const x = this.x - (this.x % cellSize)
        const y = this.y - (this.y % cellSize)
        
        this.currentCell = { x, y }
    }
    
    reset() {
        this.x = undefined
        this.y = undefined
        this.currentCell = undefined
    }

    hover(object) {
        return this.x > object.x && this.x < object.x + object.width && 
            this.y > object.y && this.y < object.y + object.height
    }
} 