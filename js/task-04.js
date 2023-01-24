let counterValue = 0;

const count = document.querySelector("#value");
//console.log(count);

const additionBtn = document.querySelector(
  '#counter [data-action="increment"]'
);
const subtractionBtn = document.querySelector(
  '#counter [data-action="decrement"]'
);

const additionClick = () => {
  counterValue += 1;
  count.textContent = counterValue;
};

const subtractionClick = () => {
  counterValue -= 1;
  count.textContent = counterValue;
};

additionBtn.addEventListener("click", additionClick);
subtractionBtn.addEventListener("click", subtractionClick);