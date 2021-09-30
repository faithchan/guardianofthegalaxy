let countTime = 30;
const countdown = document.querySelector('.timeLimit');

function updateCountdown() {
    countdown.textContent = countTime;
    gameOver();
    countTime-- ;
    //bottom line of code is to stop countdown at zero otherwise it will reach negative number and run infinity
    countTime = countTime < 0 ? 0 : countTime; 
};

function updateCount(){
    updateC = setInterval(updateCountdown, 1000);
}

document.getElementById('startBtn').addEventListener('click', updateCount);


