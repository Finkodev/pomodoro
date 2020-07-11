const status = document.querySelector("#timer-message");
const timerDisplay = document.querySelector("#timer-display");

const startButton = document.querySelector("#start-button");
const pauseButton = document.querySelector("#pause-button");
const stopButton = document.querySelector("#stop-button");

let timerSeconds = 1500;
let currentSessionTime = 1500;
let breakSessionTime = 300;
let timerInterval = null;

const timer = () => {
  currentSessionTime--;
  if (currentSessionTime < 0) {
    clearInterval(timerInterval);
    currentSessionTime = 0;
    status.textContent = "Take a break";
  }
  displayTimeLeft(currentSessionTime);
};

startButton.addEventListener("click", () => {
  resetTimerSeconds();
  timerInterval = setInterval(timer, 1000);
  status.textContent = "Keep Working";
});

stopButton.addEventListener("click", () => {
  clearInterval(timerInterval);
  resetTimerSeconds();
  displayTimeLeft(currentSessionTime);
});

const displayTimeLeft = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  timerDisplay.textContent = `${minutes}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;
};

const resetTimerSeconds = function () {
  currentSessionTime = timerSeconds;
};
