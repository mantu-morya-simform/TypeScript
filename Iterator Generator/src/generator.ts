/** Generator: a function that yields/produce values one by one using `yield`. */

console.log("generator-------------------------------");

function* generateNumbers(target: number): Generator<number> {
  for (let i = 1; i <= target; i++) {
    yield i;
  }
}

const gen = generateNumbers(5);
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: 4, done: false }
console.log(gen.next()); // { value: 5, done: false }
console.log(gen.next()); // { value: undefined, done: true }
console.log(gen.next()); // { value: undefined, done: true }
