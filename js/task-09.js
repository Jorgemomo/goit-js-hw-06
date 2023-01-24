function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bgColor = document.querySelector(".color");
console.log(bgColor);

const button = document.querySelector(".change-color");
console.log(button);

button.addEventListener("click", changeBodyColor=> {
  const randomColor = getRandomHexColor()
  document.body.style.background = randomColor;
  bgColor.textContent = randomColor;
});