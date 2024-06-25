let arr = [1, 2, 3, 4, 5];
arr.forEach(function printVal(val) {
    console.log(val);
});

//Using arrow function
let city = ["pune", "mumbai", "delhi", "hyderabad"];
city.forEach((val, idx, city) => {
    console.log(val.toUpperCase(), idx, city);
});


// practice
let numbers = [3, 7, 5, 9, 11];
numbers.forEach(function squareNum(numbers) {              // numbers.forEach((numbers)=> {..................}); 
    console.log(numbers * numbers);
});


let nums = [32, 57, 52, 91, 111];
let calcSquare = (nums) => {
    console.log(nums * nums);
};
nums.forEach(calcSquare);

