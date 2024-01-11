const _id = Symbol();
const _fname = Symbol();
const _draw = Symbol();

class Person {
  constructor(id, fname) {
    this[_id] = id; // Use the symbol as the key
    this[_fname] = fname; // Use the symbol as the key
  }

  [_draw]() {
    console.log(this[_id], this[_fname]);
  }
}

const obj = new Person(101, "Adesh");

console.log(obj); // Person { [Symbol()]: 101, [Symbol()]: 'Adesh' }
console.log(obj[_id]); // 101
console.log(obj._id);
console.log(obj[_fname]); // 'Adesh'
obj[_draw](); // Logs: 101 Adesh

// Using Object.getOwnPropertySymbols to access properties
const keys = Object.getOwnPropertySymbols(obj);
console.log(obj[keys[0]]); // 101
console.log(obj[keys[1]]); // 'Adesh'



/*
how to make method private: 
Step 1: add another symbol like : 
const _intro = Symbol();

Step 2: so instead of using name like intro we use symbol. In ES6 we have new feature called computed properties name. 
   so we can add brackets, and inside this bracket we add an expression. when expression is evaluated the resulting value will be 
   used as the name of the property or method. so here we add [_intro], so this expression or symbol will be evaluated and we will get 
   unique value or unique identifier and because we put this inside a [] that unique identifier will be used as thee name of the method

*/