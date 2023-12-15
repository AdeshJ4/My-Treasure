// constructor function
function Location(street, city, zipCode) {
  // Function()
  (this.street = street),
    (this.city = city),
    (this.zipCode = zipCode),
    (this.address = function () {
      console.log(`${street}`);
    });
}

const p1 = new Location("lohegaon", "pune", 411047);
const p2 = new Location("wagholi", "mumbai", 415716);
const p3 = p1;  

function areEqual(p1, p2) {
  // check if two objects are equal by comparing properties of objects
  // if all properties of these objects are equal or not
  return (
    p1.street === p2.street && p1.city === p2.city && p1.zipCode === p2.zipCode
  );
}

function areSame(p1, p2) {
  // to check two variables are referencing/pointing the same object we use strick equality operator.
  return p1 === p2;
}

console.log(areEqual(p1, p2));
console.log(areSame(p1, p2));
