function multiple (value){
    console.log(value*2);

    return `${value*2}`
}
function arrFn( arrValue){
    return arrValue;
}

// let dataArr = [1,2,3,4];
let dataArr = "1,2,3,4";

arrFn(dataArr);

let a = [];

function scopeFn(){
    a.push(2)
    // return a;
}
scopeFn();
console.log(a);
// console.log(scopeFn());

let callBackFn = function(value){
    return` I have ${value}`
}

let fnCb = function(valueData, fn){
    for(let i=0; i<valueData.length; i++){
        console.log(fn(valueData[i]));
    }
}
fnCb([1,2,3,4], callBackFn);
fnCb(['cat', 'dog'], callBackFn);

// function test(){
    // this work
// }
// let test = ()=>{this not work}


