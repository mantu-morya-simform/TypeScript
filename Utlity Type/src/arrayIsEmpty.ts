/*
in below function in argument we recieves array of any(not typescript any).
we want to make it typecase in such a way that typescript should throw error if array is empty.
*/

type NonEmptyArray<T> = [T, T, ...T[]];

const outArr = <T>(myArr: NonEmptyArray<T>) => {
  console.log(myArr);
};

outArr(["golang"]); // works
outArr([true]); // works
outArr([]); // ERROR
