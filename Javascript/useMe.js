const arr1 = ["Adesh ", "Pramod ", "Jadhav"];
const arr2 = [10, 20, 30];

const name = arr1.reduce((accumulator, curElement)=>{
  return accumulator += curElement;
}, "Name: ");


const add = arr2.reduce((accumulator, curElement)=>{
  return accumulator += curElement;
}, 0);

const mul = arr2.reduce((accumulator, curElement)=>{
  return accumulator *= curElement;
}, 1);



console.log(mul);

