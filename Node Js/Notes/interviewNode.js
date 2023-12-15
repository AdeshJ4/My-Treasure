// Q1] What is Node.js and how it works also explain its architecture?
/*
-> 
Node: 
=====
->Node is not a programming language nor its a framework it is just a open source, cross platform runtime environment for 
executing js code outside a browser.
-> we use Node js to build backend services also call APIs.
-> NodeJS is an asynchronous event-driven JavaScript runtime environment designed to build scalable network applications.

Node Architecture: 
==================

-> up to 2009 only way to executing js code was inside a browser.  A browser provide a runtime environment for js code.
-> so every browser have "JS Engine" that takes our js code and converts it  into machine code that computer understand.
-> Microsoft edge uses 'chakra', firefox uses 'SpiderMonkey' and chrome uses 'V8' and because of this verities of "JS ENGINE" 
sometimes the js code can behave differently browser to browser.
->In 2009,Ryan Dahl the creator of node came up with brilliant idea. He took google v8 engine which is the fastest js engine out 
there and embedded it inside a c++ program and called that  program  'Node.exe' means Node. 
-> so similar to browser, Node became runtime environment for js code. 
-> Node contain js engine, with certain objects which provides an environment for executing our js code.
-> for ex we don't have document object like "document.getElementById('')" in a node instead we have different objects that gives us 
more interesting capabilities. for ex we can work with file system like "fs.readFile()" listen for request like "http.createServer()" 
in a given port. and so on we can't do this kind of stuff inside a browser.
-> In summary Node is a program that contain chrome v8 engine plus some additional modules which gave us some capabilities not 
available inside a browser.
-> we can work with file system , network and so on..
-> Both  chrome and node share same V8 engine but they provide different runtime environment for js code to run.


How synchronous code and asynchronous code execute in node js ?
===============================================================

Code execution in node js : 

On the left we have V8 engine which consists of two parts: 
1. memory heap
2. Call Stack

-> whenever we declare a variable or function memory is allocated on the heap.
-> When you executed code function is pushed to the call stack and when the function returned it popped out call stack.

libuv library: 

-> on the right side we have libuv library.
-> libuv is a multi-platform C library
-> whenever you execute async method it is off loaded to the libuv.
-> Libuv provides the event loop that allows Node.js to perform non-blocking I/O operations asynchronously.
-> 'Event loop' is a C program and is part of libuv.
-> The event loop is at the core of Node.js, managing and dispatching events and tasks and callbacks from asynchronous 
operations.
-> libuv then run the task using 'native async mechanism' of operating system.
-> and if that is not possible it will utilized its thread pool to run that task ensuring the main thread is not block
(main thread resides in call stack).

How V8 engine and libuv are used by node 
========================================

1. Synchronous code Execution in Node js : 

-> Synchronous code is executed in a sequential and blocking manner.
-> it means first task/operation completes its execution then and only then 2nd task/operation will start its execution.
-> it means first task/operation is blocking the execution of 2nd task/operation
-> other thing to notice is that the order of execution in sequential that means It follows a natural flow of execution which is 
from top to bottom, and each line of code is executed one after the other.
ex> 
1. console.log('First')
1. console.log('Second')
1. console.log('Third')

Step 1 : The main thread of execution always starts in the global() scope. global() function is pushed to the stack.
Step 2 : Then on line 1 we have log('First') statement. The log statement is pushed to the stack. 'First' is log to the console. 
The log statement is popped out of stack.
Step 3 : Execution comes to line two. Second log statement is pushed on the stack. Second is log tot he console and log popped out 
of stack after Execution
Step 4 : Finally execution comes on line three. Third log statement is pushed on the stack. 'Third' is log to the console and log 
popped out of stack after Execution
Step 5 : No code is left to execute so global() will be popped from stack.


Asynchronous Code Execution in Node js: 
=======================================
-> Asynchronous here refers to all those functions in JavaScript that are processed in the background without blocking any other 
request.
-> Asynchronous code is executed in a simultaneously, parallelly and non blocking manner.
-> Asynchronous programming is a technique that enables your program to start a long-running task and still be able to be responsive 
to other tasks while that long running task runs, rather than having to wait until that long running task has finished. 
Once that long running task has finished, your program is presented with the result.
-> you can handle multiple tasks simultaneously, parallelly rather than executing them one after the other. 
This is especially important in scenarios where tasks, such as fetching data from a server or reading a file, may take some time. 
this doesn't block the execution of the program. 
-> callbacks, promises, async-await handle the result of these asynchronous operations.

1. console.log('First);
2. fs.readFile('demo.txt',()=>{
3.     console.log('Second);
4. });
5. console.log('Third);


Step 1 : The main thread of execution always starts in the global() scope. global() function is pushed to the stack.
Step 2 : Then on line 1 we have log('First') statement. The log statement is pushed to the stack. 'First' is log to the console. 
The log statement is popped out of stack.
Step 3 : Execution comes to line two. The readFile() method gets pushed to the stack. readFile() is async operation thats why it 
will be off loaded to 'libuv' section only callback function present inside readFile() will be handed over to libuv. 
readFile() without callback will remain inside call stack section. like : fs.readFile();
Step 4 : Javascript then simply pops out fs.readFile() method from the call stack because its job is done as far as executing of 
line 2 is concerned. remember we still have callback function of readFile() inside libuv section. In the background libuv starts 
read file content on a 'separate thread'.
Step 5 : Now flow of execution moves to line 5. last log statement is pushed on the stack. 'Third' is log to the console and log 
popped out of stack after Execution.
Step 6 : Now there is no user written code in the call stack. so call stack is empty. At some point the file read task completed in 
the thread pool. The associate call back function is now pushed to the call stack. Inside the callback function we have log statement
which is pushed to call stack. Second is log to the statement and the log is pop out. as there are no more code left in callback, 
the callback also pop out from stack. 
Step 7 : Now no more code to run so global() also pop out.
Step 8 : The output will be 'First', 'Second', 'Third'. 

*/


