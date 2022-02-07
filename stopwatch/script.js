var seconds = 00;
var minutes = 00;
var tens = 00;
var OutputSeconds = document.getElementById("second");
var OutputMinutes = document.getElementById("minute");
var OutputTens = document.getElementById("tens");
var buttonStart = document.getElementById("btn-start");
var buttonPause = document.getElementById("btn-pause");
var buttonReset = document.getElementById("btn-reset");
var Interval;

buttonStart.addEventListener('click', () => {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
});

buttonPause.addEventListener('click', () => {
    clearInterval(Interval);
});

buttonReset.addEventListener('click', () => {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    minutes = "00";
    OutputSeconds.innerHTML = seconds;
    OutputTens.innerHTML = tens;
    OutputMinutes.innerHTML = minutes;
});

function startTimer(){
    tens++;
    if(tens <= 9){
        OutputTens.innerHTML = "0" + tens;
    }

    if(tens > 9){
        OutputTens.innerHTML = tens;
    }

    if(tens > 99){
        seconds++;
        OutputSeconds.innerHTML = "0" + seconds;
        tens = 0;
        OutputTens.innerHTML = "0" + 0;
    }

    if(seconds > 9){
        OutputSeconds.innerHTML = seconds;
    }

    if(seconds > 59){
        minutes++;
        OutputMinutes.innerHTML = '0' + minutes;
        seconds = 0;
        OutputSeconds.innerHTML = '0' + 0;
    }
    
    if(minutes > 9){
        OutputSeconds.innerHTML = minutes;
    }
}