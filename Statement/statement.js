//Conditional Statements

let age = 19;
if (age >= 18) {
    console.log("You can Vote.");
}

else {
    console.log("You cannot Vote.");
}



let mode = "dark";
let color;
if (mode === "white") {
    color = "white";
}
else {
    color = "dark";
}
console.log(color);


let a = 5;
if (a % 2 === 0) {
    console.log("Even number");
}
else {
    console.log("Odd number");
}

let umar = 14;
if (umar < 18) {
    console.log("Junior");
}
else if (umar > 60) {
    console.log("Senior");
}
else {
    console.log("Middle");
}


// Ternary Operator
let ag = 11;
/*  let result = ag >= 18 ? "Adult" : "Not adult";
console.log(result); */

ag >= 18 ? console.log("Adult") : console.log("Not adult");


// let num = prompt("Enter a number :");
// if (num % 5 === 0) {
//     console.log(num, "number is multiple of 5.");
// }
// else {
//     console.log(num, " number is not multiple of 5.");
// }

let score = prompt("Enter marks : ");
if (score >= 80 && score == 100) {
    console.log(score, "Grade 'A'");
}
else if (score >= 70 && score <= 89) {
    console.log(score, "Grade 'B'");
}
else if (score >= 60 && score <= 69) {
    console.log(score, "Grade 'C'");
}
else if (score >= 50 && score <= 59) {
    console.log(score, "Grade 'D'");
}
else if (score >= 0 && score <= 49) {
    console.log(score, "Grade 'E'");
}


