
const formulary = document.querySelector(".login-form");

formulary.addEventListener("submit", (event) => {
    event.preventDefault();
    const {elements: { email, password }} = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert("¡Por favor diligencie los campos!");
    }
        console.log({'Email': email.value,  'Password': password.value});

    event.currentTarget.reset();
});


