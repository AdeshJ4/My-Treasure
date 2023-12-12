function fun(n1, n2){
    console.log('Thing 1');
    try{
        if(n2 === 0){
            throw new Error('Cannot divide by 0');
        }else{
            console.log('Division: ' + (n1/n2));
        }
    }catch(err){
        console.log(err.message);
    }finally{
        console.log("File is closed");
    }

    console.log("Thing 2");
}


fun(10, 0);
