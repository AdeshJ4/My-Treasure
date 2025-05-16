const people = [
    { name: "Alice", age: 30 },
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];



people.sort((a, b) => {
    return a.age - b.age
})


console.log(people);
