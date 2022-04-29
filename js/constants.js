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
    TEXT_COLOR: 'gold',
    TEXT_LINE_HEIGHT: 20,
    COST: 100,
    DAMAGE: 0.3,
    IMG_SRC: 'assets/archer.png',
    MAX_FRAME_X: 21,
    SHOOT_SPRITE_POSITION: 8,
    SPRITE_WIDTH: 2199,
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
    WALK_SPRITE_COUNT: 4,
    WALK_SPRITE_WIDTH: 533,
}

export const Projectile = {
    COLOR: '#0095DD',
    WIDTH: Cell.SIZE / 5,
    HEIGHT: Cell.SIZE / 5,
    SPEED: 5,
    DAMAGE: 20,
}

export const Resource = {
    COLOR: 'purple',
    MULTIPLIER: 0.5,
    VALUE: 50,
    INTERVAL: 500,
    TEXT_COLOR: 'white',
} 