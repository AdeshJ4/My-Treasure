const obj = { a: 1, p: 2, l: 1, e: 2 };

let maxProperties = [];
let maxValue = 0;

for (let key in obj) {
  if (obj[key] > maxValue) {  // 1>0, 2>1, 1>2, 2>2
    maxValue = obj[key];  // 1, 2
    maxProperties = [key]; // a  , p
  } else if (obj[key] === maxValue) { //1==2, 2==2
    // If multiple properties have the same max value, add them to the array
    maxProperties.push(key); // e
  }
}

console.log(
  `The properties with the largest value (${maxValue}) are: ${maxProperties.join(
    ", "
  )}.`
);
