const aliens = document.querySelectorAll('.alien');
const holes = document.querySelectorAll('.hole');
let lastHole;
//Pick Random hole and make sure it does not repeat
function pickRandomHole(holes) { 
    const randomHole = Math.floor(Math.random()*holes.length );
    const hole = holes[randomHole];
    if(hole === lastHole){
        return pickRandomHole(hole)
    }
    lastHole = hole;
    return hole;

}