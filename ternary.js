// ternary => three parts
// condition ? do something when true : do something when false

// practice 01
let age = 15;
// if(age >= 18) {
//     console.log('vote dio');
// } else{
//     console.log('ghumay thako');
// }
// convert to ternary 
age>=18 ? console.log('vote dio') : console.log('ghumay thako');


// practice 02
let price = 500;
let isLeader = false;

// if(isLeader === true) {
//     price = 0;
// } else {
//     price = price + 100;
// }
// console.log(price);

// convert this to ternary
price = ( isLeader === true) ? price = 0 : price = price + 200;
console.log(price);


// practice 03
let money = 1200;
let isChairman = false;

// if(isChairman === true){
//     if(money >= 1000) {
//         money = money /2;
//     }
//     else{
//         money = 0;
//     }
// }
// else{
//     money = money + 100;
// }
// console.log(money);

// convert this to ternary
isChairman === true ? (money >= 1000 ? money = money / 2 : money = 0) : money = money + 200;
console.log(money);

