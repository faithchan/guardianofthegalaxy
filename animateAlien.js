const aliens = document.querySelectorAll('.alien');
const holes = document.querySelectorAll('.hole');
const startButton = document.querySelector('#startBtn')
let lastHole;
const yourScore = document.querySelector('.score')
let score =0;


//get random time 
function randomTime(min, max){
    return Math.floor(Math.random()*(max-min)+min)
}

//pick a random hole for the alien to pop up and make sure it does not repeat
//holes returns a node list of 6 holes, need to get a random index of this array
function randomHole(holes){
    const getRandomIndex = Math.floor(Math.random()*holes.length);
    const hole = holes[getRandomIndex];
    // the above gets a repeat hole since its 1 in 6 chances. 
    if (hole == lastHole){
        randomHole(holes)
        console.log("Please rerun function")
    }
    lastHole = hole;
    return hole;
}

//get aliens to pop out randomly
function alienPopOut(){
    const time = randomTime (1000, 2000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(()=>{hole.classList.remove('up');
    if(countTime !== 0)alienPopOut();
    },time)
}

// Start Game Function
function startGame(){
    yourScore.textContent = 0;
    countTime = 30;
    score = 0;
    alienPopOut();
    setTimeout(()=>{countTime==0, 30000});
    checkHighScore() ;
}

//add score each time alien is hit
function alienKilled(e) {
score += 5;
this.classList.remove('up');
this.parentElement.classList.remove('up');
yourScore.textContent = score;
console.log(this);
}

aliens.forEach(alien => alien.addEventListener('click', alienKilled));

//If countTime reaches zero, display times up div with replay button or back to main page
// function timesUp(){
//     if(countTime ==0 ){

//     }
// }

//Local Storage
const highScoreDisplay = document.querySelector('.highscore');
let highScore = localStorage.getItem('best') || 0;
highScoreDisplay.textContent = `🏆 Highscore: ${highScore}`

function checkHighScore() {
    if(score > localStorage.getItem('best')){
        highScore = score;
        localStorage.setItem('best', highScore);
        highScoreDisplay.textContent = `🏆 Highscore: ${highScore}`;  
    }
}
