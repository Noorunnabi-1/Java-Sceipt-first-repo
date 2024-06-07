let marks = [87, 80, 67, 90, 98];
console.log(marks);

let array = ["noorun", "sadiq", "saiful", "shariq", "affan", "ali"];
console.log(array);
console.log(array.length);  //self property


// Array indices
console.log(marks[3]);
console.log(array[2]);


array[1] = "arslan";
console.log(array);


// Looping over an array
//let array = ["noorun", "sadiq", "saiful", "shariq", "affan", "ali"];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}


//for of loop
for (let arr of array) {
    console.log(arr);
}

// toUpperCase()  : convert uppercase
let cities = ["Delhi", "Pune", "hyderabad", "Lucknow", "Punjab", "Rajasthan"];
for (let city of cities) {
    console.log(city.toUpperCase());
}


//Practice 1
let sum = 0;
let stuMarks = [85, 97, 44, 37, 76, 60];
for (let val of stuMarks) {
    sum = sum + val;
}
console.log(`Total sum = ${sum}`);
let average = sum / stuMarks.length;
console.log(`Average marks of the class is = ${average}`);


// Practice 2
let prices = [250, 645, 300, 900, 50];
console.log("10% less prices :");
for (let price of prices) {
    let lessPrice = price - price / 10;
    console.log(lessPrice);
}


// Push & Pop in array
//push()  : add items at the end
let foodItems = ["Potato", "apple", "litchi", "tomato"];
console.log(foodItems);
foodItems.push("chips");
console.log(foodItems);
foodItems.push("chips", "mango", "orange", "pine apple");
console.log(foodItems);


//pop() : delete items at the end and return it
let deleteItem = foodItems.pop();
console.log("deleted item =", deleteItem);
console.log(foodItems);


//toString() : convert array to string
console.log(foodItems.toString());  // no change original array
console.log(foodItems);    // prove 
console.log(prices.toString());   // it can also change number to string



//concat()  
//: join multiple array and return result , but not change original arrays
let name1 = ["noorun", " sadiq", "shariq"];
let name2 = ["arham", "raza"];
let name3 = ["zeya", "shajar", "abraham"];
let concatinate = name1.concat(name2, name3);
console.log(concatinate);
console.log(name1);
console.log(name2);


// unshift()  : add element at start
//let name2 = ["arham", "raza"];
name2.unshift("khalid");


//shift()  : delete at start
//let name1 = ["noorun", " sadiq", "shariq"];
let shift = name1.shift();
console.log("deleted name = ", shift);


// slice(startIdx,endIdx)   : return a piece of the array , but not change in original array
let name4 = ["noorun", "sadiq", "shariq", "jazib", "nazim", "zeshaan", "sherwani"];
console.log(name4);
console.log(name4.slice(2, 4));
console.log(name4.slice(1));


// splice()  : change original arrays (add , remove,replace)
// splice(strtIdx,deleteCount,newElmnt)
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
number.splice(2, 2, 101, 102);
//add element
number.splice(4, 0, 103);
//replace
number.splice(6, 1, 105);
//delete
number.splice(8, 1);


//Practice
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

//remove 1st company from the array  
companies.shift();

//companies.splice(0, 1);
//remove uber add ola its place
companies.splice(1, 1, "ola");

//add amazon at end
companies.push("amazon");
//companies.splice(5, 0, "amazon");








