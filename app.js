import { Ball } from './ball.js'
import { Block } from './block.js'

class App {
    constructor () {
        this.canvas = document.createElement('canvas')
        this.ctx = this.canvas.getContext('2d') // context

        document.body.appendChild(this.canvas)

        window.addEventListener('resize', this.resize.bind(this), false)
        this.resize()

        this.ball = new Ball(this.stageWidth, this.stageHeight, 60, 10)
        this.block = new Block(700, 30, 300, 400) // 위치와 크기를 임의로 정함

        window.requestAnimationFrame(this.animate.bind(this))
    }

    // 리사이즈 이벤트:
    // 리사이즈 이벤트를 걸어주고 스크린 사이즈를 가지고 와서 애니메이션을 정의해 준다
    resize () {
        this.stageWidth = document.body.clientWidth
        this.stageHeight = document.body.clientHeight

        this.canvas.width = this.stageWidth * 2
        this.canvas.height = this.stageHeight * 2
        this.ctx.scale(2,2)
    }

    animate(t) {
        window.requestAnimationFrame(this.animate.bind(this))

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight)

        this.block.draw(this.ctx)
        this.ball.draw(this.ctx, this.stageWidth, this.stageHeight, this.block)
    }
}

window.onload = () => {
    new App()
}
