import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const datePickerInput = document.getElementById('datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysElement = document.querySelector('[data-days]');
const hoursEl = document.querySelector('#idHours');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

startButton.disabled = true;

flatpickr(datePickerInput, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate < new Date()) {
      Notify.failure("Please choose a date in the future");
    } else {
     startButton.disabled = false;
    }
  },
});

function startTimer() {
  const selectedDate = datePickerInput.value;
  const targetDate = new Date(selectedDate).getTime();

  const timerInterval = setInterval(() => {
    const currentDate = new Date().getTime();
    const remainingTime = targetDate - currentDate;

    if (remainingTime > 0) {
      const { days, hours, minutes, seconds } = convertMs(remainingTime);

      daysElement.textContent = addLeadingZero(days);
      hoursEl.textContent = addLeadingZero(hours);
      minutesElement.textContent = addLeadingZero(minutes);
      secondsElement.textContent = addLeadingZero(seconds);
    } else {
      clearInterval(timerInterval);
      daysElement.textContent = '00';
      hoursEl.textContent = '00';
      minutesElement.textContent = '00';
      secondsElement.textContent = '00';
    }
  }, 1000);
}

startButton.addEventListener('click', startTimer);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}



























// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
// import Notiflix from 'notiflix';

// let selectedDate = null;
// let countdown;

// flatpickr("#datetime-picker", {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,

//   onClose(selectedDates) {
//     const currentDate = new Date();
//     selectedDate = selectedDates[0];

//     if (selectedDate <= currentDate) {
//       Notiflix.Notify.warning('Please choose a date in the future');
//       this.clear();
//     } else {
//       const startBtn = document.querySelector('button[data-start]');
//       startBtn.disabled = false;
//     }
//   },
// });

// const refs = {
//   startBtn: document.querySelector('button[data-start]'),
//   days: document.querySelector('[data-days]'),
//   hours: document.querySelector('[data-hours]'),
//   minutes: document.querySelector('[data-minutes]'),
//   seconds: document.querySelector('[data-seconds]'),
// };

// function pad(value) {
//   return value.toString().padStart(2, '0');
// }

// function startTimer() {
//   countdown = setInterval(() => {
//     const now = new Date();
//     const distance = selectedDate - now;

//     if (distance < 0) {
//       clearInterval(countdown);
//       return;
//     }

//     const { days, hours, minutes, seconds } = convertMs(distance);

//     refs.days.textContent = pad(days);
//     refs.hours.textContent = pad(hours);
//     refs.minutes.textContent = pad(minutes);
//     refs.seconds.textContent = pad(seconds);
//   }, 1000);
// }

// refs.startBtn.addEventListener('click', startTimer);

// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = Math.floor(ms / day);
//   const hours = Math.floor((ms % day) / hour);
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }


// const datePickerInput = document.getElementById('datetime-picker');
// const startButton = document.querySelector('[data-start]');
// const daysElement = document.querySelector('[data-days]');
// const hoursElement = document.querySelector('[data-hours]');
// const minutesElement = document.querySelector('[data-minutes]');
// const secondsElement = document.querySelector('[data-seconds]');

// startButton.disabled = true;
// flatpickr(datePickerInput, {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     const selectedDate = selectedDates[0];

    
//     if (selectedDate < new Date()) {
//       // Вибрана дата в минулому
        
//       alert("Please choose a date in the future");
//     // startButton.disabled = true;
//     } else {
//       // Вибрана валідна дата
//       startButton.disabled = false;
//     }
//   },
// });

// function addLeadingZero(value) {
//   return value.toString().padStart(2, '0');
// };

// function startTimer() {
//   const selectedDate = datePickerInput.value;
//   const targetDate = new Date(selectedDate).getTime();

//   const timerInterval = setInterval(() => {
//     const currentDate = new Date().getTime();
//     const remainingTime = targetDate - currentDate;

//     if (remainingTime > 0) {
//       const { days, hours, minutes, seconds } = convertMs(remainingTime);
      

//       daysElement.textContent = addLeadingZero(days);
//       hoursElement.textContent = addLeadingZero(hours);
//       minutesElement.textContent = addLeadingZero(minutes);
//       secondsElement.textContent = addLeadingZero(seconds);
//     } else {
//       // Досягнуто кінцевої дати, зупиняємо таймер
//       clearInterval(timerInterval);
//       daysElement.textContent = '00';
//       hoursElement.textContent = '00';
//       minutesElement.textContent = '00';
//       secondsElement.textContent = '00';
//     }
//   }, 1000);
// }

// startButton.addEventListener('click', startTimer);

// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = Math.floor(ms / day);
//   const hours = Math.floor((ms % day) / hour);
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

