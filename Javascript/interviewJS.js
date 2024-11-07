//To Do List :
// 1. Garbage Collection in JavaScript

// Q0] What is a first class function in Javascript?
/*
-> In JavaScript, functions are considered first-class citizens, which means they can be treated like any other variable 
(e.g., a number, string, or object).

-> so we can assign a function to a variable using function expression syntax.
-> we can pass a function as a argument to another function (concept of callback).
-> we can return a function from another function (concept of closure)
-> we can store a function inside a data structure like array, object.
-> Functions can be higher order function.


-> we can store a function inside a data structure like array.
const arr = [
  function fun1() {
    console.log("FUnction from arr");
  },
  () => {
    console.log("Arrow function");
  },
  callMe,
];
function callMe() {
  console.log("Outside function");
}
arr[0]();
arr[1]();
arr[2]();

-> we can store a function inside a data structure like object.
const obj = {
  id: 101,
  fname: "Adesh",
  fun1: function () {
    console.log("Normal function 1", this.id);
  },
  fun2(){
    console.log("Normal function 2", this.fname);
  },
  fun3 : ()=>{
    console.log("Arrow function");
  },
  fun4 : outSide
};

function outSide (){
  console.log('Outside function');
}

obj.fun1();
obj.fun2();
obj.fun3();
obj.fun4();
*/

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

i. String - It represents a series of characters and is written with quotes. A string can be represented using a single or a double 
quote.
code: 
var str = "Adesh Jadhav"; //using double quotes
var str2 = 'John Doe'; //using single quotes
Note: In JavaScript, strings are immutable. This means that once a string is created, its value cannot be changed. 
Any operation that appears to modify a string actually creates a new string with the modified value, leaving the original string 
unchanged.
let fname ="Adesh";  
fname="Ram";



ii. Number - It represents a number and can be written with or without decimals.
code:
var x = 3; //without decimal
var y = 3.6; //with decimal


iii. BigInt - This data type is used to store numbers which are above the limitation of the Number data type. It can store large 
integers .
code: var bigInteger =  234567890123456789012345678901234567890n;

iv. Boolean - It represents a logical entity and can have only two values : true or false. 
(5 === 5) //returns true

v. Undefined - When a variable is declared but not assigned, it has the value of undefined and it’s type is also undefined. 
we can also set the value of a variable as undefined.
code: 
var x; // value of x is undefined
var y = undefined; // we can also set the value of a variable as undefined

vi. null - The null value represents the intentional absence of any object value.
code: let num = null;

vii. symbol:
-> It is a 'new data type' introduced in the 'ES6' version of javascript.
-> It is used to create 'unique identifiers'.
-> Symbols are 'immutable' (cannot be changed) and are 'unique'. 
-> You use the 'Symbol() function' to create a Symbol.
-> symbol is 'not a constructor'. so you can't use 'new keyword'.
-> Every symbol is guaranteed to be unique, even if it has the same 'description'.
This makes symbols useful for creating 'hidden or private properties'.

code 0 : 
const id = new Symbol("Hey");  // error	-> don't use new keyword

code 1:
const x = Symbol('hey');
console.log(x); // Symbol(hey)
console.log(x.description); // hey

code 2: 
Symbol("foo") === Symbol("foo"); // false

code 4: 
const id = Symbol();
const fname = Symbol();
console.log(id.description); // undefined
console.log(fname.description);  // undefined
const obj = {
  [id]: 101,
  [fname]: 'Adesh',
};
console.log(obj[id]);  // 101
console.log(obj[fname]);  // "Adesh"




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
const obj = {
  id: 101,
  fname: 'Adesh',
  fun1 : function(){
    console.log('Function 1');
  },
  fun2(){
    console.log('Function 2');
  },
  fun3: () =>{
    console.log('Function 3');
  }
}

// add property
obj.age = 22;
obj['number'] = 24;

// update property
obj.id = 102;

// delete property
delete obj.fname;

// read property
console.log(obj.id);
console.log(obj['id']);


ii. Array: 

-> Array store multiple elements which has different datatype inside a single variable.
code : const arr = [10, 'A', true, Symbol('Hey'), undefined, null, 46316685164514n, function fun1(){log("Hello")}, ];


iii. Function

