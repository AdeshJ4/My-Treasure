
//Q1]. What are the different data types present in javascript?
/*
1. Primitive types
2. Non-primitive types / Reference Type

1. Primitive types : 7 Types

String 
Number 
Boolean 
undefine
null
BigInt 
Symbol

2. Non-primitive types / Reference Type
Object 
Arrays
FUnction


1. Primitive Types: 
Primitive data types can store only a single value. To store multiple and complex values, non-primitive data types are used.

i. String - It represents a series of characters and is written with quotes. A string can be represented using a single or a double quote.
code: 
var str = "Adesh Jadhav"; //using double quotes
var str2 = 'John Doe'; //using single quotes

ii. Number - It represents a number and can be written with or without decimals.
code:
var x = 3; //without decimal
var y = 3.6; //with decimal


iii. BigInt - This data type is used to store numbers which are above the limitation of the Number data type. It can store large integers .
code: var bigInteger =  234567890123456789012345678901234567890;

iv. Boolean - It represents a logical entity and can have only two values : true or false. 
(5 === 5) //returns true

v. Undefined - When a variable is declared but not assigned, it has the value of undefined and it’s type is also undefined. we can also 
set the value of a variable as undefined.
code: 
var x; // value of x is undefined
var y = undefined; // we can also set the value of a variable as undefined

vi. null - The null value represents the intentional absence of any object value.
code: let num = null;

vii. Symbol - It is a new data type introduced in the ES6 version of javascript.	
Symbols are immutable (cannot be changed) and are unique. 
You use the Symbol() function to create a Symbol.
code 1 : 
const x = Symbol('hey');
console.log(x); // Symbol(hey)
code 2: 
Symbol("foo") === Symbol("foo"); // false
Access Symbol Description we use 'description' property.
code : console.log(x.description);
Symbols are often used to add unique property keys to an object that won't collide with other keys that might add to the object.
code: 
let id = Symbol("id");
let person = {
    name: "Jack",
    [id]: 123 // not "id": 123    // adding symbol as a key
};
console.log(person); // {name: "Jack", Symbol(id): 123}



typeof of primitive types :
To know the type of a JavaScript variable, we can use the typeof operator.

console.log(typeof 'Adesh');                        // string
console.log(typeof 21);                             // number
console.log(typeof 12.02);                          // number
console.log(typeof true);                           // boolean
console.log(typeof 123456987456321456987456321n);   // bigint
console.log(typeof undefined);                      // undefined
console.log(typeof null);                           // object (kind of a bug in JavaScript)
console.log(typeof Symbol('hey'));                  // symbol





2. Non-primitive types / Reference Type : 
Primitive data types can store only a single value. To store multiple and complex values, non-primitive data types are used.


i. Object 

-> Objects are collections of key value pair written inside {}.
-> if we have properties which are highly related then we can encapsulate them inside object.
-> main purpose of object is to grouped related properties.
-> In javascript objects are dynamic. once we create them we can add additional properties or can remove properties.
code : 
const person = {
    fname: "Adesh",
    age: 22,
    location: {
        street: "lohegaon"
    },
    intro(){
        console.log(`fname: ${this.fname}`);
    }
}


ii. Array: 

-> Array store multiple elements which has different datatype inside a single variable.
code : const arr = [10, 'A', true, Symbol('Hey'), undefined, null, 46316685164514n];


iii. Function

-> inside a function we write block of code which we can run again and again without repeating it.
function sayMyName(fname){
    log(fname);
}

typeof of reference types :
console.log(typeof ['A', 'B']);         // object
console.log(typeof {1: 'A', 2: 'B'});   // object
console.log(typeof fun);                // function -> special kind f object

*/


//Q2] Explain Hoisting in javascript.

/*
JavaScript Hoisting: 
--------------------

-> Hoisting is JavaScript's default behavior of moving all declarations(function declaration, variable declaration) to the top of 
the current scope which can be current script or the current function and this done by automatically by js engine.

-> In JavaScript,variables can be used before declaration.
-> but it is applicable to "var" keyword only, and not for "let" & "const".
-> if you talked about "let" keyword you have to first declare the let variable then and only then you can use it.
-> const keyword must be initialized at the time of declaration.
-> JavaScript in strict mode does not allow variables to be used if they are not declared.

x = 5;  // initialization
var x;  // declaration

-> same with function. 
-> we can call a function which is define using function declaration syntax before it is defined.

walk();
function walk(){
	log('walk');
}


*/


//Q3] Difference between “ == “ and “ === “ operators.

/*
Both are comparison operators. The difference between both the operators is that “==” is used to compare values whereas, 
“ === “ is used to compare both values and types.

code : 

var x = 2;
var y = "2";
(x == y)  // Returns true since the value of both x and y is the same
(x === y) // Returns false since the typeof x is "number" and typeof y is "string"

 */


