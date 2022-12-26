let someText = "Hello world";
console.log(someText.length);
console.log(someText.slice(0,5));
console.log(someText.slice(-6,-2));
console.log(someText.slice(-5));

// substring 
console.log(someText.substring(0,5));

let text = "Html and Css";
let newText = text.replace("css", "js");
console.log(newText);

// trim text;

let inputText ="    Hello ";
// let trimInputText = inputText.trim();
// let trimInputText = inputText.trimStart();
let trimInputText = inputText.trimEnd();

console.log(trimInputText.length);

console.log(text.toLowerCase());
console.log(text.toUpperCase());

// split 
// let splitText = "Html,css,js"
let splitText = "Html|css|js"
let arrSplitTex = text.split('|')
// console.log(text.split(' '));
console.log(text.split('|'));
console.log(arrSplitTex.toString());
// console.log(text.split(','));
