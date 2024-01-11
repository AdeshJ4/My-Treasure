const _id = Symbol();
const _fname = Symbol();
const _intro = Symbol();

class Person {
    constructor(id, fname){
        this[_id] = id;
        this[_fname] = fname;
    }

    [_intro](){
        console.log(this[_id], this[_fname]);
    }
}

const obj = new Person(101, 'Adesh');

// console.log(obj[_id]);
console.log(obj._id);  // undefined
console.log(obj._fname); // undefined
// console.log(obj[_fname]);
// obj[_intro]();

