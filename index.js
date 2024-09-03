/** @type {HTMLCanvasElement} */
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

/** @type {HTMLDivElement} */
const gameOverScreen = document.querySelector('.game-over-screen');
const playAgainButton = gameOverScreen.querySelector('button');

/** @type {HTMLAudioElement} */
const ballHitSound = document.getElementById('ballHit');
const gameOverSound = document.getElementById('game-over-sound');

const PADDING = 5;
const BAR_SPEED = 12;
const BALL_RADIUS = 10;
const BAR_WIDTH = 15;
const BAR_HEIGHT = 90;

let scoreLeft = 0;
let scoreRight = 0;
let winner = undefined;
const MAX_SCORE = 10;

const keysMap = new Map();
const controlKeys = ['KeyW', 'KeyS', 'ArrowUp', 'ArrowDown'];
