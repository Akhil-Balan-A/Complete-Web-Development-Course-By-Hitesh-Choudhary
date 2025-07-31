//Select by ID

let title = document.getElementById('main-title');
console.log(title.textContent);
title.textContent = 'Hi DOM';

//Select by class

let message = document.getElementsByClassName("message");
console.log(message[0].textContent);
console.log(message[1].textContent);
message[0].innerHTML = "Paragraph one" 
message[1].innerHTML = "Paragraph two"

let links = document.getElementsByClassName('link');
console.log(links[0].textContent)//Link 1
console.log(links[1].innerText)// Link 2
links[0].textContent = "first link"
links[1].innerHTML = "second link"
links[0].href = "https://google.com"
links[1].href = "https://youtube.com"

// select tab by tag name
let buttons = document.getElementsByTagName("button");
console.log(buttons[0].textContent);
buttons[0].textContent = "click here";

// select by queryselector
let Para = document.querySelector('.message');
console.log(Para.innerText)

//select by queryselectorAll
let Paras = document.querySelectorAll(".message");
console.log(Paras[0].innerText)
console.log(Paras[1].innerText);
