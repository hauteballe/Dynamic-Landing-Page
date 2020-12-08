const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const inputElements = document.querySelectorAll("input[data-key]");

// Show Time
function showTime() {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  // Set AM or PM
  const amPm = hour >= 12 ? "PM" : "AM";

  // 12hr Format
  const newHour = hour % 12 || 12;

  //Output Time
  time.innerHTML = `${newHour}<span>:</span>${addZero(
    min
  )}<span>:</span>${addZero(sec)} ${amPm}`;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(number) {
  return (parseInt(number, 10) < 10 ? "0" : "") + number;
}

// Set background and greeting
function setBgGreet() {
  let today = new Date();
  let hour = today.getHours();

  if (hour < 12) {
    document.body.style.backgroundImage = `url('${morning.img}')`;
    greeting.textContent = morning.text;
  } else if (hour < 18) {
    document.body.style.backgroundImage = `url('${afternoon.img}')`;
    greeting.textContent = afternoon.text;
  } else {
    document.body.style.backgroundImage = `url('${evening.img}')`;
    greeting.textContent = evening.text;
    document.body.style.color = evening.color;
  }
}

const getData = (elem) => {
  if (localStorage.getItem(elem.dataset.key)) {
    elem.value = localStorage.getItem(elem.dataset.key);
  }
};

const setData = (event) => {
  const elem = event.target;
  localStorage.setItem(elem.dataset.key, elem.value);
};

for (let elem of inputElements) {
  elem.addEventListener("input", setData);
  elem.addEventListener("blur", setData);
  getData(elem);
}

//RUN
showTime();
setBgGreet();
