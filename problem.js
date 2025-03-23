// problem 01
let burgerPrice = 400;
let cokePrice = 30;

if (burgerPrice >= 500) {
  console.log(burgerPrice + " free coke without price");
} else {
  console.log(burgerPrice + cokePrice + " with coke price");
}

// problem 02
let weight = 80;
let height = 1.71;
let BMI = weight / height ** 2;
console.log(BMI);

if (BMI < 18.5) {
  console.log("underweight");
} else if (BMI >= 18.5 && BMI <= 24.9) {
  console.log("normal");
} else if (BMI >= 25 && BMI <= 29.9) {
  console.log("overweight");
} else {
  console.log("obese");
}

// problem 03
let score = 87;
if (score <= 100 && score >= 90) {
  console.log("a grade");
}
else if(score <= 89 && score>= 80){
    console.log('b grade');
}
else if(score <= 79 && score>= 70){
    console.log('c grade');
}
else if(score <= 69 && score>= 60) {
    console.log('d grade');
}
else{
    console.log('f grade');
}


// problem 04
let yourMarks = 87;
let yourFriendMarks = 35;

if(yourMarks >= 80){
    if(yourFriendMarks > 80){
        console.log('go for a lunch');
    }
    else if(yourFriendMarks >= 60 && yourFriendMarks < 80){
        console.log('good luck next time');
    }
    else if(yourFriendMarks >= 40 && yourFriendMarks < 60){
        console.log('took message unseen');
    }
    else{
        console.log('block from social media');
    }
}
else{
    console.log('go home and sleep and act sad');
}


// problem 05
let num1 = 82;
let num2 = 66;

// if(num1 >num2) {
//     console.log(num1 * 2);
// }
// else{
//     console.log(num1 + num2);
// }

// convet to ternary
num1>num2 ? console.log(num1 * 2) : console.log(num1 + num2);


// problem 06
let ticketFare = 800;
let age = 63;

if(age<10){
    console.log('free');
}
else if(age>= 10 && age<=25){
    // 50% discount
    let discount = ticketFare * 50/100;
    let studentFare = ticketFare -discount;
    console.log(studentFare);
}
else if(age >= 60){
    // 15% discount
    let discount = ticketFare * 15 /100;
    let oldmanFare = ticketFare -discount;
    console.log(oldmanFare);
}
else{
    console.log(ticketFare);
}


