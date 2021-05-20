const counterValue = document.querySelector('#value');
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
let currentValue = 0;
function decrement(event) {
    currentValue -= 1;
    counterValue.textContent = currentValue;
};
function increment(event) {
    currentValue += 1;
    counterValue.textContent = currentValue;
};
btnDecrement.addEventListener('click', decrement)
btnIncrement.addEventListener('click', increment)
counterValue.textContent = currentValue







