// Audio
var audio = document.getElementById('background-audio');
var onOffBtn = document.querySelector('.audioBtn');
var count = 0;

const playPause = () => {
    if (count == 0){
        count = 1;
        audio.play();
        onOffBtn.innerHTML = "Sound Off"
    } else{
        count = 0;
        audio.pause();
        onOffBtn.innerHTML = "Sound On"
    }
}

//Instructions
document.getElementById('instructionBtn').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display= 'flex';  
})

//Close Btn on Instructions
document.querySelector('#closeBtn').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display='none';
})

//Start Game
document.getElementById('startBtn').addEventListener('click', function(){
    document.querySelector('.mainPage').style.display= 'none';
    document.querySelector('.wrapper').style.display= 'flex';
})

// Replay Button - run startGame function 
document.getElementById('replayBtn').addEventListener('click', function(){
    startGame();
    document.querySelector('.timesUp-modal').style.display = 'none'
    document.querySelector('.mainPage').style.display= 'none';
    document.querySelector('.wrapper').style.display= 'flex';
})

