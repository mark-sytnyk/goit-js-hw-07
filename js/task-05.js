const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');
function onInputText(evt) {
    outputRef.textContent = evt.currentTarget.value;
    if(outputRef.textContent === '') {
        outputRef.textContent = 'незнакомец'
    }
}
function onFocus(evt) {
    outputRef.textContent = evt.currentTarget.value;
    if(outputRef.textContent === '') {
        outputRef.textContent = 'незнакомец'
    }
}
function onBlur(evt) {
    outputRef.textContent = evt.currentTarget.value;
    if(outputRef.textContent === '') {
        outputRef.textContent = 'незнакомец'
    }
}
inputRef.addEventListener('input', onInputText)
inputRef.addEventListener('focus', onFocus)
inputRef.addEventListener('blur', onBlur)