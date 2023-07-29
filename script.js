let dayEl = document.querySelector(".day");
let dateToday = document.querySelector(".date-today");
let dateEl = document.querySelector(".date");
let monthEl = document.querySelector(".month");
let yearEl = document.querySelector(".year");
let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

let date = new Date();
var weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
dateEl.innerHTML = date.getDate();
monthEl.innerHTML = date.getMonth() + 1;
yearEl.innerHTML = date.getFullYear();

dayEl.innerHTML = weekday[date.getDay()];

// dateToday.innerHTML = dDate, "/", month, "/", year;
function displayTime() {
  let date = new Date();

  // Getting hour, mins, sec from date
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hRotation = 30 * hh + mm / 2;
  let mRotation = 6 * mm;
  let sRotation = 6 * ss;

  hr.style.transform = `rotate(${hRotation}deg)`;
  min.style.transform = `rotate(${mRotation}deg)`;
  sec.style.transform = `rotate(${sRotation}deg)`;
}
setInterval(displayTime, 1000);