-> inside a function we write block of code which we can run again and again without repeating it.
function sayMyName(fname){
    log(fname);
}

typeof of reference types :
console.log(typeof ['A', 'B']);         // object
console.log(typeof {1: 'A', 2: 'B'});   // object
console.log(typeof fun);                // function -> special kind of object

*/

//Q2] Explain Hoisting in javascript.

/*
JavaScript Hoisting: 
--------------------

-> Hoisting is JavaScript's 'default behavior' of moving all declarations(function declaration, variable declaration) to the top of 
the 'current scope' which can be 'current script' or the 'current function' and this done by automatically by 'js engine'.

-> In JavaScript,variables can be used before declaration.
-> but it is applicable to "var" keyword only, and not for "let" & "const".
-> if you talked about "let" keyword you have to first declare the let variable then and only then you can use it.
-> const keyword must be initialized at the time of declaration.
-> class declarations are not hoisted
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
Both are 'comparison operators'. The difference between both the operators is that “==” is used to compare values whereas, 
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
-> ES6 introduced two important new JavaScript keywords: 'let and const'.
-> These two keywords provide 'Block Scope' in JavaScript
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
-> Variables define within a JavaScript function, become LOCAL to the function
-> Local variables are created when a function starts, and deleted when the function is completed.
case 1: Variables defined inside a function are not accessible outside.
case 2: variable from outside of function can be accessible inside function and you can change its value inside a function.
case 3: if we pass variable define and initialized outside the function to inside a function through a 'parameter' and if you changed its 
value inside a function it will not affect the original variable, its value will be unaffected.

code : 
case 1: 
function fun(num) {
  let num = 10;
}
console.log(num);  //  NOT ACCESSIBLE

case 2: 
let num = 10;
function fun() {
  num++;
  console.log('Inside a function', num);  // 11
}
fun();
console.log('Outside a Function: ', num);  // 11

case 3: 
let num = 10;
function fun(num) {
  num++;
  console.log('Inside a function', num); // 11
}
fun(num);
console.log('Outside a Function: ', num); // 10



3. Global Scope: 
----------------
-> A variable declared outside a function, becomes GLOBAL.
-> Global variables can be accessed from anywhere in a JavaScript program
-> Global variables defined with the var keyword belong to the global object.
so don't define global variable with var keyword since it modify or overwrite the properties of global object.
if global object have the same name with global variable then global variable will overwrite the value of window object.
-> if we have local variable with the same name as global variable then function will give priority to the local variable which is 
define inside it.
-> Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.
ex .
function fun(){
  num = 10;
}
fun();
console.log(num);  // 10


Scope Chain: JavaScript engine also uses Scope to find variables. Let’s understand that using an example:
-> if a variable is not found in a current scope(scope can be block scope or function scope) then js engine will search that 
variable in its outer scope again if js engine not found that variable then he is going to search it in outer scope of outer scope.

ex. 
let y= 20;
function mainFunction(){
    let x = 10;
    function fun1(){
        console.log(x);
    }
    function fun2(){
        console.log(y);
    }
    fun1();
    fun2();
}
mainFunction();

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
Global variables defined with the var keyword belong to the global object.
so don't define global variable with var keyword since it modify or overwrite the properties of global object.
if global object have the same name with global variable then global variable will overwrite the value of window object.
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
console.log('4' + false);// '4false'



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
console.log(Number(''));            // 0


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
let num = 100;
console.log(num.toString());


iii. Convert to Boolean Explicitly
To convert other data types to a boolean, you can use Boolean().
code: 
console.log(Boolean(0));          // false
console.log(Boolean(1));          // true
console.log(Boolean(-1));         // true
console.log(Boolean(''));         // false
console.log(Boolean(' '));        // true
console.log(Boolean(true));       // true
console.log(Boolean(false));      // false
console.log(Boolean(undefined));  // false
console.log(Boolean(null));       // false
console.log(Boolean(NaN));        // false


Truthy and falsy: 
----------------
-> All values except false, 0, 0n, -0, “”, null, undefined, NaN are truthy values.
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

AND ( && ) operator - If both the values are truthy, always the second value is returned. 
If both are falsy then 1st value is returned.
If the first value is falsy then the first
value is returned or if the second value is falsy then the second value is returned.


console.log( 0 || "Adesh Pramod Jadhav");   // "Adesh Pramod Jadhav"
console.log( 10 || "Adesh Pramod Jadhav");  // 10
console.log( " " || "Adesh Pramod Jadhav"); // " "
console.log(0 || "");  // empty string is returned


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
-> NaN indicates a 'value' that is not a legal number
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
are passed by reference. Functions are references, but their behavior is more complex and involves both value and 
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

-> "this" references the 'object' that is executing the 'current function'.
-> so if that function is part of that object "this" reference that obj itself.
-> otherwise if that function is regular function which means it is not part of the object then "this" references to global object 
which is "window" object in the browser and "global" in node.
-> in case of constructor function, we all know that we create object using new operator. so new operator create a new empty object 
like this {} and set "this" to point newly created object.
-> 
without using strict mode the value of a "this" inside a standalone function refer to global object but using strict mode the 
value of a this keyword inside a standalone function will refer 'undefined', this is because
we don't have to accidently over right the value of global object
code: 
"use strict";
function fun(){
  console.log(this);
}
fun(); // undefined


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
Window:
Window {window: Window, self: Window, document: document, name: '', location: Location, …} 'a'
Window {window: Window, self: Window, document: document, name: '', location: Location, …} 'b'
Window {window: Window, self: Window, document: document, name: '', location: Location, …} 'c'
Node js: 
global 'a'
global 'b'
global 'c'





"this" from callback function of forEach refer to window/global object.
why this is happing .
-> because that callback function is inside a forEach method and not a inside a obj. so it acts as a regular function
and in case of regular function "this" refer to global object.
-> callback function of forEach is just a function which is passed as a argument to another function, it is not a part of obj.
so it don't have access to 'this' keyword.

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

->  you can use an arrow function, which does not have its own 'this context' and inherits it from the surrounding scope 
(in this case, the showTags method):
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

-> The call() method calls the function directly and sets value of "this" to the first argument passed to the call method and 
subsequent arguments are passed to the function as individual parameters.
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

-> The apply() method calls the function directly and sets value of 'this' to the first argument passed to the apply method
-> it takes an array of elements as the second argument, where each element of the array corresponds to an argument passed to the 
function.
-> In the apply method, we pass arguments in the form of an array this is only the primary difference between call and apply.


ex.1

ex.1
cz

ex.2
function addition(n1, n2, n3){
    console.log(this.operation, (n1+n2+n3));
}
addition.apply({operation: 'Addition'}, [10, 20, 30]);


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
const greetJohn = greet.bind({name: "John"}, "Hello");
greetJohn(); // Output: Hello John


*/

