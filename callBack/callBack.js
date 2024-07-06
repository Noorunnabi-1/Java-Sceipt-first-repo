//  synchronous programming call back
function sum(a, b) {
    console.log(a + b);
}

function calculator(a, b, sumCallBack) {
    sumCallBack(a, b);
}

let add = calculator(1, 4, sum);
console.log(add)


//  Asynchronous programming call back
const hello = () => {
    console.log("Hello!");
}
setTimeout(hello, 3000);


