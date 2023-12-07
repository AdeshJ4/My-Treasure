function sum(...args) {
  console.log(args);

  if (Array.isArray(args[0])) args = [...args[0]];

  let sum = 0;
  for (let num of args) {
    if (num !== "number") num = Number(num);
    sum += num;
  }

  return sum;
}

console.log(sum(10, "20", 30));
// console.log(sum([10, 20]));
