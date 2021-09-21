const aliens = document.querySelectorAll('.alien');
const holes = document.querySelectorAll('.hole');
const startButton = document.querySelector('#startBtn')
let lastHole;

//score
const yourScore = document.querySelector('.yourscore')
let gameScore = 0;


//Pick Random hole and make sure it does not repeat

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
    const time = randomTime (200, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(()=>{hole.classList.remove('up');
    alienPopOut();
    },time)

}