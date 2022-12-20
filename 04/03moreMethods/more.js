const fruits = ['apple', 'orange', 'cherry'];
const numbers = [1,2,3];
function forEachFn(item, index, arr){
    arr[index]= item*10;
}

numbers.forEach(forEachFn);
console.log(numbers);

const mapNumbers = [1,2,3];
// mapNumbers= true;
const newArr = mapNumbers.map((x)=>{return x*2}); //if  x>=18 return x
// console.log(mapNumbers, 'old');
console.log(newArr, 'new');

const userAges = [32, 33, 16, 40];
function checkAges (age){
    return age >=18;
}
const ageResult = userAges.filter((x)=>x>=18);

console.log(ageResult);

const points = [10,20,30, 1, 2,3];
// console.log(points.sort());

console.log(points.sort(function(a,b){return a-b}));
console.log(points, 1);

console.log(points.sort(function(a,b){return b-a}));
console.log(points, 2);









