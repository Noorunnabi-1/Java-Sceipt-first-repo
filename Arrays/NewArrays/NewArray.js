// Map
let nums = [32, 44, 6, 8];
let newArray = nums.map((val) => {
    return val * val;
});
console.log(newArray);
console.log(nums);                  // original array not change  


// Filter
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenArr = arr.filter((val) => {
    return val % 2 === 0;
});
console.log(evenArr);
console.log(arr);                    // original array not change


// Reduce
let number = [2, 3, 4, 5, 6];
const output = number.reduce((pre, curr) => {
    return pre + curr;
});
console.log(number);
console.log("Sum :", output);

let numbers = [21, 43, 74, 50, 66];
const result = numbers.reduce((pre, curr) => {
    return pre > curr ? pre : curr;
});
console.log(numbers);
console.log("Maximum number is :", result);


// Practice 
let studentMark = [87, 90, 87, 79, 98, 95];
let Mark = studentMark.filter((val) => {
    return val > 90;
});
console.log(studentMark);
console.log(Mark);


let n = prompt("Enter a number :");
let arra = [];
for (i = 1; i <= n; i++) {
    arra[i - 1] = i;
}
console.log(arra);

// sum of the array 
let sum = arra.reduce((pre, curr) => {
    return pre + curr;
});
console.log("Sum :", sum);


// Product of the array 
let product = arra.reduce((pre, curr) => {
    return pre * curr;
});
console.log("Product/Factorial :", product);