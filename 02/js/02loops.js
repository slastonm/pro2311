let i = 0;
let text = '';

// while(i<10){
//     i++;
//     text = "The number is " + i;
//     console.log(text);
// }

while(i<10){
    i++;
    text = "The number is " + i;
    // console.log(i);
    console.log(text);
    if(i == 10/2){
        console.log('5 is okey');
        break;
        continue;
    }
    if(i == 8){
        console.log('This is end')
        break;
    }
}

let doText = "";
let counter = 0;
// "" + number = "0" + number= "01" => string
do {
    doText+=counter;
    console.log(doText);
    counter++;
}
while(counter<5);

// let maxAttempts = 3;
// let attempt = 0;
// let color = 'red';
// while( attempt< maxAttempts){
//     attempt ++;
//     let value = prompt("Cпроба №"+attempt, '');
    
//     if (value == null){
//         console.log(value, 111);
//         break;
//     }
//     if (value != color){
//         alert('Ви не вгадали')
//         continue;
//     }
//     else if(value == color){
//         alert('Ви вгадали')
//         break;
//     }
//     else{
//         alert('Продовжимо');
//         continue;
//     }
// }

for(let i=0; i<5; i++){
    console.log(i);
    // let template = "<div>" +i +"</div>"; old version;
    let template =`<div>${i}</div>`;
    document.write(template);
    // for(let j = 0; j<3; j++){
    //     console.log('Is j value:',j);
    // }
}


let stop = false;

while(!stop){
    ask = prompt("Say hi", '');
    if(ask == 'hi'){
        stop =!stop;
    }
}