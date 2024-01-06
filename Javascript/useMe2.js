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