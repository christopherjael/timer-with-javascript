const $form = document.querySelector("#form");
const $hms = document.querySelector("#hms");

//Botons
const $start = document.querySelector("#start");
const $stop = document.querySelector("#stop");
const $reset = document.querySelector("#reset");

//Inputs
var $inputHours = document.querySelector("#hours");
var $inputMinutes = document.querySelector("#minutes");
var $inputSeconds = document.querySelector("#seconds");

//Timer
var s = 0;
var m = 0;
var h = 0;

//Functions

//add 0 the
const auxInputs = (normalHours, normalMinutes, normalSeconds) => {
  if (normalHours < 10) {
    normalHours = "0" + normalHours.toString();
  }

  if (normalMinutes < 10) {
    normalMinutes = "0" + normalMinutes.toString();
  }

  if (normalSeconds < 10) {
    normalSeconds = "0" + normalSeconds.toString();
  }

  return normalHours + ":" + normalMinutes + ":" + normalSeconds;
};

const getInputsValue = (e) => {
  e.preventDefault();

  if ($inputHours.value == 0) {
    h = 0;
  } else {
    h = $inputHours.value;
  }
  if ($inputMinutes.value == 0) {
    m = 0;
  } else {
    m = $inputMinutes.value;
  }
  if ($inputSeconds.value == 0) {
    s = 0;
  } else {
    s = $inputSeconds.value;
  }

  $hms.innerHTML = auxInputs(h, m, s);
  $form.reset();
};

const discount = () => {
  if (s > 0 || m > 0 || h > 0) {
    s--;
    if (s < 0) {
      m -= 1;
      s = 59;
    }

    if (m < 0) {
      h -= 1;
      m = 59;
    }
    $hms.innerHTML = auxInputs(h, m, s);
  }
  console.log("g");
};

const start = () => {
  startDescount = setInterval(discount, 1000);
  $start.removeEventListener("click", start);
};

const stop = () => {
  clearInterval(startDescount);
  $start.addEventListener("click", start);
};

const reset = () => {
  clearInterval(startDescount);
  $hms.innerHTML = "00:00:00";
  $start.addEventListener("click", start);
  $form.reset();
};

//Events
$form.addEventListener("submit", getInputsValue);
$start.addEventListener("click", start);
$stop.addEventListener("click", stop);
$reset.addEventListener("click", reset);