// Q2] Why Node.js is single-threaded ?
/*

-> Node applications are Asynchronous by default.
-> In node we have a single thread to handle all requests.
-> A single-threaded approach consumes less memory than multi-threading, making Node.js suitable for lightweight, memory-efficient 
applications and microservices.
-> we use single thread in Node js To maximize efficiency in handling I/O operations.
-> This allows it to handle many concurrent requests without the overhead of managing multiple threads. 

list of I/O operations: 
-> In Node.js, I/O (Input/Output) operations are how you handle data exchange with external entities, such as files (CRUD operations)
, networks(creating a http server), databases(executing queries), and more
*/


// Q3] How is Node.js better than other frameworks most popularly used?

/*
-> Node applications are Asynchronous by default 
-> Node.js provides simplicity in development because of its non-blocking I/O asynchronous operations and event-based model results 
in short response time and concurrent processing, unlike other frameworks where developers have to use thread management. 
-> It runs on a chrome v8 engine which is written in c++ and is highly performant with constant improvement. 
-> Also since we will use Javascript in both the frontend and backend the development will be much faster. 
-> And at last, there are sample libraries so that we don’t need to write code form scratch
-> It has a large ecosystem of open source libraries.
-> it is used in production in big companies like paypal, uber, netflix, walmart

*/


// Q4] If Node.js is single threaded then how does it handle concurrency?
/*
-> because of libuv library and its event loop.
-> While Node.js itself is single-threaded, it leverages(borrow) the libuv library to handle asynchronous I/O operations.
-> Main thread/Only thread of node js is working on call stack. if we got any asynchronous tasks to execute then we move that tasks to
libuv library. libuv library will execute that task using 'native async mechanism' of the operating system. if it is not possible then 
it uses its own thread pool to execute that tasks.
Libuv itself is multi-threaded and provides an event loop to handle asynchronous events.
-> 
Thread Pool:
-> The thread pool is a part of libuv that handles certain tasks asynchronously in the background using multiple threads
-> Because of this our main and only one thread of node is not block.

*/



// Q5] Explain Event loop, Event Queue, call stack

