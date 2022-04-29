export const FPS = 60
export const START_MONEY = 300

export const Canvas = {
    WIDTH: 900,
    HEIGHT: 600,
} 

export const Cell = {
    SIZE: 100,
    GAP: 3,
    COLOR: '#0095DD',
}

export const ControlBar = {
    HEIGHT: Cell.SIZE,
    WIDTH: Canvas.WIDTH,
    COLOR: '#0095DD',
    TEXT_COLOR: '#FFFFFF',
    TEXT_LINE_HEIGHT: 20,
    WARN_TEXT_COLOR: '#000000',
    WARN_TEXT_SIZE: '90px',
    WARN_TEXT_FONT: 'Arial',
}

export const Defender = {
    SHOOTING_DELAY: 100,
    HEALTH: 100,
    COLOR: 'blue',
    TEXT_COLOR: 'orange',
    TEXT_LINE_HEIGHT: 20,
    COST: 100,
    DAMAGE: {
        archer: 0.3,
        swordman: 2
    },
    IMG_SRC: {
        archer: 'assets/archer.png',
        swordman: 'assets/swordman.png',
    },
    MAX_FRAME_X: {
        archer: 21,
        swordman: 9,
    },
    SHOOT_SPRITE_POSITION: 8,
    SPRITE_WIDTH: {
        archer: 2199,
        swordman: 1165,
    },
}

export const Enemy = {
    MIN_SPEED: 0.2,
    MAX_SPEED: 0.6,
    HEALTH: 100,
    DAMAGE: 0.9,
    COLOR: 'red',
    TEXT_COLOR: 'brown',
    TEXT_LINE_HEIGHT: 20,
    INTERVAL: 600,
    MIN_INTERVAL: 120,
    INTERVAL_DECREMENT: 100,
    IMG_SRC_WALK: 'assets/scorpion_walk.gif',
    IMG_SRC_ATTACK: 'assets/scorpion_stab.gif',
    WALK_SPRITE_COUNT: 4,
    ATTACK_SPRITE_COUNT: 3,
    WALK_SPRITE_WIDTH: 533,
    ATTACK_SPRITE_WIDTH: 400,
}

export const Projectile = {
    COLOR: '#0095DD',
    WIDTH: 60,
    HEIGHT: 10,
    SPEED: 5,
    DAMAGE: 20,
    IMG_SRC: 'assets/arrow.png',
}

export const Resource = {
    COLOR: 'purple',
    MULTIPLIER: 0.5,
    VALUE: 50,
    INTERVAL: 500,
    TEXT_COLOR: 'white',
} 