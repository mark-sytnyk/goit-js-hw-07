const quantityСategories = document.querySelectorAll('.item')
console.log(`В списке ${quantityСategories.length} категории.`)
const result = quantityСategories.forEach(category => {
    const categoriesTitle = category.querySelector('h2')
    const quantityElements = category.querySelectorAll('ul > li')
    console.log(`
    Категория: ${categoriesTitle.textContent}
    Количество элементов: ${quantityElements.length}
    `) 
})