// Q13] What is an Immediately Invoked Function Expression(Self Invoking Functions ) in JavaScript?

/*
-> IIFE stands for "Immediately Invoked Function Expression." 
-> It is a JavaScript design pattern where a function is defined and executed 'immediately after its creation'. 
-> The primary purpose of IIFE is to create a new scope for variables to avoid polluting the global scope.
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
-> variables declare inside a function are local to that function and they are created when function starts its execution and 
they are destroyed when function completes its execution.
-> Closures is  ability of a 'outer function' to 'store the variables and its value, and functions' that are declared inside it,
instead of destroying them after execution, it saves them in the memory so that 'inner function can access them'.
-> we create a closure by returning 'inner function' from outer function.
ex: 
function outer() {
  let num = 0;
  function inner(){
    num++;
    console.log(num);
  }
  return inner;
}
const fun = outer();
fun();
fun();
fun();

-> Therefore outerFunction(), instead of destroying the value of 'num' after execution, saves the value in the memory for further 
reference. when we called innerFunction(), instead of starting num from 0 it starts from previous value.

In this example, `outerFunction()` returns `innerFunction`, creating a closure. Now, even after `outerFunction` has finished 
executing, the returned `innerFunction` still has access to `num`.

*/

// Q17] What is currying in JavaScript

