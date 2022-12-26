const d = new Date();
console.log(d);

const dd = new Date(2021, 01, 20, 06, 0, 30, 0);
console.log(dd); // month count from 0 to 11

// Short
const shortDate = new Date(2018, 11, 26);
console.log(shortDate);

const veryShort = new Date(2017, 11);
console.log(veryShort);

// Formats

const sM = new Date();
console.log(sM.toISOString());
console.log(sM.toDateString());
console.log(sM.toUTCString());

const today = new Date();
// const today = new Date(2022, 11, 27);
console.log(today.getDay());
console.log(today.getFullYear());
console.log(today.getHours());
console.log(today.getMinutes());




