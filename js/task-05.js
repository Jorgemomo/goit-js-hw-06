const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

function outputChange() {
    textOutput.textContent = textInput.value === '' ? 'Anonymous': textInput.value;    
}

textInput.addEventListener("input", outputChange)



