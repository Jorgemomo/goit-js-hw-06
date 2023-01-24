const numCategories = document.querySelectorAll('.item');
console.log('Number of categories:', numCategories.length);

for (const elemCategory of numCategories) {
    const categories = elemCategory.querySelector('h2');
    const elements = elemCategory.querySelectorAll('li'); 
    console.log('Category:', categories.textContent);
    console.log('Elements:', elements.length);
}

// numCategories.forEach(function (element, index) {
// const categories = element.querySelector('h2');
// const elements = element.querySelectorAll('li'); 
// console.log('Category:', categories.textContent);
// console.log('Elements:', elements.length);
// })