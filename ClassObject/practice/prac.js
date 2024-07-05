let DATA = "Secret information"
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("Data =", DATA);
    }
}

let student1 = new User("Noorunnabi", "noor@gmail.com");
let student2 = new User("Shriq", "shariq@gmail.com");
let student3 = new User("Ali", "ali@gmail.com");
let student4 = new User("Saiful", "saiful@gmail.com");
let student5 = new User("Sadiq", "sadiq@gmail.com");

console.log(student1.viewData());
console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);
console.log(student5);

let teacher1 = new User("Dean", "deancollege@gmail.com");
console.log(teacher1.viewData());
console.log(teacher1);