//Q4] explain different types of JavaScript Scope and Scope chain.
/*
JavaScript Scope : 
------------------

-> Scope determines the accessibility of variables.
-> JavaScript has 3 types of scope: 

	1. Block scope 
	2. Local or Function scope
	3. Global Scope


1. Block Scope
--------------
-> Before ES6 (2015), JavaScript had only Global Scope and Function Scope.
-> ES6 introduced two important new JavaScript keywords: let and const.
-> These two keywords provide Block Scope in JavaScript
-> Variables declared inside a { } block cannot be accessed from outside the block
-> variable from outside of block can be accessible inside block and you can change its value inside a block.
-> for loop, while loop, if statement provide block scope for a let, const.

-> variable from outside of block can be accessible inside block and you can change its value inside a block.
code : 
let a = 10;
{
  let x = 45;
  a++;
  console.log(a); // 11
}
console.log(a);  // 11
console.log(x);  // not accessible

-> for loop, while loop, if statement provide block scope for a let, const.
code: 
if(true){
  const x = 5;
}
console.log(x); // NOT ACCESSIBLE
for(let y = 0; y<1;y++){
  console.log();
}
console.log(y);// NOT ACCESSIBLE
function fun(){
  if(true){
    const name = "Adesh";
  }
  log(name) // NOT ACCESSIBLE
}

-> var does not support block scope, it only support function scope;
code : 
function fun() {
  for(var i=0; i<10; i++){
    console.log(i);
  }
  console.log('Inside a function : ' , i); // i is accessible
}
fun();
console.log('outside a function : ' , i); // i is not accessible


2. Function Scope: 
-----------------
-> JavaScript has function scope: Each function creates a new scope.
-> Variables declared within a JavaScript function, become LOCAL to the function
-> Local variables are created when a function starts, and deleted when the function is completed.
-> Variables defined inside a function are not accessible (visible) from outside the function.
-> if we pass variable define and initialized outside the function to inside a function through a parameter and if you changed its 
value inside a function it will not affect the original variable, its value will be unaffected.
-> 
code: 
let num = 10;
function add (num){
  num++;
  console.log('Inside a function: ', num);  // 11
}
add(num);
console.log('Outside a Function: ' +  num);  // 10



3. Global Scope: 
----------------
-> A variable declared outside a function, becomes GLOBAL.
-> Variables declared Globally (outside any function) have Global Scope.
-> Global variables can be accessed from anywhere in a JavaScript program
-> Variables declared with var, let and const are quite similar when declared outside a block.
-> Global variables defined with the var keyword belong to the window object.
so don't use var keyword as a global variable since it modify or overwrite the properties of global object.
if window object have the same name with global variable then global variable will overwrite the value of window object.
-> you can access and modify the value of a global variable inside a block scope like if, for, {}.
-> But you can't modify the value of a global variable inside a function, you ca access it but can't modify.
-> if we have local variable with the same name as global variable then function will give priority to the local variable which is 
define inside it.
-> Global variables can be used modify by all other scripts(inside function and block scope) in the page
-> Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.
ex .
function fun(){
  num = 10;
}
fun();
console.log(num);  // 10


ex .
<script>
var carName = "Volvo";
// code here can use window.carName
document.getElementById("demo").innerHTML = "I can display " + window.carName;
</script>

-> if we have local variable with the same name as global variable then function will give priority to the local variable which is 
define inside it.
eg

var name = "Adesh";   // global variable
function fun(){ 
	var name = "Ram";  // local variable
	log(name); // Ram if local variable with same name not define then Adesh
}
fun();
log(name);  // Adesh

Automatically Global: 
-> If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.
code: 
num = 10;
log(num) // num is var


Scope Chain: JavaScript engine also uses Scope to find variables. Let’s understand that using an example:
-> if a variable is not found in a current scope(scope can be block scope or function scope) then js engine will search that 
variable in its outer scope again if js engine not found that variable then he is going to search it in outer scope of outer scope.

ex. 
var y = 24;
function favFunction(){
  var x = 667;
  var anotherFavFunction = function(){
    console.log(x); // Does not find x inside anotherFavFunction, so looks for variable inside favFunction, outputs 667
  }
  var yetAnotherFavFunction = function(){
    console.log(y); // Does not find y inside yetAnotherFavFunction, so looks for variable inside favFunction and does not find it, so looks for variable in global scope, finds it and outputs 24
  }
  anotherFavFunction();
  yetAnotherFavFunction();
}
favFunction();

ex. 2

{
  let num = 10;
  {
    console.log(num);
  }
}



The Lifetime of JavaScript Variables:
-------------------------------------

-> The lifetime of local variable starts when function starts its execution and they destroy when function complete its execution.
-> In a web browser, global variables are initialized when they are declared, and are deleted like when you navigate to another 
page or close the window.


 */


