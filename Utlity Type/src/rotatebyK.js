// Rotatet by K

function RotateByK(arr, k) {
  for (let j = 0; j <= k; j++) {
    let first = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = first;
  }
}

let Input = [1, 2, 3, 4, 5],
  k = 2;

RotateByK(Input, k);
console.log(Input);

// Output: [4,5,1,2,3]
