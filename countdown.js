let countTime = 30;
const countdown = document.querySelector('.countdown')

function updateCountdown() {
    countdown.innerHTML = countTime;
    countTime --;
};

setInterval(updateCountdown, 1000);
//if time = 0 and points <= highscore, hide .game display time is up you've scored xx points. append replay button
//if points> highscore, times up! You've achieved highscore, thank you for saving our galaxy. append replay button

