const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const targetIngredients = document.querySelector("#ingredients");
targetIngredients.innerHTML =  'INGREDIENTS: ';
console.log(targetIngredients);

for(const elementList of ingredients){
  const elemLi = document.createElement("li");
  elemLi.textContent = elementList;
  elemLi.classList.add("item");
  targetIngredients.append(elemLi);
};