const inputRef = document.querySelector('#validation-input')
const valueDataLength = Number(inputRef.dataset.length)

function onInputBlur(event) {
    if (event.currentTarget.value.length === valueDataLength) {
        inputRef.classList.add('valid')
    } else {
        inputRef.classList.add('invalid')
    }
}

function onInputFocus(event) {
    inputRef.classList.remove('valid');
    inputRef.classList.remove('invalid');
}

inputRef.addEventListener('blur', onInputBlur)
inputRef.addEventListener('focus', onInputFocus)