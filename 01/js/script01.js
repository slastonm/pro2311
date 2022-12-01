// alert('Hello from file');

//structure
let Name = 'Tom';
let name = 'Bob';
// alert(name);

// Bad examples
// let 01Name = 1;
// let !$&*@#Name = 1;
// let 01-Name= 1;
// let 01 Name = 1;
var CONST_KEY= 'old';
const KEY = 'password';
let user_name = 'Sam';
let UserName = 'Sam01';
let userName = 'Same02';

// Data type
let numberValue = 1200;
let numberFloat = 1.25;
// Nan
// Infinity

console.log('This name', userName);
console.log('This name2', UserName);
console.log(user_name);
console.log(KEY, 1111);

console.log("Max value", Number.MAX_VALUE);
console.log("Min value", Number.MIN_VALUE);

console.log("Max infinity", Number.POSITIVE_INFINITY);
console.log("Min infinity", Number.NEGATIVE_INFINITY);

let resultNumber = numberFloat + numberValue;
console.log("Sum result", resultNumber);

// String

let firstName = "TestName";
let secondName = 'LastName!';
console.log(firstName+ " " + secondName, 'String sum');
document.write(firstName);
document.write("<br/>");
document.write(secondName);

let stringNumber = '2022';
let testNumber = 1;
let nextYear = stringNumber + testNumber;
console.log(nextYear);
console.log(stringNumber - testNumber); //Math operation
console.log(stringNumber * testNumber); //Math operation
console.log(stringNumber / testNumber); //Math operation

// Boolean 
let trueValue = true;
let falseValue = false;

console.log("true value", trueValue);

let noValue = null;
let notFind = undefined;

// Methods
// alert("Hello");
// let dayInfo = prompt('Як ваш день?', 'Normal day');
// let userSay = 'User say: '+dayInfo
// console.log(userSay);
let userAge = prompt("How old are you?");
console.log("User age", userAge);
let userAgeResult = parseInt(userAge);
console.log("Conver age", userAgeResult);
console.log(parseInt(userAge));
console.log(parseFloat(userAge));
console.log(+userAge, 111111);









