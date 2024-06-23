//Function Definition 
function myFunction() {
    console.log("My name is Noorunnabi !");
    console.log("I'm Btech student in JIT college.");
    console.log("Currently I'm in second year.");
    console.log("I'm a web developer.");
}
// Function Call
myFunction();


function paraFunction(msg) {
    console.log(msg);
}
paraFunction("I'm learning JS.");


function sum(a, b) {
    // a & b are local variables
    console.log(a + b);
}
sum(33, 54);

function sum1(x, y) {
    // x & y are local variables
    sum1 = x + y;
    return sum1;
}
let val = sum1(4, 8);
console.log(val);


// Arrow function
const arrowSum = (a, b) => {
    console.log(a + b);
}
console.log(arrowSum);
console.log(arrowSum(11, 42));

const arrowMul = (p, q) => {
    return (p * q);
}
console.log(arrowMul);
console.log(arrowMul(4, 7));


// Practice Count Vowel using Function
function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    console.log(count);
}
countVowels("Noorunnabi");


// Practice Count Vowel using Arrow Function

