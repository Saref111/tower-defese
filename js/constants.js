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
}

export const Enemy = {
    MIN_SPEED: 0.2,
    MAX_SPEED: 0.6,
    HEALTH: 100,
    COLOR: 'red',
    TEXT_COLOR: 'brown',
    TEXT_LINE_HEIGHT: 20,
    INTERVAL: 600,
    MIN_INTERVAL: 120,
    INTERVAL_DECREMENT: 100,
}