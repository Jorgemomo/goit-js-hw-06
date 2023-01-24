const entry = document.querySelector('#validation-input');
console.log(entry);

const strLength = Number(entry.getAttribute("data-length"));

entry.addEventListener('blur', (event) => {
if (event.currentTarget.value.length === strLength) {
    event.currentTarget.classList.add('valid')
    event.currentTarget.classList.remove('invalid') 
    }
    else {
    event.currentTarget.classList.add('invalid')
    }
});