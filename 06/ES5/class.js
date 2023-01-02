// destructing 

//old version
const carsModels = ['ford-150','fiat tipo', 'toyota rav4'];

// const ford = carsModels[0];
// const fiat = carsModels[1];
// const toyota = carsModels[2];

// new version

const [ford, fiat, toyota] = carsModels;
console.log(ford);
console.log(toyota);

const hero = {
    name:'Batman',
    realName:'Bruce'
    // suitColor: 'Black'
}
// let name = hero.name;
// let realName = hero.realName;

const {name, realName, suitColor = 'red'} = hero;
// const {name, realName } = hero;


console.log(name, realName, suitColor);

const car = {
    brand:'Ford brand',
    model:'Mustang'
}
const {brand:mustanBrand} = car;
console.log(mustanBrand);

const price = {
    breckfast:{
        type:'eggs'
    },
    dinner:{
        dinnerType:'soup'
    }
}
const {breckfast:{type}, dinner:{dinnerType}}= price;
console.log(type, dinnerType);

const heroes = [
    { name: 'Batman',
        age:40
    },
    {name: 'Joker', age:30}
];

// for  (const {name, age} of heroes){
//     console.log(name, age);
// }
for  (const person of heroes){
    console.log(person.name, person.age);
}

const modName = heroes.map(function({name, age}){
    return `This person ${name} and age ${age}`;
})
console.log(modName);