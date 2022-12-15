let firstArr = [1,'Hello', true, null, [1,2]];
console.log(firstArr);
console.log(firstArr[0]);
// console.log(firstArr[4]);
console.log(firstArr.length); // 5
let lastArrItem = firstArr[firstArr.length-1] // last array item
console.log(lastArrItem);
// console.log(firstArr[4][1]);
let shoping = ['milk', 'orange', 'cat'];
for (let i=0; i<shoping.length; i++){
    if(i%2){
        console.log(`Shoping list item ${shoping[i]}`);        
    }
}

let joinRes = firstArr.join("|"); // cvs Name | SecondName| Age
console.log(joinRes);

let firstConcatArr = [1,2,3];
let secondArr = [4,5,6];

// let resultAerr = firstConcatArr.concat(secondArr);
// let resultAerr = secondArr.concat(firstConcatArr);
let resultAerr = firstConcatArr.concat(secondArr, 7,8,9,[10,11]);

console.log(resultAerr);
let toStringRes = resultAerr.toString();
console.log(toStringRes);

// let newArr = [];
let newArr = new Array('a','b','c');
console.log(newArr);

let userAges = [10, 12, 20, 30];
userAges.reverse();
console.log(userAges);

console.log(Array.isArray(userAges));
console.log(Array.isArray([]));

// slice робить копію

let sliceArr = [1,2,3,4,'A', true, 'False str'];
// let slicePart = sliceArr.slice(0,2);
let slicePart = sliceArr.slice(4); 

console.log(slicePart);


// splice 
let start =0;
let spliceArr = [1,2,3,4,5,6];
spliceArr.splice(start,2);


console.log(spliceArr, 'splice arr');

// sort змінює массив
let sortMe = [2,40,10,7, 1, 2];
let sortString = ['cow', 'cat', 'bird','duck', 'dog'];
sortMe.sort();
sortString.sort();

console.log(sortMe);
console.log(sortString);

// pop видаляє останній елемент массива

let arrPop = [1,2,3];
arrPop.pop();
console.log(arrPop);
arrPop.pop();
console.log(arrPop);
arrPop.pop();
console.log(arrPop);
arrPop.pop();

console.log('Shift');
// shift видаляти елемент на початку
let arrShift = [1,2,3];

arrShift.shift();
console.log(arrShift);
arrShift.shift();
console.log(arrShift);

// let item = prompt('Add to array');
// let itemArr = [];
// itemArr.push(item);
// console.log(itemArr);
let numbersArr = [1,2,3];
let doubleNum = [];

for(let i =0; i<numbersArr.length; i++){
    let value = numbersArr[i]*2;
    doubleNum.push(value);
}

doubleNum.unshift(1);
doubleNum.unshift(0);
console.log(doubleNum);






