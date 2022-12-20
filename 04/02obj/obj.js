let student = {
    age: 32,
    name: 'Tom',
    study: true,
    skills: ['html', 'css'],
    friends:[
        {
            name:'Lara',
            skills:['js', 'scss']
        },
        {
            name:'Klara',
            skills:['Html', 'scss']
        }
    ]
}
// console.log(student);
// console.log(student.friends[0].skills);
student['isActive'] = false;
student.friends[0].age  = 40;
console.log(student);
// let arr =  [1,2,3] => arr[0], arr[2]

let dog = new Object(); // let dog = {}
dog.name ='Rex';
dog.age =2;
console.log(dog);
dog.voice = function(){
    return 'Gav gav';
}
console.log(dog.voice());

// var 
// let 
const KEYAPI = 'secret';
const arrValue = [1,2,3];

// KEYAPI = 1;
// console.log(KEYAPI);
arrValue[0] = 11;
console.log(arrValue);

const cat ={}
cat.name = 'Timon';
cat.age = 10;

console.log(cat);

cat.name = 'Tom';
console.log(cat);
cat = 'dog';
console.log(cat);