/*
Event Queue:
-> The event queue is a data structure that holds tasks or events that need to be processed.
-> Tasks can include callbacks, promises, or other asynchronous operations.
-> It acts as a waiting area for tasks that are triggered by various events, such as user interactions, I/O operations, or timers.
-> Tasks in the event queue are processed in the order they are added (FIFO - First In, First Out - the first item that is added to 
a queue is the first one to be removed).


Event Loop: 

-> 'Event loop' is a C program and is part of libuv library.
-> The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded
-> An event loop is an loop, which waits for tasks, executes them, and then sleeps until it receives more tasks.
-> The event loop is like a manager that checks the event queue and decides which task to execute next.
-> The event loop constantly checks whether the call stack is empty and executes tasks one by one
-> The event loop executes tasks from the event queue only when the call stack is empty i.e. there is no ongoing task.
-> The event loop follows a cycle: it checks if the call stack is empty, and if so, it takes tasks from the event queue and adds 
them to the call stack for execution.
-> The event loop processes tasks in the order they were added to the queue. 
This follows the FIFO principle. (First In, First Out - the first item that is added to a queue is the first one to be removed).
-> The event loop allows for non-blocking, asynchronous execution in a single-threaded environment.
-> It prevents the program from getting stuck on one task, enabling it to handle multiple tasks concurrently.


call Stack : 

-> The call stack is a data structure that keeps track of the currently executing functions. When a function is called, 
it is pushed to the call stack and popped off when completed.
-> The call stack in Node.js follows the Last In, First Out (LIFO) order. This means that the most recently added function call 
in the stack is the first one to be executed and removed when the function completes.
-> Whenever a function is called, a new frame is added to the top of the call stack.
-> frame contains information about the function call, including the function's parameters and local variables.
-> As functions are executed, their frames are pushed onto the call stack. When a function completes, its frame is popped off the 
stack.

ex: 
function f1() {
    console.log('Hi by f1!');
}
function f2() {
    f1();
    console.log('Hi by f2!');
}
f2();

The call stack would look like:
------------------------------

-> suppose we have two functions f1() and f2(). we called f1() inside f2(). 
Step 1: When the code loads in memory, the 'global execution context' gets pushed in the stack.
Step 2: The f2() function gets called, and the 'execution context of f2()' gets pushed into the stack
Step 3: The execution of f2() starts and during its execution, the f1() function gets called inside the f2() function. 
This causes the execution context of f1() to get pushed in the call stack.
Step 4: Now the f1() function starts executing.
Step 5: When f1() completes its execution it will be popped from the stack.
Step 6: Now remaining code of f2() gets executed and after that f2() will be popped from the stack.
Step 7: Now left is only 'global execution context' which at the end will be popped out.
global execution context: 

The global execution context is the outermost or top-level context in the JavaScript execution environment. When a JavaScript 
program starts running, it creates a global execution context, which includes the following key components like Global Object, this etc.







*/



// Q6] How do you manage packages in your node.js project?

/*
-> We manage packages using npm or yarn. Both provide almost all libraries of javascript
-> NPM Stands for "Node package manager".
-> We use NPM to download  3rd-party packages from NPM registry.
->  NPM registry have millions of npm packages that you can download according to your application need.
-> popular npm packages are express, mongoose, nodemon, dotenv, bcrypt, helmet, joi

Install a package
-> npm i <packageName>
Install a specific version of a package 
-> npm i <packageName>@<version>
Install a package as a development dependency
-> npm i <packageName> -dev
Uninstall a package
-> npm un <packageName>
List installed packages 
-> npm list —depth=0
View outdated packages
-> npm outdated
Update packages 
-> npm update


Popular NPM Package: 

1. nodemon
Nodemon is used in Node.js projects to automatically restart the server whenever code changes are detected. This makes development 
more efficient by saving you the time and effort of manually stopping and restarting the server every time you make code modifications.
if you don't use nodemon then you have to manually restart the server by using command "node server.js".

2. express 
Express is used in Node.js for building web applications and APIs. It simplifies the process of handling routes, requests, and 
responses, making it easier and faster to create web services and applications.


Package.json: 
-------------
-> Every Node application has a package.json file. It contains metadata about the project, such as the project's name, version, 
description, entry point, scripts, dependencies, and other configuration settings.
-> Developers typically manually edit this file to add or update dependencies, specify scripts, and manage project information
 

package-lock.json: 
------------------
-> package-lock.json is used to locking the exact versions of dependencies and their dependencies
-> This file is generated and updated automatically by npm when installing or updating packages. It is used to lock the exact 
versions of dependencies installed in the project, ensuring reproducibility and consistent installations across different 
environments.
-> It helps prevent "dependency hell" scenarios where different developers or environments end up with slightly different versions 
of dependencies, potentially leading to compatibility issues.


*/



