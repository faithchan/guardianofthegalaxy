let countTime = 30;
const countdown = document.querySelector('.timeLimit');

function updateCountdown() {
    countdown.innerHTML = countTime;
    countTime --;
    //bottom line of code is to stop countdown at zero otherwise it will reach negative number and run infinity
    countTime = countTime < 0 ? 0 : countTime; 
    checkHighScore();
    gameOver();
    
};

updateCount =()=> setInterval(updateCountdown, 1000);

document.getElementById('startBtn').addEventListener('click', updateCount);

//   var countDown = setInterval(function(){
//     countdown.textContent = countTime;
//     countTime--
//     if (countTime === 0) {
//       checkHighScore();
//       clearInterval(countTime);
//       gameOver();
//     }
//   }, 1000);


