const obj = {
  fname: "Adesh",
  lname: "Jadhav",
  age: 22,
};

const arr = [10, 20, 30, 40];

for (let key in obj) {
  console.log(key, obj[key]);
}

console.log();

for (let key of Object.keys(obj)) {
  console.log(key, obj[key]);
}

console.log();

for (let key in arr) {
  console.log(key, arr[key]);
}

console.log();

for (let num of arr) {
  console.log(num);
}
