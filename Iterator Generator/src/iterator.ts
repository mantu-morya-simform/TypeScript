/**
 * Iterator: an object that returns values one by one on each `next()` call.
 * Used for controlled, sequential data access (lazy iteration).
 */

console.log("iterator---------------------------------------------");

interface iterator<T> {
  next(): iteratorResult<T>;
}

interface iteratorResult<T> {
  value?: T;
  done: boolean;
}

function createIterator(): iterator<number> {
  let i = 0;
  return {
    next(): iteratorResult<number> {
      if (i < 3) {
        return { value: i++, done: false };
      } else {
        return { done: true };
      }
    },
  };
}

const it = createIterator();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
