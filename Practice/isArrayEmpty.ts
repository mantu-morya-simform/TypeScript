type NonEmptyArray<T> = [T, ...T[]];

const outArr = <T>(myArr: NonEmptyArray<T>) => {
  console.log(myArr);
};

outArr(["golang"]); // works
outArr([true]); // works
outArr([]); // ERROR
