console.log('Hello');
console.error('Error');
console.warn('Warning');
console.info('Info');
process.stdout.write('Hello ');//to print on the same line
process.stdout.write('World');
console.table({ name: 'Akhil', age: 20 });//to print key values in a table like structure.

setTimeout(() => {
    console.clear(); // to clear the console
    
}, 5000);



