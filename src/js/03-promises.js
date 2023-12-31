import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  delayInput: document.querySelector('input[name="delay"]'),
  stepInput: document.querySelector('input[name="step"]'),
  amountInput: document.querySelector('input[name="amount"]'),
  submitButton: document.querySelector('button[type="submit"]'),
}
refs.form.addEventListener('submit', FormSubmit) 
  
    function FormSubmit(event){
    event.preventDefault();
    
 let delay = cleanInputValue(refs.delayInput.value);
  const step = cleanInputValue(refs.stepInput.value);
  const amount = cleanInputValue(refs.amountInput.value);

    refs.delayInput.value = '';
  refs.stepInput.value = '';
  refs.amountInput.value = '';

    for (let i = 1; i <= amount; i+=1) {
      const position = i;
    
        const promise =  new createPromise(position, delay);

        promise
          .then(({ position, delay }) => {
            Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
          })
      .catch (({ position, delay }) => {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
      
      delay += step
  }
}

function cleanInputValue(value){
  return parseInt(value)
};
function createPromise(position, delay) {
     const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
       setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}







