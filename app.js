// Audio
var audio = document.getElementById('background-audio');
var onOffBtn = document.getElementById('audioBtn');
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

//transition from main page to game page