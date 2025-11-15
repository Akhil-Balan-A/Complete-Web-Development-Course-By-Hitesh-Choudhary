// Event loop.

console.log('script start');

setTimeout(() => console.log('timeout 1 (macrotask - timers)'), 0);

Promise.resolve()
  .then(() => {
    console.log('promise then1 (microtask)');
    return Promise.resolve('inner');
  })
  .then(val => console.log('promise then2', val));

fetch('https://jsonplaceholder.typicode.com/todos/1')                         // browser: starts network request (async)
  .then(res => res.text())
  .then(text => console.log('fetch then (microtask after response)',text));

async function foo() {
  console.log('async foo start');
  await Promise.resolve();
  console.log('async foo resume (microtask after await)');
}
foo();

setTimeout(() => {
  console.log('timeout 2 (macrotask - timers)');
}, 0);

console.log('script end');
