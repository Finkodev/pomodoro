const timerMessage = document.querySelector("#timer-message");
const timerDisplay = document.querySelector("#timer-display");

const startButton = document.querySelector("#start-button");
const pauseButton = document.querySelector("#pause-button");
const stopButton = document.querySelector("#stop-button");

let workSessionDuration = 1500;
let currentTimeLeftInSession = 1500;
let breakSessionDuration = 300;
let timerInterval = null;

const timer = () => {
  currentTimeLeftInSession--;
  if (currentTimeLeftInSession < 0) {
    clearInterval(timerInterval);
    currentTimeLeftInSession = 0;
    timerMessage.textContent = "Take a break";
  }
  displayTimeLeft(currentTimeLeftInSession);
};

startButton.addEventListener("click", () => {
  timerInterval = setInterval(timer, 1000);
  timerMessage.textContent = "Keep Working";
});

stopButton.addEventListener("click", () => {
  clearInterval(timerInterval);
  resetTimerSeconds();
  displayTimeLeft(currentTimeLeftInSession);
  timerMessage.textContent = "Stopped...";
});

pauseButton.addEventListener("click", () => {
  clearInterval(timerInterval);
  displayTimeLeft(currentTimeLeftInSession);
  timerMessage.textContent = "Pausing...";
});

const displayTimeLeft = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  timerDisplay.textContent = `${minutes}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;
};

const resetTimerSeconds = function () {
  currentTimeLeftInSession = workSessionDuration;
};
