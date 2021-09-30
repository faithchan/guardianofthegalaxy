const aliens = document.querySelectorAll('.alien');
const holes = document.querySelectorAll('.hole');
const startButton = document.querySelector('#startBtn');
const yourScore = document.querySelector('.score');
let lastHole;
let score =0;
var laserSound = new Audio();
laserSound.src = "soundtrack/lasergun.mp3"


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
    const time = randomTime (500, 1500);
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
}

//add score each time alien is clicked
function alienKilled(e) {
    score += 5;
    laserSound.play();
    this.classList.remove('up');
    this.parentElement.classList.remove('up');
    yourScore.textContent = score;
    console.log(this);
}

aliens.forEach(alien => alien.addEventListener('click', alienKilled));


//Local Storage
const highScoreDisplay = document.querySelector('.highscore');
let highScore = localStorage.getItem('best') || 0;
highScoreDisplay.textContent = `🏆 Highscore: ${highScore}`

function checkHighScore() {
    console.log(score)
    console.log(localStorage.getItem('best'))
    if(score > localStorage.getItem('best')){
        highScore = score;
        localStorage.setItem('best', highScore);
        highScoreDisplay.textContent = `🏆 Highscore: ${highScore}`;
        document.querySelector('.endGame').textContent = "Highscore";
        document.querySelector('.textEndGame').innerHTML= `You scored ${highScore} points! <br>
        Thank you for guarding<br>
        our galaxy.`;
    }
    else{
        document.querySelector('.endGame').textContent = "Great Job";
        document.querySelector('.textEndGame').innerHTML= `You scored ${score} points! <br>
        Thank you for guarding<br>
        our galaxy.`;
    }
}

//gameover
function gameOver(){
    if(countTime === 0){
    document.querySelector('.timesUp-modal').style.display = 'flex';
    checkHighScore();
    clearInterval(updateC);
    }
}

