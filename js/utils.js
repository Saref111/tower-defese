let lastTime = 0
export const animate = function (game, time = 0) {
    const delta = time - lastTime
    lastTime = time
    game.update(delta)
    game.draw(delta)
    requestAnimationFrame((time) => animate(game, time))
}




