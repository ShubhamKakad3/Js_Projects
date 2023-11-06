let startstopbtn = document.querySelector("#startstopbtn");
let resetbtn = document.querySelector("#resetbtn");
let seconds = 0;
let minutes = 0;
let hours = 0;

let leading_seconds = 0;
let leading_minutes = 0;
let leading_hours = 0;

let timerinterval = null;
let timerstatus = "stopped";

function stopwatch() {
  seconds++;

  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  if (seconds < 10) {
    leading_seconds = "0" + seconds.toString();
  } else {
    leading_seconds = seconds;
  }

  if (minutes < 10) {
    leading_minutes = "0" + minutes.toString();
  } else {
    leading_minutes = minutes;
  }

  if (hours < 10) {
    leading_hours = "0" + hours.toString();
  } else {
    leading_hours = hours;
  }

  let displaytime = (document.getElementById("timer").innerText =
    leading_hours + ":" + leading_minutes + ":" + leading_seconds);
}

startstopbtn.addEventListener("click", function () {
  if (timerstatus === "stopped") {
    timerinterval = window.setInterval(stopwatch, 1000);
    document.getElementById("startstopbtn").innerHTML =
      '<i class="fa fa-pause" aria-hidden="true" id="pause" ></i>';
    timerstatus = "started";
  } else {
    window.clearInterval(timerinterval);
    document.getElementById("startstopbtn").innerHTML =
      '<i class="fa-solid fa-play" id="play" ></i>';
    timerstatus = "stoped";
  }
});

resetbtn.addEventListener("click", function () {
  window.clearInterval(timerinterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("timer").innerHTML = " 00:00:00";
});
