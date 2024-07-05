const student = {
    fullName: "Noorunnabi",
    marks: 94.3,
    printMarks: function () {
        console.log("marks =", this.marks); // this used for in this object marks.
    },

};
let name = student.fullName;
console.log(name);
let marks = student.marks;
console.log(marks);
let func = student.printMarks();
console.log(func);


const employee = {
    calcTax1() {
        console.log("Tax rate is 10%");
    },
    calcTax2: function () {
        console.log("Tax rate is 20%"); // same as calcTax1 
    },
};
const karanArjun = {
    salary: 50000,
    calcTax1: function () {
        console.log("Tax rate is 30%"); // first preority
    },
};
// We are making karanArjun' prototype. Now we are going to use employee's methods & functions in karanArjun methos by using employee as a prototype in karanArjun.

karanArjun.__proto__ = employee;
let tax1 = karanArjun.calcTax2();
console.log(tax1);
//  karanArjun
let tax3 = karanArjun.calcTax1();
console.log(tax3);
