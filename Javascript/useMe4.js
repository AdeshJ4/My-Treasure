const obj = { a: 1, p: 2, l: 1, e: 2 };

let maxProperties = [];

for (let key in obj) {
    maxProperties = [key];
}

console.log(maxProperties);
