//  Synchronous
console.log("One");
console.log("Two");
console.log("Three");
console.log("Four");


//  Asynchronous
setTimeout(() => {
    console.log("Hello!");
}, 4000);   //  time out : 4sec= 4000ms 


console.log("Five");  // they are not waiting to exute setTimeout function. This is  Asynchronous Programming.
console.log("Six");



