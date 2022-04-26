let lastTime = 0
export const animate = function (game, time = 0) {
    const delta = time - lastTime
    lastTime = time
    game.update(delta)
    game.draw(delta)
    if (!game.isOver) {
        requestAnimationFrame((time) => animate(game, time))
    }
}

export const getRandomNumber = function (min, max) { 
    return Math.floor(Math.random() * (max - min + 1)) + min
}