/*

-> It is a 'technique', that 'transforms the function of multiple arguments' into 'several functions' which 
takes in one parameter at a time.

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
-> Since we are dividing a function into a several function, it makes a function easy to read, maintain, debug.
-> It makes the 'code more readable'
-> It helps us to create a 'higher-order function'.
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

// Q22 ] Exception handling

/*
JavaScript try...catch...finally Statement :
-------------------------------------------

-> The try, catch and finally blocks are used to handle exceptions.

Types of Errors: 

1. Compile-time errors

-> Compile-time errors are the errors that occurred during compilation time.
-> If we write the wrong syntax or semantics of any programming language, then the compile-time errors will be thrown by the 
compiler
->The compiler will not allow to run the program until all the errors are removed from the program.
ex . 
compile time errors like you spell variable name wrongly or you forget to end parenthesis, Undefined Variable, Incorrect Function 
Definition, Missing Import Statement, Incorrect Loop Syntax.


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
     body of try
} 
catch(error) {
    body of catch  
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
-> we have 'object' called "arguments" which 'contain all arguments' passed to function.
-> 'arguments' is object not array, because its give false for Array.isArray().
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



Note: just log the arguments value in regular and arrow function ans see the difference.
the behaviour of arguments object is different for regular and arrow function.
-> In regular functions, arguments is a built-in object that contains all the arguments passed to the function.
-> Arrow functions do not have their own arguments object. When you try to access arguments in an arrow function, it will reference the arguments object from the 
surrounding scope (parent), which in your case seems to be the Node.js module scope (which is why you're seeing information about the module and require).
-> Fix for Arrow Functions:To get similar behavior in an arrow function, you can use the rest parameter syntax (...args) to explicitly collect all the arguments 
passed to the function:


const fun = (...args) => {
  console.log(args);  // `args` will be an array of the passed arguments
}

fun(10, 20, 30);  // Output: [10, 20, 30]





Rest parameters : 
-----------------
-> The rest parameter allows a function to accept an indefinite number of arguments as an array.
-> ex:
function add (...theArgs){ // theArgs is array and in js arrays are objet thats why typeof array is 'object'
    let sum = 0;
    for (let num of theArgs)
        sum +=num

    console.log(Array.isArray(theArgs));  // true
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

// Q24] Array and Object Destructuring in JavaScript

/*
-> Destructuring means extracting the only elements we need from array or objects which contain n no of elements.
-> Then we can assign that values in separate variables.
-> We may have an array or object that we are working with, but we only need some of the items contained in these.

Destructing Arrays:: 

ex. 1
const arr = [10, 20, 30, 40, 50];
const [ , , thirty, ...rest] = arr;  // rest is spread operator and it is array

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

// Q25] Different Ways to Create Objects
/*
You can create an object in three different ways:

1. Using object literal -> {}
2. By creating instance of Object directly ->  new Object({})
3. By using constructor function -> Person
4. factory method 
5. Using the Object.create() method
6. Using es6 classes


Example 1: Using object literal -> {}
-------------------------------------
-> syntax =>  const obj = {}
-> const x = {}  ==> converted to => const x = new Object({id: 101, fname: 'Adesh'});
-> we used 'built in constructor function' called 'Object()'

const person = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function() {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
};

console.log(typeof person); // object
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);
person['address'] = {city: 'pune', village: 'Palgad'};  // adding new property
person.lname = 'Jadhav'; // adding a new property 
delete obj.name;  // delete property
console.log(person);


Example 2: By creating instance of Object directly ->  new Object({})
---------------------------------------------------------------------
-> 'built in constructor function' called 'Object()'
-> syntax : const objectName = new Object();
const obj = new Object({
  fname: 'Adesh',
  age: 22
});
console.log(obj.fname);



Example 3: Create an object using Constructor Function
------------------------------------------------------
-> job of constructor function is to construct or create an object.
-> new keyword creates empty js object. next "this" keyword points to newly created object. and insert all properties inside that 
newly created object. finally "new" keyword return newly created object from constructor function.

function Person(fname, age){
    this.fname = fname,
    this.age = age,
    this.intro = function(){
        console.log(`Name: ${fname} Age: ${age}`);
    }
}

const p1 = new Person("Adesh", 22)
p1.intro()
console.log(p1.fname);


Example 4: Create an object using factory Function
---------------------------------------------------
-> just like factory producing products this factory function produce objects
-> The Factory Function is similar to constructor functions, but instead of using 'new' keyword to create an object.
-> factory function do not require the use of the ‘this‘ keyword for accessing inner values
factory functions simply creates an object and returns it.
-> If we have complex logic, and we have to create multiple objects again and again that have the same logic, we can write the logic 
once in a function and use that function as a factory to create our objects. It’s exactly the same as a real-world factory producing 
products.
-> in factory function we used 'built in constructor function' called 'Object()' to create objects because we used object literal 
syntax(eg. const x = {}).
eg. const x = {}  // this line converted to -> const x = new Object();

function createPerson(fname, age) {
    return {
        id: 101,
        fname, // if our key and value are same then we can make our code shorter  by writing only key
        age,
        intro(){
            console.log(`Name: ${this.fname} Age: ${this.age}`);
        }
    }
}

const person1 = createPerson('Adesh', 22);
person1.intro();
const person2 = createPerson('Akshay', 23);
person2.intro();



Example 5: Creating object with Object.create() method:
-------------------------------------------------------

-> The Object.create() method creates a new object, using an existing object as the prototype of the newly created object. 
Example:

const parentObj = { 
    fname: 'Adesh',
    lname: 'Jadhav',
    age: 22,
    intro(){
        console.log(`fname: ${this.fname} lname: ${this.lname} age: ${this.age}`);
    }
}; 

const childObj = Object.create(parentObj); 
console.log(childObj);  // return empty array {}
childObj['fname'] = 'Ram'; 
childObj.intro();  // fname: Ram lname: Jadhav age: 22  -> js engine will search property in a child if it present then it will take from their but if it absent then js engine will search for that property in parent obj.


Example 6 : Using es6 classes: 

-> ES6 supports class concept 
-> object can be created using class 
-> classes are nothing but syntactic sugars for 'constructor functions'.
-> They provide a new way of declaring constructor functions in javascript. 
-> JavaScript Classes are templates for JavaScript Objects.
-> classes are not hoisted. A class cannot be used before it is declared.
-> A class can inherit properties and methods from other classes by using the extend keyword.
-> All classes must follow the strict mode(‘use strict’) of javascript. An error will be thrown if the strict mode rules are not 
followed.
-> Classes we have in js are not classes like we have inside c#., java
-> The constructor method is called automatically when a new object is created. It is used to initialize object properties
If you do not define a constructor method, JavaScript will add an empty constructor method.
-> typeof Classes are 'function', they are constructor functions. typeof constructor function is also function.

class Person {
    constructor(fname, age){
        this.fname =fname;
        this.age =age;
    }

    intro(){
        console.log(`Name : ${this.fname} age: ${this.age}`);
    }
}
const p1 = new Person('Adesh', 22); //The example above uses the Person class to create two Person objects





*/

