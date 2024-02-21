class Person {
    constructor(id, fname, age){
        this.id = id;
        this.fname = fname;
        this.age =age;
    }

    intro(){
            console.log(this.id);
            console.log(this.fname);
            console.log(this.age);
    }
}

const obj1 = new Person(101, "Adesh", 22);

obj1.intro();