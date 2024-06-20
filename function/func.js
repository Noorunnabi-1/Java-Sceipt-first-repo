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