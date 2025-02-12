let timerInterval;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let milliseconds = 0;
let lapCount = 1;


const timerDisplay = document.getElementById("timer");
const startStopBtn = document.getElementById("startStopBtn");
const lapBtn = document.getElementById("lapBtn");
const clearLapsBtn = document.getElementById("clearLapsBtn");
const resetBtn = document.getElementById("resetBtn");
const lapList = document.getElementById("lapList");

function formatTime() {
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}:${milliseconds < 100 ? '0' : ''}${milliseconds}`;
}

function startTimer() {
    timerInterval = setInterval(() => {
        milliseconds++;
        if (milliseconds === 100) {
            milliseconds = 0;
            seconds++;
        }
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        timerDisplay.textContent = formatTime();
    }, 10); 
}

function stopTimer() {
    clearInterval(timerInterval);
}

function toggleTimer() {
    if (isRunning) {
        stopTimer();
        startStopBtn.textContent = "Play";
    } else {
        startTimer();
        startStopBtn.textContent = "Pause";
    }
    isRunning = !isRunning;
}

function addLap() {
    const lap = document.createElement("li");
    lap.textContent = `Lap ${lapCount++}: ${formatTime()}`;
    lapList.appendChild(lap);
}

function clearLaps() {
    lapList.innerHTML = '';
    lapCount = 1;
}

function resetTimer() {
    stopTimer();
    isRunning = false;
    seconds = 0;
    minutes = 0;
    milliseconds = 0;
    timerDisplay.textContent = formatTime();
    startStopBtn.textContent = "Play";
    clearLaps();
}

startStopBtn.addEventListener("click", toggleTimer);
lapBtn.addEventListener("click", addLap);
clearLapsBtn.addEventListener("click", clearLaps);
resetBtn.addEventListener("click", resetTimer);
