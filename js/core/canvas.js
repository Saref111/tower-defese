import { Canvas as CanvasEnum } from "../constants.js"

export default class Canvas {
    constructor() {
        this.element = document.createElement('canvas')
        this.width = this.element.width = CanvasEnum.WIDTH
        this.height = this.element.height =  CanvasEnum.HEIGHT

        document.body.appendChild(this.element)
        this.position = this.element.getBoundingClientRect()
    }

    getContext(){
        return this.element.getContext('2d')
    }
}