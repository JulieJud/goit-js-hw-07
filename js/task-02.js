const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const selectedById = document.querySelector('#ingredients')
const items = ingredients.map(ingredient => {
  const item = document.createElement('li');
  item.textContent = ingredient
  console.log(item)
  return item
})

selectedById.append(...items)
console.log(selectedById)