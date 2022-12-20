const product = {
    name:"TV",
    price:120,
    priceCurency: '$',
    discount:false,
    colors:['black','red', 'green']
}

for(let property in product){
    console.log(property, 'key value');
    console.log(product[property]);
}

let numbers = [45,3,5];
// for(let value in numbers){
//     console.log(numbers[value]);
// }

for(let x of numbers){
    console.log(x);
}

let tester ={
    name:'Tester01',
    age:5,
    position:'Developer',
    workFunction:function(){
        if(tester.age <18){
            return`My first job is not ${tester.position}`
        }
        
    }
}
// if(tester.age <18){
//     delete tester.position
// }
console.log(tester.workFunction());
