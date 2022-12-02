var elForm = document.querySelector(".js-form");
var elInput = document.querySelector(".js-input");
var elResult1 = document.querySelector(".js-result1");
var elResult2 = document.querySelector(".js-result2");
var elResult3 = document.querySelector(".js-result3");
var elResult4 = document.querySelector(".js-result4");

const speedHuman = 3.6;
const speedBycyle = 20.1;
const speedCar = 70;
const speedPlane = 800;

function time(a, c) {
  var hour, minute;
  if (a / c < 1) {
    hour = 0;
    minute = (a / c * 60).toFixed(0);
  } else if (a / c > 1) {
    hour = Math.trunc(a / c);
    minute = (a / c - hour).toFixed(1) * 60;
  } else {
    hour = 1;
    minute = 0;
  }
  return hour + " " + 'soat' + " " + minute + " " + 'daqiqa';
}

elForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  elResult1.textContent = time(elInput.value, speedHuman)
  elResult2.textContent = time(elInput.value, speedBycyle)
  elResult3.textContent = time(elInput.value, speedCar)
  elResult4.textContent = time(elInput.value, speedPlane)

})