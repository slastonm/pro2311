// function(){

// }
function hello(argument){
    console.log(argument);
}
// hello('Write hello in console.log');
// hello('Second time');
// hello('Hello user');
let userName = '!!!'
function getData(){
    let userName = prompt();
    let userSname = prompt();
    console.log(`${userName} and ${userSname}`);
}
// getData();

console.log(userName);

function printArg (value = 'Empty', printTime){
    if(printTime === undefined){
        printTime = 3;
    }
    for(let i=0; i<printTime; i++){
        console.log(value);
    }
}
printArg('Hello');
printArg('Hello with arg', 2);
printArg(); 

// === return 

function sum(a, b){
    let res = a+b;
    return res;
}

let fnRes = sum(2,3);
console.log(fnRes, 'function result');



let arrTest = [,,,];
console.log(arrTest);
arrTest[10] = 10;
console.log(arrTest[4]);

// let funcionSum = function(a, b){
//     return a+b
// }
let funcionSum = (a,b)=>a+b;
let funcionArrow = ()=>{"Hello arrow function"};


let startTime = performance.now()
    
console.log(funcionSum(4, 5));
console.log(funcionArrow);
let endTime = performance.now();
console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)    

