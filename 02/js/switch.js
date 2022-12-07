let buy = prompt('I want buy', 'milk');
switch (buy) {
    case 'milk':
        console.log('Milk cost 1$');
        break;
    case 'cat':
    case 'dog':
        console.log('cost 15$');
        break;
    default:
        console.log('Sorry we have just milk, cat, dog');            
}

// template literal

let one = 1;
let two = 2;

// let result ='result value ' + one+two;
let result =`Result summ ${one+two}`;
console.log(result);
console.log(`More operation ${2*one+two}`);