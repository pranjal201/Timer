let timerElement= document.querySelector('.time');
let setTimeButton = document.querySelector('.setTime');
let startButton = document.querySelector('.startTimer');
let deleteButton = document.querySelector('.deleteTimer');
let minuteElement = document.querySelector('.minutes');
let secondElement = document.querySelector('.seconds');
const audio = new Audio("./audio.wav");
audio.loop = true;

let min = 0 ;
let sec = 0;

setTimeButton.addEventListener('click',setTimer);
startButton.addEventListener('click',startTimer);
deleteButton.addEventListener('click',deleteTimer);
updateDisplay();

function startTimer()  {
    timer = setInterval(updateTime,1000);
    startButton.disabled = true;
    timerElement.disabled=true;
    setTimeButton.disabled=true;
}

function updateTime(){
    if(sec===0 && min ===0){
        clearInterval(timer);
        audio.play();
        
    }
    else{
    if(sec==0 && min!=0){
        min--;
        sec=60;
    }
    sec--;
    updateDisplay();
    }

}

function deleteTimer(){
    min = 0;
    sec = 0;
    clearInterval(timer);
    updateDisplay();
    startButton.disabled=false;
    timerElement.disabled=false;
    setTimeButton.disabled=false;
    audio.pause();
}

function setTimer(){
    time = timerElement.value;
    if(!time){
        min = 0;
        sec = 0;
        updateDisplay();
    }
    else{
        min = parseInt(time.slice(0,2));
        sec = parseInt(time.slice(3));
        updateDisplay();
    }
}

function updateDisplay(){
    minuteElement.innerText = min.toString().padStart(2,'0');
    secondElement.innerText = sec.toString().padStart(2,'0');
}
