// practice 1

const price = 3000;

if(price >= 5000) {
    // 10% discount
    const discount = price * 10 / 100;
    const payAmount = price -discount;
    console.log(payAmount);
}
else if(price >= 2500) {
    // 5% discount
    const discount = price * 5 / 100;
    const payAmount = price - discount;
    console.log( payAmount );
}
else{
    console.log(price);
}


// practice 2
let age = 65;
let cost = 500;

if(age <= 10){
    console.log('you can eat free');
}

else if(age >= 60) {
    // 50% discount
    const discount = cost * 50 / 100;
    const payment = cost - discount;
    console.log( payment );
}

else if (age >= 50) {
    // 25% discount
    const discount = cost * 25 / 100;
    const payment = cost - discount;
    console.log( payment );
}

else if( age >= 40) {
    // 10% discount
    const discount = cost * 10 /100;
    const payment = cost - discount;
    console.log( payment );
}

else{
    console.log(cost);
}