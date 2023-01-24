const input = document.querySelector("input");
//console.log(input);

const modSpan = document.querySelector("#text");
//console.log(modSpan);

input.addEventListener('input', (event) => {
    modSpan.style.fontSize = `${event.currentTarget.value}px`;
});