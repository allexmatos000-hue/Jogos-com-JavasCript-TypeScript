import { count } from "node:console";


const sonic = document.querySelector('.sonic');
const pipe = document.querySelector('.pipe');

const start = document.querySelector('.start');
const gameOver = document.querySelector('.game-over');

const score = document.querySelector('.score');
let alreadyJump = false
let count = 0;

audioStart = new Audio('./Trilha_sonora/01- Sonic-1-Music-Green-Hill-Zone.mp3')
audioGemeOver = new Audio('./Triha_sonora/')

const startGame = () => {
    pipe.classList.add('pipe-animation')
    start.style.display = 'none'

    audioStart.play()
}

const restartGame = () => {
    gameOver.style.display = 'none'
    pipe.computedStyleMap.left = ''
    pipe.computedStyleMap.right = '0'
    sonic.src = './img/sonic.gif'
    sonic.computedStyleMap.width = '150px'
    sonic.computedStyleMap.bottom = '0'

    start.style.display = 'none'

    audioGemeOver.pause()
    audioGemeOver.currentTime = 0;

    audioStart.play()
    audioStart.currentTime = 0;
}

restartGame()

const jump = () => {
    sonic.classList.add('jump');
    alreadyJump = true

    setTimeout(() => {
        sonic.classList.remove('jump');
        alreadyJump = false
    }, 800)
}

const loop = () => {
    setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const sonicPosition = window.getComputedStyle(sonic).getPropertyValue(bottom);
        const pipeLeft = window.getComputedStyle(pipe).getPropertyValue(left)

        if (pipePosition <= 120 && pipePosition > 0 && sonicPosition < 80) {
            pipe.classList.remove('.pipe-animation')
            pipe.style.left = `${pipePosition}px`

            sonic.classList.remove('.jump')
            sonic.style.bottom = `${sonicPosition}px`

            sonic.src = './gif/sonc.gif'
            sonic.style.width = '80px'
            sonic.style.marginLeft = '50px'

            function stopAudioStart() {
                audioStart.pause()
            }
            stopAudioStart()

            audioGameOver.play()

            function stopAudio() {
                audioGameOver.pause()
            }
            setTimeout(stopAudio, 7000)

            gameOver.style.display = 'flex'

            clearInterval(loop)



            if (pipeLeft > 40 && pipeLeft < 270 && sonicBottom <= 50 && !alreadyJump) {
                alert(`Game Over! seu score foi: ${count}`);
                count = 0;

            }

            context.fillStyle="black"
            context.font="20px courier"
            count++;
            context.fillText(score, 5, 20 )



        }



    }, 10)
}

loop()

document.addEventListener("keypress", e => {
    const tecla = e.key
    if (tecla === ' ') {
        jump()
    }
})

document.addEventListener('touchstart', e => {
    if (e.touches.length) {
        jump()
    }
})

document.addEventListener('keypress', e => {
    const tecla = e.key
    if (tecla === 'Enter') {
        startGame()
    }
})