// Q7] What are some commonly used timing features of Node.js?
/*
1. setTimeout/clearTimeout:
clearTimeout: clearTimeout function is used to cancel a timeout previously established by the setTimeout function
const timer = setTimeout(()=> {
    console.log('SetTimeout')
}, 2000)
clearTimeout(timer);

2. setInterval/clearInterval – This is used to run a code block multiple times.
const timer = setInterval(()=> {
    console.log('setInterval');
}, 2000);
clearInterval(timer);


3. setImmediate/clearImmediate: 
->  It's important to note that setImmediate is specific to Node.js and is not a part of the standard JavaScript language.
->  It schedule a callback to be executed as soon as possible, right after the current event loop cycle.
-> setImmediate() function is more faster than setTimeout() function.
const timer = setImmediate(()=> {
    console.log('I am fast as fuck boy');
},2000);
clearImmediate(timer);


4. process.nextTick: 
-> process.nextTick is specific to Node.js and is not part of the standard JavaScript language
-> process.nextTick specifically queues callbacks to be executed in the current phase of the event loop.
-> it is faster than setImmediate()
const timer = process.nextTick(()=>{
    console.log('process.nextTick()');
}, 2000)

*/


// Q8] What is fork in node JS?
/*

-> A fork in general is used to create 'child processes' that run Node.js scripts.
-> fork() is a method of child_process module
-> 'child_process module' allows you to create new processes in your Node.js applications. 

const { fork } = require('child_process');

// Use fork to create a new child process
const childProcess = fork('childScript.js');

// Communicate with the child process
childProcess.on('message', (message) => {
  console.log(`Message from child process: ${message}`);
});

// Send a message to the child process
childProcess.send('Hello from the parent process!');


*/

// Q9] How do you create a simple server in Node.js that returns Hello World?
/*

using two ways : 
1. http module
2. express

-> Before express we have to create a server using http module.
-> to create a server wa have a method  inside http module called 'createServer()'.
-> In http module we have to write multiple if statements for checking multiple urls inside 'createServer()' method.
-> As we add more routes for our application we need to add more if blocks in the callback function of 
createServer((req, res)=>{if()}) method.
->  To solve this problem we use Express js.
code without using express js and then write same code using express js and explain it : 
========================================================================================

with 'http' : 
-------------
const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, Node.js!');
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('About us');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});




with "Express.js" : 
-------------------
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello, Node.js!');
});
app.get('/about', (req, res) => {
  res.send('About us');
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


*/


// Q10] What is RESTful API: 

/*

RESTful API : 

-> REST stands for Representational state transfer and it is a thesis which is provided by student in his university.
-> REST is use for building 'http services' that client can access.
-> we simply use http protocol to provide support for CRUD operations.
-> RESTful APIs use standard HTTP methods (GET, POST, PUT, DELETE) to perform CRUD (Create, Read, Update, Delete) operations on 
resources.

-> API Stands for "Application Programming Interface".
-> The API acts as middleware or bridge between the frontend(client-side applications) and backend(server-side applications or 
services).
-> It defines a set of rules and protocols for how the frontend can communicate with the backend
-> It provides a structured way for the frontend to request specific operations from the backend.
-> When the frontend needs to interact with the backend, it sends API requests. These requests specify the desired action (e.g., 
fetching data, updating records) and may include additional information.
-> In the backend, The backend processes these requests, performs the necessary operations, and sends back API responses containing 
the results.
> In summary, APIs serve as a bridge between the frontend and backend, allowing them to communicate in a standardized and structured 
manner.


HTTP Verbs and Resource URIs:
-----------------------------

GET /users - Retrieve a list of users.
POST /users - Create a new user.
GET /users/1 - Retrieve user with ID 1.
PUT or PATCH /users/1 - Update user with ID 1.
DELETE /users/1 - Delete user with ID 1.


Status codes: 
-------------

200 -> Success/OK  (The HTTP status code 200 represents success which means the page you have requested has been fetched.)
201 -> Created
400 -> Bad Request  (When the client requests a page and the server is not able to understand anything, it displays a 400 HTTP status 
code.)
401 -> unauthorized (This HTTP status code requires user authentication.)
403 -> Forbidden (The HTTP status code 403 implies that the request is understood by the server, but still refuses to fulfill it.)
404 -> Not Found (404 HTTP Status code appears when you request a URL and then the server has not found anything.)
500 -> Internal server error (A valid request was made by the client but the server failed to complete the request) 




*/


// Q11] Explain types of modules. 

/*


*/


























































