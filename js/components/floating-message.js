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
        ctx.fillStyle = this.color
        ctx.globalAlpha = this.alpha
        ctx.font = "20px Arial"
        ctx.fillText(this.text, this.x, this.y)
        ctx.globalAlpha = 1
    }
}