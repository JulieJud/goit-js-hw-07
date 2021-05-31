const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const selectedById = document.querySelector('#ingredients')
const item1El = document.createElement('li')
item1El.textContent=ingredients[0]
const item2El = document.createElement('li')
item2El.textContent=ingredients[1]
const item3El = document.createElement('li')
item3El.textContent=ingredients[2]
const item4El = document.createElement('li')
item4El.textContent=ingredients[3]
const item5El = document.createElement('li')
item5El.textContent=ingredients[4]
const item6El = document.createElement('li')
item6El.textContent=ingredients[5]
selectedById.append(item1El, item2El, item3El, item4El, item5El, item6El)
console.log(selectedById)