let myValue = 2023;
let thisYear = 2024;

if(myValue == 2023 && thisYear == 2022 ){
    // alert('This year and next year');

}
else{
    // alert('Code in else');
}

// let userData = prompt('Type number', 0);
// userData = parseInt(userData);
// if (userData == 0){
//     console.log('Value is 0', userData);
// }
// else if(userData<6){
//     console.log('Value is < 6', userData);
// }
// else if(userData<10){
//     console.log('Value is > 6 and <10', userData);
// }
// else{
//     console.log('Value is not 0', userData);
// }

// let firstNumber = parseFloat(prompt('Type number', 0));
// let SecondNumber = parseFloat(prompt('Type number', 0));
// let operationNumber = prompt('Operation');
// let result = 0;
// if(operationNumber == '+'){
//     result = firstNumber + SecondNumber;
//     console.log('Plus value:', result);
// }
// else if(operationNumber == '*'){
//     result = firstNumber * SecondNumber;
//     console.log('Multiplie value:', result);
// }
// else{
//     console.log('Operation not found');
// }

// let helloText = prompt("Say hello", "hello");

// if(helloText == 'hello' || helloText == 'Hello' || helloText == 'HELLO'){
//     console.log( 'User say: ', helloText);

// }
// else if(helloText == 'hi' || helloText == 'Hi' || helloText == 'HI'){
//     console.log( 'User say: ', helloText);
// }
// //else if ()
// else{
//     console.log( 'User say another variant: ', helloText);
// }

let operationValue = false;

if(!operationValue){
    // console.log(operationValue, 1);
    // console.log(!operationValue, 2);
    console.log('Operation value false');
}

let resultHello = '';
// if(operationValue){
//     resultHello = 'Hello';
// }
// else{
//     resultHello = 'Bye';
// }
resultHello = operationValue ? "Hello short if": "Not hello";
console.log(resultHello, 111);

let firstValue = 10;
let secondValue = 11;

let maxValue = firstValue>secondValue? firstValue:secondValue;
console.log('Max value:', maxValue);

