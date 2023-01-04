// undefined 
// null
// Boolean
// Number
// BigInt
// String
// Symbol
// Function
// Object
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

console.log(Array.isArray([1,2,3]), 'check array');
console.log(typeof [1,2,3], 'Obj too');
console.log(typeof {a:3}, 'Obj');
console.log(typeof PersonClass, 'function');
console.log(typeof true, 'bool');
console.log(typeof new Date(), 'obj');
console.log(typeof /regex/, 'obj');
let fn = ()=>{true};

console.log(typeof fn, 'function');
console.log(typeof Math.round, 'function');

//Symbol
const sym = Symbol();
console.log(typeof sym, 'Symbol');






