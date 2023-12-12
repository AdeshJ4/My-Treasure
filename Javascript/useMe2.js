class Person{
    constructor(fname){
        this.fname = fname;
    }

    firstName(){
        console.log('First Name : ' + this.fname);
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
p1.display()