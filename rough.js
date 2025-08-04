var x = 1;

const c = a();
const d = b();

console.log(c==d)

console.log(x )

function a() {
    
    var x = 10;
    
    console.log(x);
    return x;
}

function b() {
    var x = 10
    console.log(x)
    return 10;
}
