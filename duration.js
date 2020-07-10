let timerClockEl = document.querySelector("#timer-clock");
let timerMessageEl = document.querySelector("#timer-message");
let duration = 30 * 60 * 1000;
const timerMessage = ["Work!", "Take Break!"];

let startTime = new Date();
let currentTime = startTime;

let phases = [
  {
    name: "work",
    duration: 25 * 60 * 1000,
    message: "Work Dude!",
  },
  {
    name: "break",
    duration: 5 * 60 * 1000,
    message: "Take a break and coffee",
  },
];

let currentPhaseIndex = 0;
const switchPhase = () => {
  if (currentPhaseIndex === phases.length - 1) {
    currentPhaseIndex = 0;
  } else {
    currentPhaseIndex++;
  }
};

let myTimer = setInterval(() => {
  currentTime = new Date();
  const elapsed = currentTime - startTime;
  const currentPhase = phases[currentPhaseIndex];
  timerMessageEl.innerHTML = currentPhase.message;
  timerClockEl.innerHTML = Math.floor(elapsed / 1000);
  if (elapsed >= currentPhase.duration) {
    switchPhase();
    startTime = new Date();
  }
}, 1000);
