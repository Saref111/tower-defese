export default class FloatingMessage {
    constructor({x, y, text, color}) {
        this.x = x
        this.y = y
        this.text = text
        this.color = color
        this.alpha = 1
        this.isOver = false
    }

    update(delta) {
        this.y--
        this.alpha -= delta / 1000
        if (this.alpha <= 0) {
            this.alpha = 0
            this.isOver = true
        }

    }

    draw(ctx) {
        const textWidth = ctx.measureText(this.text).width
        ctx.fillStyle = this.color
        ctx.globalAlpha = this.alpha
        ctx.font = "30px Arial"
        ctx.fillText(this.text, this.x - textWidth / 2, this.y)
        ctx.globalAlpha = 1
    }
}