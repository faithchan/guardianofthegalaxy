const aliens = document.querySelectorAll('.alien');
const holes = document.querySelectorAll('.hole');
const startButton = document.querySelector('#startBtn')
let lastHole;
//Pick Random hole and make sure it does not repeat
function pickRandomHole(holes) { 
    const randomHole = Math.floor(Math.random()*holes.length );
    const hole = holes[randomHole];
    if(hole === lastHole){
        return pickRandomHole(holes)
    }
    lastHole = hole;
    return hole;
}

//Add extra class to the currently selected hole
// function popOut(){
//     const time= Math.random()* 1300 + 400;
//     const hole = pickRandomHole(holes);
//     hole.classlist.add('up');
//     setTimeout(function(){
//         hole.classlist.remove('up')
//         if(!timeUp) popOut();
//     }, time)
// }

// popOut();