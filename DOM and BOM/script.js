//click event
const btn = document.getElementById('clickBtn');
btn.addEventListener('click', (e) => {
    alert(`Button named ${e.target.textContent} is ${e.type}ed`)
})



const input = document.getElementById('textInput');

//input event

