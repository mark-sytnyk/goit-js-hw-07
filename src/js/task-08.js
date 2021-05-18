const numberRef = document.querySelector('[type="number"]');
const renderRef = document.querySelector('[data-action="render"]');
const destroyRef = document.querySelector('[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');
renderRef.addEventListener('click', createBoxes);
destroyRef.addEventListener('click', destroyBoxes);
numberRef.addEventListener('input', amountValue);
let amount  = 0;
 function amountValue (event) {
  amount  = event.currentTarget.value
};
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
function createBoxes() {
    for (let i = 0; i < amount; i += 1) {
        const sideSize = [i].reduce((acc, num) => {
            return acc + num*10
        }, 30)
        const box = document.createElement('div');
        box.style.width = `${sideSize}px`;
        box.style.height = `${sideSize}px`;
        box.style.backgroundColor = `rgb(${getRandomNumber(1, 255)}, ${getRandomNumber(1, 255)}, ${getRandomNumber(1, 255)})`
        boxesRef.append(box)
    }
};
function destroyBoxes() {
  boxesRef.remove('div')
};