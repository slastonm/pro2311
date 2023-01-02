// alert(a);
// var a = 5;
// let a = 5;
// const a = 5;

var x = 10;
if (true){
    var x = 1000;
    console.log(x); //1000
}
console.log(x); // 10 
// ctrl + D

function func1 (a, b, c, d){
    console.log(arguments);
    console.log(arguments[2]);
    let normalArr = Array.from(arguments);
    normalArr.forEach(element => {
        console.log(element); 
    })
}
func1(1,2,4,5,6,7,8,9,10);

// Rest
function allData (...a){
    console.log(a);
    a.forEach(element => {
        console.log(`${element} rest`); 
    })
}
allData(1,3,5,7,9);

// Spread operator
let first = [1,2,3];
let second = [4,5,6];

first = first.concat(second);
console.log(first, 'concat');

let firstLetters = ['a','b','c'];
let secondsLetters = ['d', 'e', 'f'];

firstLetters = [...firstLetters, ...[1,2,4], ...secondsLetters];

console.log(firstLetters);

let userNames = [{name:'Tom'}, {name:'Tom'}, 'Lisa'];
let objNames = {...userNames}
console.log(objNames);

const dateForm = [1970, 0, 1];
const d = new Date(...dateForm);
console.log(d);

