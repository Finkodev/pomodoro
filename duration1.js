const timerClockEl = document.querySelector("#timer-clock");
const timerMessageEl = document.querySelector("#timer-message");

let startTime = new Date();

let phases = [
  {
    name: "work",
    duration: 5 * 1000,
    message: "Work!",
  },
  {
    name: "break",
    duration: 2 * 1000,
    message: "Break!",
  },
];

let currentPhaseIndex = 0;

let myTimer = setInterval(() => {
  let currentTime = new Date();
  let duration = currentTime - startTime;
  if (duration > phases[currentPhaseIndex].duration) {
    currentPhaseIndex = (currentPhaseIndex + 1) % phases.length;
    startTime = currentTime;
    duration = currentTime - startTime;
  }
  timerClockEl.innerHTML = Math.floor(duration / 1000);
  timerMessageEl.innerHTML = phases[currentPhaseIndex].message;
}, 1000);
