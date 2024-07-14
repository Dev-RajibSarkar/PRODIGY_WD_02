let timerDisplay = document.querySelector('.timerDisplay');
let startStopButton = document.getElementById('start-stop');
let resetButton = document.getElementById('reset');
let lapButton = document.getElementById('lap');
let laps = document.querySelector('.laps');
let clearButton = document.querySelector('.lap-clear-button');

let msec = 0;
let sec = 0;
let mins = 0;

let timerId = null;
let running = false;
let lapno = 0;

//Function to start and stop the stopwatch
startStopButton.addEventListener('click', () => {
  if (!running) {
    startStopButton.style.backgroundColor = 'red'
    timerId = setInterval(startTimer, 10);
    startStopButton.innerHTML = "Stop";
    running = true;
  }
  else {
    startStopButton.style.backgroundColor = 'green'
    clearInterval(timerId);
    startStopButton.innerHTML = "Start";
    running = false;
  }
});

//Function to reset the stopwatch
resetButton.addEventListener('click', () => {
  clearInterval(timerId);
  timerDisplay.innerHTML = `00 : 00 : 00`;
  msec = 0;
  sec = 0;
  mins = 0;
});

//Function to record the laps
lapButton.addEventListener('click', () => {
  const li = document.createElement('li');
  const number = document.createElement('span');
  const timeStamp = document.createElement('span');

  li.setAttribute('class', 'lap-item');
  number.setAttribute('class', 'number');
  timeStamp.setAttribute('class', 'time-stamp')
  number.innerText = `#${++lapno}`

  timeStamp.innerHTML = `${mins} : ${sec} : ${msec}`;
  li.append(number, timeStamp);
  laps.append(li)
  clearButton.classList.remove('hidden');
});

//Function to clear the stopwatch
clearButton.addEventListener('click', function () {
  laps.innerHTML = '';
  laps.append(clearButton)
  clearButton.classList.add('hidden');
  lapno = 0;
});

//Stopwatch logic
function startTimer() {
  msec++;
  if (msec == 100) {
    msec = 0;
    sec++
    if (sec == 60) {
      sec = 0;
      mins++;
    }
  }

  let msecString = msec < 10 ? `0${msec}` : msec;
  let secString = sec < 10 ? `0${sec}` : sec;
  let minsString = mins < 10 ? `0${mins}` : mins;

  timerDisplay.innerHTML = `${minsString} : ${secString}: ${msecString}`;

}





