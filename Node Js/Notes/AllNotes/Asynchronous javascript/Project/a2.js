// let arr1 = [30, 40, 10, 20, 60, 50];
// let arr2 = ['C', 'A','B'];
// let arr3 = [30, 10, 20, 'z', 'Z', 'a', 'A'];

// arr1.sort();
// console.log(arr1);
// arr1.reverse();
// console.log(arr1);

// arr2.sort();
// console.log(arr2);
// arr2.reverse();
// console.log(arr2);

// arr3.sort();
// console.log(arr3);
// arr3.reverse();
// console.log(arr3);

const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  console.log(`a: ${a}     b: ${b}      a-b: ${a-b}`);
  return a - b;
});

console.log(points);
