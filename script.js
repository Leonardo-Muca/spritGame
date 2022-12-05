const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

var tecla = 0;

const player = new Image();
player.src = 'shadow_dog.png';

let frameX = 0;
let frameY = 0;
let repetitions = 6;

const spriteWidth = 575;
const spriteHeight = 523;

function animateTwo(key) {
    switch (key.toLowerCase()) {
        case 'a':
            frameY = 1;
            repetitions = 6;
            break;
        case 's':
            frameY = 2;
            repetitions = 6;
            break;
        case 'd':
            frameY = 3;
            repetitions = 8;
            break;
        case 'f':
            frameY = 4;
            repetitions = 10;
            break;
        case 'g':
            frameY = 5;
            repetitions = 4;
            break;
        case 'h':
            frameY = 6;
            repetitions = 6;
            break;
        case 'j':
            frameY = 7;
            repetitions = 6;
            break;
        case 'k':
            frameY = 8;
            repetitions = 11;
            break;
        case 'l':
            frameY = 9;
            repetitions = 3;
            break;
        case 'p':
            frameY = 0;
            repetitions = 6;
            break;

        default:
            alert('Digite una tecla valida');
            break;
    }
}

window.addEventListener('keydown', e => {
    console.log(e.key);
    animateTwo(e.key);
})

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(player, frameX * spriteWidth, frameY * spriteHeight,
        spriteWidth, spriteHeight,
        0, 0, spriteWidth, spriteHeight);

    if (frameX < repetitions) frameX++
    else frameX = 0;
    requestAnimationFrame(animate);
}

animate();