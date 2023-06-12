const startBtnEl = document.querySelector('[data-start]')
const stopBtnEl = document.querySelector('[data-stop]')
const bodyEl = document.querySelector('body') 

let timerId = null;

stopBtnEl.disabled = true

startBtnEl.addEventListener('click', startChange);
stopBtnEl.addEventListener('click', stopChange);


function startChange() {
    stopBtnEl.disabled = false;
    startBtnEl.disabled = true;
    changeBackgroundColor()
    timerId = setInterval(changeBackgroundColor, 1000)
}

function stopChange() {
    clearInterval(timerId);
    startBtnEl.disabled = false;
    stopBtnEl.disabled = true;
}

function changeBackgroundColor() {
    const randomColor = getRandomHexColor();
    bodyEl.style.backgroundColor = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}