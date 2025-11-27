const btn = document.getElementById('btn');
const container = document.getElementById('container');
var demo = "string"

btn.addEventListener('click', handleClick);
function handleClick(e) {
    const text = e.target.innerText==="Click Me"? "Updated":"Click Me";
    e.target.innerText = text;
    if (text === 'Updated') {
        handleContainer();
    } else {
        container.innerText="This is a container"
    }
}

function handleContainer() {
    const content = 'Updated Successfully!';
    container.innerText = content;
    container.style.color = 'red'
}

const users = [
    { name: 'Kyle', age: 30 },
    { name: 'Sally', age: 25 },
    { name: 'John', age: 40 },
    { name: 'Pete' },
    { name: 'Jill', age: 50 },
    { name: 'Bob' ,age: 20 }
];

users.forEach(user => {
    printUser(user);
})

function printUser(user) {
    if(user.age===undefined){
        console.log(`${user.name}'s age is undefined`);
    
    }else{
        console.log(`${user.name} will be ${user.age+5} years old in 5 years`);

    }
}


//Example for async demonstration

setTimeout(() => {
    console.log("timeout executed");
},3000)