// Q5] why it is bad to attach global variable define with 'var' to window object.
/*
-> when we used var outside a function, this creates a global variable and attaches that global variable to the window  object in 
the browser.
-> so in browser we have 'window' object which is a complex object with a lot of properties.and methods.
-> var keyword attaches variable name to window object. so if you write window.myName it will log your name.
eg.

var myName = "Adesh";  // global variable
window.myName; // write this code inside browser console.
o/p => Adesh

-> In contrast when we use let keyword to define a global variable that global variable is not attached to the window object.
-> then why it is bad to attach variable to window object ?
Your global variables (or functions) can overwrite window variables (or functions).
Any function, including the window object, can overwrite your global variables and functions.

*/


//Q6] Difference between var and let keyword in javascript
/*

	      let							                                      var
-> let is block-scoped.					                          -> var is function scoped.
-> let does not allow to redeclare variables.		          -> var allows to redeclare variables.
-> Hoisting does not occur in let.				                -> Hoisting occurs in var.
-> let doesn't attach with window object                  -> attach with window object & can overwrite global properties

*/


// Q7] Explain Type Conversion. 
/*

Type Conversions: 
-----------------

-> In programming, type conversion is the process of converting one data type to another another. For example: converting String data 
to Number.

There are two types of type conversion in JavaScript :

1. Implicit Conversion - automatic type conversion
2. Explicit Conversion - manual type conversion


i. Implicit Conversion : 

-> Implicit Conversion also called 'automatic type conversion' and 'Type coercion'.
-> In certain situations, JavaScript automatically converts one data type to another.
For example: converting String data to Number.


Example 1: Implicit Conversion to String
numeric string or normal string used with + gives string type.
When a number is added to a string, JavaScript converts the number to a string before concatenation
code: 
console.log('Adesh' + 4);     //  "Adesh4"
console.log('3' + 2);         //  "32"
console.log('3' + 2 + 5);         //  "325"
console.log('2' + undefined); //  "2undefined"
console.log('str' + null);    // "strnull"



Example 2: Implicit Conversion to Number
numeric string used with - , / , * results number type.
code : 
console.log('4' - '2');  // 2
console.log('4' - 2);    // 2
console.log('4' * 2);    // 8
console.log(4 / '2');    // 2


Example 3: Non-numeric String Results to NaN
non-numeric string used with - , / , * results to NaN
code : 
console.log("a" - "b");
console.log("4" - 'b');


Example 4: Implicit Boolean Conversion to Number
if boolean is used, true is 1, false is 0
code: 
console.log(4 - true);  // 4 - 1 = 3
console.log('4' - true);// 4 - 1 = 3
console.log('4' - false);// 4 - 0 = 4
console.log('4' + false);// '4false'
console.log(4 - false); // 4 - 0 = 4


Example 5: null Conversion to Number
null is 0 when used with number
code: 
console.log(4 + null);  // 4 + 0 = 4
console.log(4 - null);  // 4 - 0 = 4
console.log('4' - null);  // 4 - 0 = 4
console.log('4' + null);  // '4null'


Example 6: undefined used with number, boolean or null
Arithmetic operation of undefined with number, boolean or null gives NaN
code : 
console.log(4 + undefined);     // NAN
console.log(4 - undefined);     // NAN
console.log(true + undefined);  // NAN
console.log(4 + undefined);     // NAN
console.log(null + undefined);  // NAN




2. Explicit Conversion - manual type conversion

-> You can also convert one data type to another as per your needs. 
-> The type conversion that you do manually is known as explicit type conversion
-> In JavaScript, explicit type conversions are done using built-in methods

i. Convert to Number Explicitly

To convert numeric strings and boolean values to numbers, you can use Number(), parseInt(), parseFloat();
code : 
console.log(Number('22.25'));       // 22.25
console.log(parseFloat('22.25'));   // 22.25
console.log(parseInt('22.25'));     // 22
console.log(Number(true));          // 1
console.log(Number(false));         // 0
console.log(Number("A"));           // NAN
console.log(Number(null));          // 0
console.log(Number(undefined));     // NAN
console.log(Number(' '));           // 0


ii. Convert to String Explicitly

To convert other data types to strings, you can use either String() or toString(). For example,
String() takes null and undefined and converts them to string. However, toString() gives error when null, undefined() are passed.
code : 
console.log(String(321));       // "321"
console.log(String(2 + 4));     // "6"
console.log(String(null));      // "null"
console.log(String(undefined)); // "undefined"
console.log(String(true));      // "true"
console.log(String(false));     // "false"
console.log(String(NaN));       // "NaN"


iii. Convert to Boolean Explicitly
To convert other data types to a boolean, you can use Boolean().
code: 
console.log(Boolean(1));          // true
console.log(Boolean(25));         // true
console.log(Boolean(0));          // false
console.log(Boolean(''));         // false
console.log(Boolean(' '));        // true
console.log(Boolean(false));      // false
console.log(Boolean(undefined));  // false
console.log(Boolean(null));       // false
console.log(Boolean(NaN));        // false

Truthy and falsy: 
----------------

-> All values except false, 0, 0n, -0, “”, null, undefined, and NaN are truthy values.
code: 

var x = 0;
var y = 23;     
if(x) { console.log(x) }   // The code inside this block will not run since the value of x is 0(Falsy)       
if(y) { console.log(y) }    // The code inside this block will run since the value of y is 23 (Truthy)


Logical operators:
------------------

Logical operators in javascript, unlike operators in other programming languages, do not return true or false. 
They always return one of the operands.

OR ( || ) operator - If the first value is truthy, then the first value is returned. Otherwise, always the second value gets returned.

AND ( && ) operator - If both the values are truthy, always the second value is returned. If the first value is falsy then the first value is returned or if the second value is falsy then the second value is returned.


console.log( 0 || "Adesh Pramod Jadhav");   // "Adesh Pramod Jadhav"
console.log( 10 || "Adesh Pramod Jadhav");  // 10
console.log( " " || "Adesh Pramod Jadhav"); // " "


console.log( 10 && "Adesh");    // "Adesh"
console.log( "" && "Adesh");    // ""
console.log( 10 && 0);          // 0 
*/ 



