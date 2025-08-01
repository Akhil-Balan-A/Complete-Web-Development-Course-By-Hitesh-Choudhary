//Example 1
let btn = document.getElementById('clickButton');
btn.addEventListener('dblclick', () => {
    alert('You clicked the button!');    
});

// Example 2
const teaList = document.getElementById('teaList');
const items = teaList.children;

for (let item of items) {
    item.addEventListener('click', () => {
        // item.classList.toggle('teaHighlight')
        if (item.style.backgroundColor === 'red') {
            item.style.backgroundColor = '';
        } else {
            item.style.backgroundColor = 'red'
        }
        
    });
}
