const person  = {
    fname: "Adesh",
    lname: "Jadhav",
    get fullName(){
        console.log(`Name: ${this.fname} ${this.lname}`);
    },
    set fullName(value){
        if(typeof value !== 'string') return;
        const parts = value.split(' ');
        this.fname = parts[0];
        this.lname = parts[1];
    }
}


person.fullName = null;
person.fullName;