// Q8] Is javascript a statically typed or a dynamically typed language?

/*
-> JavaScript is a dynamically typed language
-> In a dynamically typed language, the type of a variable is checked during run-time
-> In static languages when we declare a variable The type of that variable is set and it cannot to change in the future.
-> In dynamic language the type of variable can change at runtime like from number to string vice versa.
-> the type of variable will be determine at runtime means at runtime we can change type of data to another data type.
*/


// Q9] What is NaN property in JavaScript
/*

-> NaN stands for "Not-a-Number".
-> NaN indicates a value that is not a legal number
-> typeof of NaN will return a Number.
-> To check if a value is NaN, we use the isNaN() function,
isNaN("Hello")  // Returns true
isNaN(345)   // Returns false
isNaN('1')  // Returns false, since '1' is converted to Number type which results in 0 ( a number) 
isNaN(true) // Returns false, since true converted to Number type results in 1 ( a number)
isNaN(false) // Returns false
isNaN(undefined) // Returns true


*/


// Q10]  Explain passed by value and passed by reference.
/*

-> "passed by value" and "passed by reference" refer to the way values are assigned and passed between variables in programming 
languages. 
-> Note:
In JavaScript, primitive data types (like numbers, strings) are passed by value and non-primitive data types like objects and arrays
are passed by reference. Functions in JavaScript are references, but their behavior is more complex and involves both value and 
reference aspects.



1. Passed by Value:
-> primitive are copied by their value.
-> suppose we have two variables.
-> let x = 10; let y = x;
-> both x and y are independent of each other, they don't have any relation with each other.
-> the main point is that we store/copied the value and not a reference of x inside y.
->  so if any changes made either in x or y will not affect thr other variable.

-> ex.1
let a = 5;
let b = a;  // Copied by value
b = 10;    // Changing b does not affect a
console.log(a);  // Output: 5
console.log(b);  // Output: 10

ex.2
let num = 10;
function cal1(num) { // local variable
  num++;
}
cal1(num); // primitive types are pass by value, both variables are different
console.log(num);




2. Passed by Reference:

-> Objects are copied by their references.
-> same example as above.
-> suppose we have two variables.
-> let x = {value:10} let y = x;
-> when we stored a object inside a variable, that object is not going to store inside a variable.
-> that object is store somewhere in memory. and address of that memory location is stored inside that variable.
-> when we copied x into y (y = x), its the address or the reference which is copied and not a object.
-> In other word both x and y pointing to the same object in memory.
-> and when we modify that object using either x or y the changes are immediately visible to other variable.


ex.1

const x = { value: 5 };
const y = x;
console.log("Before x: " + x.value);
y.value++;
console.log("After x: " + x.value);


ex.2

let num = 10;
function fun(num){
    num++;
}
console.log('Before num: ' + num);
fun(num);
console.log('After num: ' + num);


let obj = {value: 5};
function fun(obj){  // local variable
    obj.value++;
}
console.log('Before value: ' + obj.value);
fun(obj);
console.log('After value: ' + obj.value);//  reference type are pass by reference, both variable points to same obj in memory.


 */