// Q26] What are arrow functions?

/*
-> Arrow functions were introduced in the ES6 version of javascript
-> arrow functions provide 'shorter syntax' for declaring functions
-> Arrow functions can only be used as a 'function expression'.
-> Arrow functions are declared without the function keyword
-> 'Arrow functions are not hoisted'. They must be defined before they are used.
-> If there is only one returning expression then we don’t need to use the return keyword Also, for functions having just one line 
of code, curly braces { } can be omitted.
-> If the function takes only one argument, then parenthesis () around the parameter can be omitted.
eg. const arrowAdd = (a,b) => a + b;
eg. const fun = num => num * num ;  


-> Arrow functions do not have their own this. They are not well suited for defining object methods.
-> they inherit "this" value from containing function.

const person1 = {
    fname: 'Adesh',
    age: 22,
    tags: ['A', 'B', 'C'],
    intro(){
        this.tags.forEach((tag)=> {
            console.log(this, tag);
        })        
    }
}

const person2 = {
    fname: 'Adesh',
    age: 22,
    tags: ['A', 'B', 'C'],
    intro(){
        this.tags.forEach(function (tag){
            console.log(this, tag);
        })        
    }
}
*/

// Q27] Explain difference between synchronous and asynchronous architecture and different ways of handling asynchronous code ?

// refer Asynchronous javascript folder

// Q28] classes:

