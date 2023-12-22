const myObject = { a: 1, p: 2, l: 1, e: 8 };

let maxProperty = null;
let maxValue = 0;

for (let key in obj) {
  if (obj[key] > maxValue) {
    // 1>0, 2>1, 1>2, 8>2
    maxValue = obj[key]; // 1, 2, 8
    maxProperty = key; // a, p, e
  }
}

console.log(
  `The property with the largest value is '${maxProperty}' with a value of ${maxValue}.`
);
