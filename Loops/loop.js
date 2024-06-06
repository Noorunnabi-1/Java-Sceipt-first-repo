// for loop
for (let i = 1; i <= 10; i++) {
    console.log("Loop");
}

let sum = 0;
for (i = 1; i <= 5; i++) {
    sum = sum + i;
    console.log(sum);
}
console.log("sum =", sum);


let multiple = 1;
for (i = 1; i <= 5; i++) {
    multiple = multiple * i;
    console.log(multiple);
}
console.log("multiple  =", multiple);

// while loop
let a = 1;
while (a <= 5) {
    console.log("while loop.");
    a++;
}

// do while loop
let b = 5;
do {
    console.log("do while loop");
    b++;
}
while (b <= 5);

// for of loop 
let str = "JavaScript";
for (let x of str) {
    console.log("x =", x);
}

let string = "Noorunnabi";
let size = 0;
for (let y of string) {
    console.log("y =", y);
    size++;
}
console.log("size of string = ", size);

// for in loop
let student = {
    fullName: "Noorunnabi",
    age: 20,
    cgpa: 7.5,
    isPass: true,
};
for (let key in student) {
    console.log("key = ", key, ", value = ", student[key]);
}