/*

-> ES6 supports class concept 
-> classes are new way to create a objects.
-> classes are nothing but syntactic sugars for constructor functions. They provide a new way of declaring constructor functions in 
javascript.
-> 'classes are not hoisted'. A class cannot be used before it is declared.
-> Classes are a template or blueprint for creating objects
-> The body of a class is executed in strict mode even without the "use strict" directive. means you don't have to define "use strict"
explicitly.
-> Classes we have in js are not classes like we have inside c#., java
-> typeof Classes are 'function', they are constructor functions. typeof constructor function is also function.
-> classes are examples of encapsulation because class contain data(variables) and code(functions) and wrap them in a single unit.
-> Classes in JS are built on prototypes 
-> Classes are in fact "special functions", and just as you can define function expressions and function declarations, a class can 
be defined in two ways: a class expression or a class declaration.

-> class Declaration syntax
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

-> class Expression syntax: the class is anonymous but assigned to a variable
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// class Expression syntax: the class has its own name
const Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};



Instance Methods / class Methods::
-> instance methods are methods that are associated with an instance of a class.
-> instance methods are also called Class Methods.
-> Syntax
class ClassName {
  constructor() { ... }
  method_1() { ... }
}

instance variable: 
->  They are variables declared within a class but outside of any methods.
-> Its a duty of a programmer to initialize instance variable.
-> If you don't initialize instance variable then value will be undefined.
-> There are several way to initialize instance variables. like code 3
-> you can use constructor to initialize the instance variables.

code 1: 
class Person{
  // instance variable
  fname;   
  age;
  display(){
    console.log(this.fname, this.age);
  }
}
const obj1 = new Person();
obj1.display()  // undefined undefined

code 2: 
class Person{
  // instance variable
  fname = 'Adesh; 
  age = 22;
  display(){
    console.log(this.fname, this.age);
  }
}
const obj1 = new Person();
obj1.display()  // Adesh 22

code 3: 
class Person{
  fname;   
  age;
  display(){
    console.log(this.fname, this.age);
  }
}
const obj1 = new Person();
obj1.fname = 'Adesh';
obj1.age = 22;
obj1.display()  // Adesh 22

code 4:
class Person{
  fname;   // it ok if you did not write like this, you can omit this part and only write constructor
  age;
  constructor(fname, age){
    this.fname = fname;
    this.age = age;
  }

  display(){
    console.log(this.fname, this.age);
  }
}
const obj1 = new Person('Adesh', 22);
obj1.display()  // Adesh 22

Static Methods::
-> Static methods are used to create utility functions
-> we are not working with particular object.
In JavaScript, when you define a static method in a class using the static keyword, it means that the method is associated with the 
class itself rather than with instances of the class. As a result, static methods cannot access or interact with instance-specific 
properties or methods.
-> They can be useful for tasks that are related to the class rather than to a particular instance.
-> Static methods are often used for utility functions that don't depend on the state of a particular instance but are relevant to 
the class as a whole.
-> Math is a class and it have static methods like rounds(), floor(), sqrt() etc. we are accessing these methods without creating 
object of Math class like "new Math()". so round(), floor() are utility functions.
-> In computer science and programming, a utility function generally refers to a function that provides common, reusable functionality 
that is not tied to a specific object or context. Utility functions are often used to perform tasks that are needed across different
parts of a program. In JavaScript, utility functions can cover a wide range of functionalities.
code 1: Example of a utility class with static method
class Utility {
  static generateUniqueId() {
    // Logic to generate a unique ID
    return Math.random().toString(36).substring(2);
  }
  static capitalizeFirstLetter(str) {
    // Example: Capitalize the first letter of a string
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  function square(number) {
    // Example: Calculate the square of a number
    return number * number;
  }
  static isValidEmail(email) {
    // Example: Check if a given email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  static arrayContainsElement(arr, element) {
    // Example: Check if an array contains a specific element
    return arr.includes(element);
  }
  static formatDate(date) {
    // Example: Format a date as "YYYY-MM-DD"
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  static parse(jsonString) {
    const data = JSON.parse(jsonString);
    return new Person(data.fname, data.age);
  }  //const obj1 = Utility.parse('{"fname": "Adesh", "age": 22}');
}
-> These examples demonstrate different types of utility functions, and their purpose is to provide commonly needed functionality 
that can be reused across various parts of your JavaScript code.




this in class::
===============

-> Inside a instance method "this" refers to the instance itself. 
code 1:
class Person {
  constructor(fname, age) {
    this.fname = fname;
    this.age = age;
  }
  display() {
    console.log(this);
  }
}
const obj1 = new Person("Adesh", 22);
const obj2 = new Person("Akshay", 23);
obj1.display(); //  Person { fname: 'Adesh', age: 22 }
obj2.display(); //  Person { fname: 'Akshay', age: 23 }

-> inside a static method, the 'this' keyword refers to the class itself, not an instance. 
Static methods cannot access instance-specific properties or methods.
code 0:
class Person{
  constructor(fname, age){
    this.fname = fname;
    this.age = age;
  }
  static display(){
    console.log(this);
  }
}
Person.display();

output: 
class Person{
  constructor(fname, age){
    this.fname = fname;
    this.age = age;
  }

  static display(){
    console.log(this);
  }
}

code 1: 
class MyClass {
  constructor(fname) {
    this.fname = fname;
  }
  static staticMethod() {
    console.log(this.fname); // This will result in an error -> undefined
  }
}
const instance = new MyClass(42);
MyClass.staticMethod(); // This will result in an error -> undefined


code 2: 
class Person {
  constructor(fname, age){
    this.fname = fname;
    this.age = age;
  }
  static callMe(obj){
    console.log(obj.fname, obj.age);
  }
}
const obj = new Person('Adesh', 22);
Person.callMe(obj);  //Adesh 22

explanation: 
-> Even though it's a static method, it accepts an argument (obj) which is an instance of the Person class. This is allowed 
because static methods in JavaScript can still receive arguments, including instances of the class.
-> So, while static methods cannot directly access instance-specific properties or methods using 'this' keyword, they can still 
receive instances as arguments and work with the properties of those instances passed to them. This allows for some flexibility 
in using static methods with instances if needed.



how to  make members of a class private in javascript?
=======================================================
1. Using WeakMap for Private Members (ES6 and later):
2. Using Symbols (ES6 and later):


1. Using WeakMap for Private Members (ES6 and later):
-> 




2. Using Symbols (ES6 and later): 
-> Every symbol is guaranteed to be unique, even if it has the same description.This makes symbols useful for creating hidden 
or private properties.
-> every time we call symbol function we get a new unique value/symbol. and we can use this unique value/symbol as a property name
for an object.
*how to make method private: 
Step 1: add another symbol like : 
const _intro = Symbol();
Step 2: so instead of using name like intro we use symbol. In ES6 we have new feature called computed properties name. 
so we can add brackets, and inside this bracket we add an expression. when expression is evaluated the resulting value will be 
used as the name of the property or method. so here we add [_intro], so this expression or symbol will be evaluated and we will get 
unique value or unique identifier and because we put this inside a [] that unique identifier will be used as thee name of the method

code: 1
const _id = Symbol();
const _fname = Symbol();
const _draw = Symbol();
class Person {
  constructor(id, fname) {
    this[_id] = id; // this._id = id;
    this[_fname] = fname; // this._name = name;
  }
  [_draw]() {
    console.log(this[_id], this[_fname]);
    // Perform other operations using this[_id] and this[_fname]
  }
}
const obj = new Person(101, "Adesh");
console.log(obj); // Person { [Symbol()]: 101, [Symbol()]: 'Adesh' }
console.log(obj[_id]); // 101
console.log(obj[_fname]); // 'Adesh'
console.log(obj._id);  // undefined   <- when we say properties are not visible outside, this is what we are going to say interviewer 
console.log(obj._fname); // undefined <--This is we are going to show interviewer
obj[_draw](); // Logs: 101 Adesh
// Using Object.getOwnPropertySymbols to access properties
const keys = Object.getOwnPropertySymbols(obj);
console.log(obj[keys[0]]); // 101
console.log(obj[keys[1]]); // 'Adesh'













Class Inheritance:
-> A class can inherit properties and methods from parent class by using the 'extends' keyword.
-> in order to access all properties of parent class we must have to define super() method inside a child class constructor,
if you don't define super() then this error will occur : "ReferenceError: Must call super constructor in derived class before 
accessing 'this' or returning from derived constructor".
-> To access super class methods inside child class use 'super' keyword. but to access super class variables use this keyword. 
eg. 
super.parentMethod();
this.parentVariable;   -> Note you can't access parent class variables with super keyword. eg.super.parentVariable > error.

The Constructor Method::
-> constructor must have exact name as 'constructor'.
-> The constructor method is called automatically when a new object is created. It is used to initialize object properties
If you do not define a constructor method, JavaScript will add an empty constructor method.


class Parent {
    constructor(fname){
        this.fname =fname;
    }
    get firstName (){
        return this.fname;
    }
}
class Child extends Parent{
    constructor(fname, age){
        super(fname);
        this.age = age;
    }
    bioData(){
        console.log(`Name : ${this.firstName}  Age: ${this.age}`);
    }
}
const obj1 = new Child('Adesh', 22);
obj1.bioData()


Method overriding: 
-> Javascript support method overriding.
-> method overriding occurs when a subclass (child class) has the same method as the parent class. 
class Person{
    constructor(fname){
        this.fname = fname;
    }
    display(){
        console.log('Parent class Display method');
    }
}
class Child extends Person{
    constructor(fname, age){
        super(fname)
        this.age = age;
    }
    display(){
        super.display();
        console.log('Child class Display Method');
    }
}
const p1 = new Child('Adesh', 22);
p1.display();


Function overloading: 
-> JavaScript Does not support Function Overloading
-> Function overloading is a where two or more functions can have the same name but different parameters
-> When you define multiple functions that have the same name, the last one defined will override all the previously defined ones 
and every time when you invoke a function, the last defined one will get executed.

function fun(n1){
  console.log('1st');
}
function fun(n1, n2){
  console.log('2nd');
}
fun(10);  //output: 2nd



Getters and Setters: 
-> JavaScript Accessors (Getters and Setters)
-> ECMAScript 5 (ES5 2009) introduced Getter and Setters
-> Classes also allows you to use getters and setters.
-> It can be smart to use getters and setters for your properties, especially if you want to do something special with the value 
before returning them, or before you set them.
-> To add getters and setters in the class, use the get and set keywords.
-> even if the getter is a method, you do not use parentheses when you want to get the property value
-> The name of the getter/setter method cannot be the same as the name of the property,
-> Many programmers use an underscore character _ before the property name to separate the getter/setter from the actual property
like _carName and get carName

code 1: in objects: 
const obj = {
  tags: ["A", "B", "C"],
  get display() {
    if (this.tags.length === 0) {
      return undefined;
    } else {
      return this.tags[this.tags.length - 1];
    }
  },
};
console.log(obj.display);


code 2: In classes
class Person {
  _msg = "hello world";
  get msg() {
    return this._msg;
  }
  set msg(x) {
    this._msg = `hello ${x}`;
  }
}
const obj = new Person();
console.log(obj.msg); // "hello world"
obj.msg = "Adesh";
console.log(obj.msg); // "hello Adesh"

*/

