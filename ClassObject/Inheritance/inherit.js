class Person {
    constructor() {
        this.species = "Homo sapiens.";
    }
    hello() {
        console.log("Hello");
    }
    eat() {
        console.log("Eat");
    }
    sleep() {
        console.log("Sleep");
    }
    work() {
        console.log("Do nothing.");
    }
}
class engineer extends Person {
    work() {
        console.log("Solve problems, build something");
        // If Child & Parent have same method, child’s method will be used. This is called Method Overriding.
    }
}

let obj = new engineer();    // create object
console.log(obj);
console.log(obj.hello());
console.log(obj.work());
console.log(obj.eat());


// Super keyword
class Person1 {
    constructor() {
        console.log("Enter parent constructor.");
        this.key = "Super keyword.";
    }
    hello() {
        console.log("Hello");
    }
    eat() {
        console.log("Eat");
    }


}
class engineer1 extends Person1 {
    constructor(branch) {
        console.log("Enter child constructor.");
        super(); // to invoke parent class constructor.
        this.branch = branch;
        console.log("Exit child constructor.");
    }
    work() {
        console.log("Solve problems, build something");
        // If Child & Parent have same method, child’s method will be used. This is called Method Overriding.
    }
}

let superKeywordObj = new engineer1("Chemical Engg");    // create object

console.log(superKeywordObj);
// console.log(superKeyword.hello())  ;
// console.log(superKeyword.work()) ;
// console.log(superKeyword.eat()) ;


class Person2 {
    constructor(name) {
        this.key = "Super keyword.";
        this.name = name;
    }
    hello() {
        console.log("Hello");
    }
    eat() {
        console.log("Eat");
    }


}
class engineer2 extends Person2 {
    constructor(name) {
        super(name); // to invoke parent class constructor.
        // pass value from child constructor to parent class constructor.

    }
    work() {
        super.eat();
        console.log("Solve problems, build something");
        // If Child & Parent have same method, child’s method will be used. This is called Method Overriding.
    }
}

let superKeyObj = new engineer2("Noorunnabi");    // create object

console.log(superKeyObj);
console.log(superKeyObj.work());
console.log(superKeyObj.name);