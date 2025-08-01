document.getElementById('changeTextButton').addEventListener('click', function() {
    const myParagraph = document.getElementById('myParagraph');
    myParagraph.textContent = 'The paragraph has been changed!';
});

document.getElementById('highlightFirstCity').addEventListener('click', () => {
    const ul = document.getElementById('citiesList');
    ul.lastElementChild.classList.toggle('highlight');
});
let count = 0;
let btn = document.getElementById('changeOrder')
    btn.addEventListener('click', () => {
    count++
    const coffeeOrder = document.getElementById
        ('coffeeOrder');
    if (count % 2 === 1) {
        coffeeOrder.firstElementChild.textContent = 'Espresso';
        btn.innerText = 'Change Order to Latte';
        
    } else {
        // coffeeOrder.firstElementChild.textContent = 'Latte'
        location.reload();
    }
    })

//Example 4 solution
let listBtn = document.getElementById('addNewItem');
listBtn.addEventListener('click', () => {
    const list = document.getElementById('shoppingList');
    const newItem = document.createElement('li')
    newItem.innerText = 'Cheese';
    list.appendChild(newItem);
});

// Example 5 solution
let removeBtn = document.getElementById('removeLastTask');
removeBtn.addEventListener('click', () => {
    let element = document.getElementById('taskList')
    element.lastElementChild.remove();

})

