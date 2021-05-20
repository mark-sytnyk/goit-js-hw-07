const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsEl = document.querySelector('#ingredients')

const item = ingredients.map(res => {
    const itemEl = document.createElement('li');
    itemEl.textContent = res;

    return itemEl
})

ingredientsEl.append(...item)