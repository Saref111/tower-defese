export default class Mouse {
    constructor(canvas) {
        this.x = undefined
        this.y = undefined
        this.width = 0.1
        this.height = 0.1
        this.canvas = canvas
        this.canvasElement = this.canvas.element
        this.canvasPosition = this.canvas.position

        this.canvasElement.addEventListener('mousemove', (e) => this.handleMove(e))
    }

    handleMove(e) {
        this.x = e.clientX - this.canvasPosition.x
        this.y = e.clientY - this.canvasPosition.y
    }
} 