// Q11] Explain “this” keyword: 

/*
this: 
-----

-> "this" references the object that is executing the current function.
-> so if that function is part of that object "this" reference that obj itself.
-> otherwise if that function is regular function which means it is not part of the object then "this" references to global object 
which is "window" object in the browser and "global" in node.
-> in case of constructor function, we all know that we create object using new operator. so new operator create a new empty object 
like this {} and set "this" to point newly created object.


ex

1. function inside obj

const obj = {
    fname: "Adesh",
    age: 22,
    fun(){
        console.log(this);
    }
}
obj.fun();  // here "this" refer to object itself

o/p-> { fname: 'Adesh', age: 22, fun: [Function: fun] }


2. separate function

function fun(){
	console.log(this);		
}
fun();

o/p-> [object Window]


3. Constructor function: 

function Person(fname){
  this.fname = fname;  // we added new property inside empty object created by new operator.
  console.log(this);
}

const p1 = new Person('Adesh');

o/p-> Person { fname: 'Adesh' }




4. callback function: 

const obj = {
  title: 'A',
  tags : ['a', 'b', 'c'],
  showTags(){
    this.tags.forEach(function(tag){
      console.log(this, tag);
    })
  }
}
obj.showTags();

o/p-> 
Window {window: Window, self: Window, document: document, name: '', location: Location, …} 'a'
Window {window: Window, self: Window, document: document, name: '', location: Location, …} 'b'
Window {window: Window, self: Window, document: document, name: '', location: Location, …} 'c'



"this" from callback function of forEach refer to window/global object.
why this is happing .
because that callback function is inside a forEach method and not a inside a obj. so it acts as a regular function
and in case of regular function "this" refer to global object.


solution : 

const person = {
  title: 'A',
  tags : ['a', 'b', 'c'],
  showTags(){
    this.tags.forEach(function(tag){
      console.log(this.title, tag);
    }, this)  					// ->  }, {title: 'A',tags : ['a', 'b', 'c'], ...});
  }
}
person.showTags();

o/p=> 
A a
A b
A c


our forEach method have 2nd parameter which is "thisArg" means we can pass object as a 2nd parameter and "this" will 
points to that object. but we have our obj which is Person so we don't have to pass extra object. just write "this" as 
a 2nd parameter . note that showTag() comes under obj so new "this" will not refer to global.

Note : but not all methods will give you ability to pass "this"  as 2nd argument.


solution : 

ex. 1 : using self = this;

const obj = {
  title: "a",
  tags: ["A", "B", "C"],
  showTags() {
    const self = this;
    this.tags.forEach(function(tag){
      console.log(self.title, tag);
    });
  },
};

obj.showTags();


ex.2 : using bind() method

const obj = {
  title: 'a',
  tags: ['A', 'B', 'C'],
  showTags(){
    this.tags.forEach(function(tag){
      console.log(this.title, tag);
    }.bind(this));
  }
};

obj.showTags();



ex. 3 : using arrow function

-> The good thing about arrow function is that they inherit "this" value from containing function in below ex that function is 
showTags().

const obj = {
  title: 'a',
  tags: ['A', 'B', 'C'],
  showTags(){
    this.tags.forEach((tag)=>{
      console.log(this.title, tag);
    });
  }
};

obj.showTags()


*/


// Q12] Explain call(), apply() and, bind() methods.

/*

1. call()

-> The call() method calls the function directly and sets "this" to the first argument passed to the call method and subsequent 
arguments are passed to the function as individual parameters.
-> NOTE: The call method doesn’t return a new function.

Ex.1

function test(arg1, arg2){
  console.log(this.num, arg1, arg2); // 100, 10, 20
}
test.call({num: 100}, 10, 20);

Ex.2
const person = {
  fullName: function (city, country) {
    console.log(
      this.firstName + " " + this.lastName + ", " + city + ", " + country
    );
  },
};

const john = {
  firstName: "John",
  lastName: "Doe",
};
person.fullName.call(john, "New York", "USA");
// Output: John Doe, New York, USA


Ex.3
const person = {
    fname: 'Adesh',   // you can't access this properties now, because we change reference of 'this' to first arguments.
    intro(city){
        console.log(`Name: ${this.fname} city: ${city} planet : ${this.planet}`);
    }
}
person.intro.call({planet: 'Earth'}, 'India');  //Name: undefined city: India planet : Earth


2. Apply() Method: 

-> The apply() method calls the function directly and sets this to the first argument passed to the apply method
-> it takes an array of elements as the second argument, where each element of the array corresponds to an argument passed to the 
function.
-> In the apply method, we pass arguments in the form of an array this is only the primary difference between call and apply.


ex.1

const sum = function(a, b, c) {
  return a + b + c;
};

const result = sum.apply(null, [1, 2, 3]);
console.log(result); // Output: 6



ex.2
  
let PrintName = { 
    name: "steve", 
    sayHi: function (...age) {  // rest parameter
        console.log(this.name + " age is " + age); 
    } 
} 
PrintName.sayHi.apply({name: "Tony"}, [42]);



3. bind() method :

-> The bind() method creates a new function and when that new function is called it set this keyword to the first argument which 
is passed to the bind method and subsequent arguments are passed to the function as individual parameters.


function greet(message) {
  console.log(message + " " + this.name);
};
const person = {name: "John"}
const greetJohn = greet.bind({name: "John"}, "Hello");
greetJohn(); // Output: Hello John


*/


