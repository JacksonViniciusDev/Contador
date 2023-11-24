const mais = document.getElementById('plus');
const menos = document.getElementById('minus');
const reset = document.getElementById('reset');
const valor = document.getElementById('value');

let count = 0;
let intervalId = 0;

const updateValue = () => {
    value.innerHTML = count;
};

mais.addEventListener('mousedown', () => {
    intervalId = setInterval( () => {
      count+= 1;
      updateValue();
    }, 100);
});

menos.addEventListener('mousedown', () => {
    intervalId = setInterval( () => {
      count-= 1;
      updateValue();
    }, 100);
});

document.addEventListener('mouseup', () => clearInterval(intervalId));

reset.addEventListener('click', () => {
   count = 0;
   updateValue();
});

