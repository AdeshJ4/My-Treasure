async function sayHello (){
    return 'Hello';
    return Promise.resolve("Hello")
}

sayHello()    
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err.message))