// Q13] What is an Immediately Invoked Function(Self Invoking Functions ) in JavaScript?

/*
-> An Immediately Invoked Function also called self invoked function or IIFE is a function that runs as soon as it is defined.
-> two sets of parentheses()() are used to execute this function.
-> In the first parenthesis we define the body of the function.
-> variable define outside a IIFE is accessible inside IIFE but variable define inside IIFE is not accessible out side IIFE.
Syntax :
(function(){ 
  console.log('I am a self-invoking function!');
})();

if you define body of the function inside a first parenthesis then it will returns the function declaration
eg. 
(function (){
  // Do something;
})// Returns the function declaration

Therefore to invoke the function, we use the second set of parenthesis.

Example 2: Passing Parameters
(function(n1, n2){
  console.log('Addition: ' + (n1 + n2));
})(10, 10);  // Addition : 20

Example 3: 
let outsideVar = 'Outside Variable';
(function(){
  let insideVar = 'Inside Variable';
  console.log(outsideVar);  // ACCESSIBLE
})();
console.log(insideVar);  // NOT ACCESSIBLE

*/



// Q14] What do you mean by strict mode in javascript and characteristics of javascript strict-mode?

/*
-> we define strict mode like "use strict"; to the beginning of a script or a function.
-> The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
-> if you declare "use strict" at the beginning of the file then it has global scope and if you declare "use strict"; inside the 
function then it have local scope.

characteristics: 

-> variable is not allowed without declaring it
-> objects is not allowed without declaring it
-> Deleting a variable (or object) is not allowed.
"use strict";
let x = 3.14;
delete x;                // This will cause an error
-> Deleting a function is not allowed.
"use strict";
function x(p1, p2) {};
delete x;                // This will cause an error 
-> Duplicating a parameter name is not allowed
"use strict";
function x(p1, p1) {};   // This will cause an error
-> Octal numeric literals are not allowed:
"use strict";
let x = 010;             // This will cause an error
-> Octal escape characters are not allowed:
"use strict";
let x = "\010";            // This will cause an error



*/


// Q15] What is a Higher Order Function?

/*
-> A higher order function is a function that takes one or more functions as arguments, or returns a function as its result.
-> for ex. map(), forEach(), filter(), reduce() these are the higher order functions because they take anther function as an 
arguments.
-> Callback is a function which is passed as an argument to another function where the function which receive this callback is a 
higher order function.

ex: 

function fun(fun1, fun2) {
  fun1();
  fun2();
  return function(){
    console.log('Function returned as an result.');
  }
}
const resFunction = fun(()=> {console.log('1st fun passed as an argument')}, ()=>{console.log('2nd fun passed as an argument')});
resFunction();

ex. 2
map((item, index)=><li key={index}>{item.name}</li>)
*/



// Q16] Explain Closures in JavaScript.

/*
-> Function have a specialty, variables declare inside a function are destroyed when function completes its execution.
-> Closures is  ability of a outer function to store the variables and functions that are declared inside it,
instead of destroying them after execution, it saves them in the memory so that inner function can access them.
ex: 
function outerFunction() {
  let num = 0;
  function innerFunction() {
    num++;
  }
  return innerFunction;
}
const closure1 = outerFunction();
closure1();  // 1
closure1();  // 2
closure1();  // 3

-> Therefore outerFunction(), instead of destroying the value of 'num' after execution, saves the value in the memory for further 
reference. when we called innerFunction(), instead of starting num from 0 it starts from previous value.
*/



// Q17] What is currying in JavaScript

/*

-> It is a technique in functional programming, that transforms the function of multiple arguments into several functions which 
takes in one parameter at a time

ex.

before currying: 
function calculateVolume(length, breadth, height) {
    return length * breadth * height;
}
console.log(calculateVolume(4, 5, 6));

after currying: 
function calculateVolume(length) {
  return function (breadth) {
      return function (height) {
          return length * breadth * height;
      }
  }
}
console.log(calculateVolume(4)(5)(6));

-> we have transformed the function calculateVolume(length, breadth, height) to a function calculateVolume , which takes in 
one parameter at a time.

Why is currying useful in JavaScript?
--------------------------------------
-> It helps us to create a higher-order function
-> It reduces the chances of error in our function by dividing it into multiple smaller functions that can handle one responsibility.
-> It is very useful in building modular and reusable code
-> It helps us to avoid passing the same variable multiple times
-> It makes the code more readable
*/