// Q29] JSON

/*
-> JSON stands for 'JavaScript Object Notation'
-> JSON is a 'text format' for storing and transporting data.
-> A common use of JSON is to exchange data to/from a web server.
-> JSON is language independent.
-> When sending data to a web server, the data has to be a string.

Two methods are popular in JSON.
1. JSON.parse()
2. JSON.stringify()

1. JSON.parse()
-> The JSON.parse() method parses a 'JSON string' and returns a 'JavaScript object'.
JSON.parse('{"firstName":"John", "lastName":"Doe"}');  // o./p=> { firstName: 'John', lastName: 'Doe' }
JSON.parse('["John", "Peter", "Sally", "Jane"]'); // ["John", "Peter", "Sally", "Jane"]
JSON.parse('"2006-01-02T15:04:05.000Z"'); // 2006-01-02T15:04:05.000Z

2. JSON.stringify()
-> Convert a 'JavaScript object', "date", "array" into a 'JSON string'.
JSON.stringify({ name: "John", age: 30, city: "New York" });  // o/p=> {"name":"John","age":30,"city":"New York"} 
JSON.stringify(["John", "Peter", "Sally", "Jane"]); // '["John", "Peter", "Sally", "Jane"]'
JSON.stringify(new Date());   // '"2024-01-02T15:04:05.000Z"'
Stringify Functions: 
The JSON.stringify() function will remove any functions from a JavaScript object, both the key and the value:
to add function inside a 'JSON string()' you have to convert it into string separately using 'toString()'
code:
const obj = {name: "John", age: function () {return 30;}, city: "New York"};
obj.age = obj.age.toString();
const myJSON = JSON.stringify(obj);

*/
