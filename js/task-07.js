const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
function onInputChange(event) {
    const valueOfInput = inputRef.value
    textRef.style.fontSize = `${valueOfInput}px`
}  
inputRef.addEventListener('input', onInputChange)