// Q18] What is DOM?

/*
-> DOM stands for Document Object Model.  
-> DOM is a programming interface for HTML and XML documents.
-> When a web page is loaded, the browser creates a Document Object Model of the page which is like a tree-like structure in its 
memory,where each HTML element becomes a node.
tree structure: window -> Document -> HTML -> 1.Head 2.Body
-> Js can talk to the DOM and ask fro specific element

-> Most Common methods for accessing DOM elements : 
1. getElementById
2. getElementByClassName 
3. getElementByTagName
4. querySelector
5. querySelectorAll

1. getElementById
-> This method allow you to select a single element by its unique id attribute
HTML:
<div id="myDiv">Hello</div>
JS: 
const myDiv = document.getElementById('myDiv')

2. getElementByClassName
-> This method allow you to select a multiple element by its class attribute
HTML:
<div class="myDiv">Hello</div>
<div class="myDiv">JS</div>
JS: 
const myDiv = document.getElementByClassName('myDiv')

3. getElementByTagName
-> This method allow you to select a multiple element by its specific Tag Name
HTML:
<h1>Heading</h1>
<div>Hello</div>
<div>JS</div>
JS: 
const myDiv = document.getElementByTagName('div')


*/


// Q19]  What do you mean by BOM?

/*
-> Browser Object Model is known as BOM. 
-> It allows users to interact with the browser. 
-> A browser's initial object is a window. As a result, you may call all of the window's functions directly or by referencing the 
window. The document object (of the HTML DOM) , history, screen, navigator, location, and other attributes are available in the 
window object.

*/

// Q20] What is memoization?


/*

what is Memoization ?
=====================

-> Memoization is a programming technique where we are storing the results of expensive function calls and returning the cached 
result when the same inputs given which helps prevent unnecessary renders.


what is cached result ?
=======================
A cached result refers to the stored output or value of a computation or function call that has been previously calculated and saved 
for future use. When a function is memoized that means  result of a specific set of inputs is stored in memory, and if subsequent 
requests for the same inputs occur we can retrieve the cached result instead of recalculating it. A cache is just a temporary data.


ex: 

function multiply(){
    const cache = {};
    return function (num){
        if(num in cache){
            console.log('Data coming from cache object');
            console.log(cache[num]);
        }else{
            cache[num] = num * num;
            console.log(cache[num]);
        }
    }
}

const res = multiply();

res(10);
res(10);
*/


// Q21] What is the difference between exec () and test () methods in javascript?

/*
-> test () and exec () are RegExp expression methods used in javascript.

exec () to search a string for a specific pattern, and if it finds it, it'll return the array which contain element, index at which
given world found and input string. if he does not return it'll return null.

code: 
const regex = /z/;
const str = 'Hello, world! Hello, world!';
console.log(regex.exec(str)); // null


test () to find a string for a specific pattern. It will return the Boolean value 'true' on finding otherwise return 'false'.

code: 
const regex = /z/;
const str = 'Hello, world!';
const isMatch = regex.test(str);
console.log(isMatch); // Outputs: true

*/

// Q22 ] Exception handling 

