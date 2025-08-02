//Example 1
let btn = document.getElementById('clickButton');
btn.addEventListener('dblclick', () => {
    alert('You clicked the button!');    
});

// Example 2
const teaList = document.getElementById('teaList');
const items = teaList.children;

for (let item of items) {
    item.addEventListener('click', (e) => {
        // item.classList.toggle('teaHighlight')
        if (item.style.backgroundColor === 'red' && e.target.matches(".teaItem") ) {
            item.style.backgroundColor = '';
        } else {
           if(e.target.matches(".teaItem")) {
            item.style.backgroundColor = 'red';
           } else {
               if(item.style.backgroundColor === 'yellow' && e.target.matches(".coffeeItem")) {
                   item.style.backgroundColor = '';
               } else {
                   if(e.target.matches(".coffeeItem")) {
                       item.style.backgroundColor = 'yellow';
                   }    
               }
           }
        }
        
    });
}

//Example 3

const form = document.getElementById('feedbackForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const para = document.getElementById('feedbackDisplay');
    let input = document.getElementById('feedbackInput');
    alert(`feedback: ${input.value}`); // input.value
    para.innerText = e.target.feedback.value;

})

//Example 4;

document.addEventListener('DOMContentLoaded', function(){
   document.getElementById('domStatus').textContent = 'The dom is fully loaded!';
})

//Example 5:
document.getElementById('toggleHighlight').addEventListener('click', () => {
    const text = document.getElementById('descriptionText');
    text.classList.toggle('highlight');
})

