function Person(fName, sName, age){
    this.fName = fName;
    this.sName = sName;
    this.age = age;
    let counter = 0;
}

class PersonClass{
    constructor(fName, sName, age){
        this.fName = fName;
        this.sName = sName;
        this.age = age;
    }
    info(){
        return `${this.fName} and ${this.sName} age: ${this.age}`;
    }
    // geter and seter
    get fName(){
        return this._fName;
    }
    set fName(value){
        if(value.length<2){
            console.log('wrong name length');
            return;
        }
        this._fName = value;
    }
    static counter = 0;
}
let rob = new PersonClass('Rob', 'Smith',39);
console.log(rob);
console.log(rob.info());
console.log(rob.fName);

console.log(rob.counter);
console.log(PersonClass.counter, 'class data');

PersonClass.staticMehod = function() {console.log('static')};
PersonClass.prototype.publicMenthod = function(){console.log('Public')}

rob.publicMenthod();
PersonClass.staticMehod();