/*
JavaScript try...catch...finally Statement :
-------------------------------------------

-> The try, catch and finally blocks are used to handle exceptions.

Types of Errors: 

1. Compile-time errors

-> Compile-time errors are the errors that occurred during compilation time.
-> If we write the wrong syntax or semantics of any programming language, then the compile-time errors will be thrown by the compiler
->The compiler will not allow to run the program until all the errors are removed from the program.
ex . 
compile time errors like you spell variable name wrongly or you forget to end parenthesis, Undefined Variable, Incorrect Function Definition, Missing Import Statement, Incorrect Loop Syntax.




2. Runtime errors

-> The runtime errors are the errors that occur during the execution and after compilation.
-> These errors are not easy to detect as the compiler does not point to these errors.
ex. 
For example,
calling an invalid function or a variable, 
errors such as division by zero, 
determining the square root of a negative number.

Exception: 

-> These errors that occur during runtime are called exceptions
-> When an error occurs, an exception is thrown, and the normal flow of the program is interrupted
-> Exception handling allows developers to gracefully manage errors and prevent the program from crashing.



JavaScript try...catch Statement : 

-> Exception handling allows developers to gracefully manage errors and prevent the program from crashing.
-> Exception handling contain try - catch - finally
-> The try...catch statement is used to handle the exceptions. 
Its syntax is:
try {
    // body of try
} 
catch(error) {
    // body of catch  
}


try: 

-> The main code is inside the try block.
-> we write the code which might throw an exception inside try block .


catch : 

-> if any error occurs, it goes to the catch block.
-> we handle exception inside catch block.



Finally Block:

-> piece of code inside finally block runs regardless of whether an exception is thrown or not
-> it is used to close the resources which are opened at the starting of the program.


Throwing Exceptions:

You can throw an exception explicitly using the throw statement. This is often done in response to an error condition:

ex

function divide(x, y) {
  if (y === 0) {
    throw new Error("Cannot divide by zero");
  }
  return x / y;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.error(error.message);
}


Error Objects:
--------------

JavaScript provides built-in error objects like Error, SyntaxError, TypeError, etc., that can be used to represent different types 
of errors:

try {
  throw new SyntaxError("Invalid syntax");
} catch (error) {
  console.error(error.name + ": " + error.message);
}

Custom Errors:
--------------

Developers can create custom error objects by extending the built-in Error object or one of its subclasses:


class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

try {
  throw new CustomError("This is a custom error");
} catch (error) {
  console.error(error.name + ": " + error.message);
}

========================================================================================


final ex: 

const obj = {
  fname: "Adesh",
  lname: "Jadhav",
  get fullName() {
    return this.fname + ' ' + this.lname;
  },
  set fullName(val) {
    if (typeof val !== "string") throw new Error("Value is not a string");

    const parts = val.split(" ");

    if (parts.length !== 2) throw new Error("fname anf lname both imp");

    this.fname = parts[0];
    this.lname = parts[1];
  },
};


try{
    obj.fullName = 1;
}catch(e){
    console.log(e.message);
}finally{
    console.log('Closing all the resources..');
}


*/


// Q23] What is the rest parameter and spread operator and arguments ?

/*
Arguments : 
-----------
-> we have object called "arguments" which contain all arguments passed to function.
function fun (){
    let sum=0;
    for (let args of arguments){
        sum += args
    }
    console.log(typeof(arguments));  // object 
    console.log('First Element : ', arguments[0]);  // accessing element
    console.log(arguments);  
    console.log(arguments.length);  
    console.log(sum); 
}
fun(10, 20, 30, 50);


Rest parameters : 
-----------------
-> The rest parameter allows a function to accept an indefinite number of arguments as an array.
-> ex:
function add (...theArgs){ // theArgs is array and in js arrays are objet thats why typeof array is 'object'
    let sum = 0;
    for (let num of theArgs)
        sum +=num

    console.log(typeof theArgs);
    console.log('First Element: ', theArgs[0]); 
    console.log('Sum : ', sum);
}
add(10, 20, 30)


Spread Operator : 
-----------------
-> spread operator (...) allows us copy all or part of an existing array or object into another array 
or object.
-> The spread operator is often used in combination with destructuring
-> We can use the spread operator with objects and array.


ex. 1
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

ex. 2 
const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numbers;


ex. 3
const obj1 = {
  brand: 'Ford',
  color: 'red'
}
const obj2 = {
  type: 'car',
  color: 'yellow'
}
const myUpdatedVehicle = {...obj1, ...obj2}
-> color, was overwritten by the last object that was passed




*/


// Q24] Array vs Object Destructuring in JavaScript

/*
-> Destructuring means extracting the only elements we need from array or objects which contain n no of elements.
-> Then we can assign that values in separate variables.
-> We may have an array or object that we are working with, but we only need some of the items contained in these.

Destructing Arrays:: 

ex. 1
const arr = [10, 20, 30, 40, 50];
const [ten, , thirty, ...rest] = arr;  // rest is spread operator

ex. 2
function calculate(a, b){
  const add = a + b; // 20
  const sub = a - b; // 0
  const multiply = a * b;  // 100
  const div = a / b; // 1

  return [add, sub, multiply, div];
}
const [addition, , multiplication] = calculate(10, 10); // 20, 100




Destructuring Objects::
-> whichever property you need just write its name instead of leaving empty space like array.
ex. 1
const person = {
    id: 101,
    fname: 'Adesh',
    lname: 'Jadhav',
    age: 22,
}
const {id, lname} = person;  // 101, 'Jadhav'

ex. 2
const person = {
    id: 101,
    fname: 'Adesh',
    lname: 'Jadhav',
    age: 22,
    address: {
        village: 'Palgad', 
        city: 'Pune'
    }
}

function extractPerson ({id, lname, address: {city}}) {
    console.log('id: ' + id + '\nName: ' + lname + '\nCity: ' + city);
}



*/
























































































































































































