const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const lapse = document.getElementById("lapse");
const timer = document.getElementById("timer");
const lapsed = document.getElementById("lapsed");
let timerRunning = false;
let sec = 0, min = 0;
let setcount;
let laps = [];

function formatTime(value) {
  return value < 10 ? "0" + value : value;
}

start.onclick = function () {
  if (!timerRunning) {
    timerRunning = true;
    setcount = setInterval(() => {
      sec += 1;

      if (sec % 60 == 0) {
        min += 1;
        sec = 0;
      }
      timer.innerText = `${formatTime(min)}:${formatTime(sec)}`;

    }, 1000);
  }
};

stop.onclick = function () {
  if (timerRunning) {
    clearInterval(setcount);
    timerRunning = false;
  }
};

reset.onclick = () => {
  clearInterval(setcount);
  sec = 0;
  min = 0;
  timerRunning = false;
  timer.innerText = `${formatTime(min)}:${formatTime(sec)}`;
  lapsed.innerHTML = ''; 
};

lapse.onclick = () => {
  if (timerRunning) {
    const lap = `${formatTime(min)} Minutes :${formatTime(sec)} Seconds`;
    const lapdiv = document.createElement("div");
    lapdiv.innerText = lap;
    lapsed.appendChild(lapdiv);
  }
};
