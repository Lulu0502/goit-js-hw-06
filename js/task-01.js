

const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategories.length}`);

const categoriesArray = [...totalCategories]
  .map(
    categories => `Category: ${categories.children[0].textContent}
Elements: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArray);

//numbers.forEach(function (number, index) {
 // console.log(`Индекс ${index}, значение ${number}`);
//});

// categoriesArray.forEach(function (category, index) {
// console.log(Category: ${categories.children[0].textContent}
// Elements: ${categories.children[1].children.length}`)
//})






