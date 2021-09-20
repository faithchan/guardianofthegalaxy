const aliens = document.querySelectorAll('.alien');
const holes = document.querySelectorAll('.hole');
const startButton = document.querySelector('#startBtn')
let lastHole;


//Pick Random hole and make sure it does not repeat

//get random time 
function randomTime(min, max){
    return Math.floor(Math.random()*(max-min)*min)
}

//pick a random hole for the alien to pop up and make sure it does not repeat
//holes returns a node list of 6 holes, need to get a random index of this array
function randomHole(holes){
    const index = Math.floor(Math.random()*holes.length);
    const hole = holes[index];
    // the above gets a repeat hole since its 1 in 6 chances. 
    if (hole == lastHole){
        randomHole(holes)
        console.log("Please rerun function")
    }
    lastHole = hole;
    return hole;
}

//get aliens to pop out randomly
