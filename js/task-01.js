const totalNavCategories = document.querySelectorAll(".item");
console.log(`В списке ${totalNavCategories .length} категории.`);

const categoriesArray = totalNavCategories
  .forEach(
  items => console.log( `Категория: ${items.children[0].textContent}
Количество элементов: ${items.children[1].children.length}`)
  )
