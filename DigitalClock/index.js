const clock = document.getElementById('clock');
//  document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString()
  // clock.innerHTML = date.getDay();
  // clock.innerHTML = date.getFullYear()
  // clock.innerHTML = date.getHours()
  // clock.innerHTML = date.getMinutes()
  // clock.innerHTML = date.getMilliseconds()
  // clock.innerHTML = date.getMonth()
  // clock.innerHTML = date.getTimezoneOffset()
  // clock.innerHTML = date.getUTCDate()
  // clock.innerHTML = date.getUTCDay()
  // clock.innerHTML = date.getUTCFullYear()
  // clock.innerHTML = date.toISOString()
  // clock.innerHTML = date.toLocaleString()
  // clock.innerHTML = date.toUTCString()
  // clock.innerHTML = date.toTimeString()
  // clock.innerHTML = date.toUTCString()
  // clock.innerHTML = date.toJSON()
  // clock.innerHTML = date.toDateString()
}, 1000);
