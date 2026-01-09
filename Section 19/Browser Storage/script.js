sessionStorage.setItem("name", "John Cena");
console.log(sessionStorage.getItem("name"));

localStorage.setItem("name", "John Cena");
console.log(localStorage.getItem("name"));

document.cookie = "name=John Cena";
console.log(document.cookie);