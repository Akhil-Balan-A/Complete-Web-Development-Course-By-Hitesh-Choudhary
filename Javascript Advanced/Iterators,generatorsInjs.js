function* numberGernerator() {
    yield 1
    yield 2
    yield 3
    yield 4
}

let gen = numberGernerator();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

