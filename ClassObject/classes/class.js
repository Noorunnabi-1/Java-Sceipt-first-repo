class ToyotaCar {
    constructor(brand, mileage) {
        console.log("Creating new object.");
        // if it is not created then it is automatically invoke by JS.
        this.brandName = brand;  // it is same to create a setBrand function
        this.mileage = mileage;
    }
    start() {
        console.log("Start");
    }
    stop() {
        console.log("Stop");
    }
    //     setBrand(brand) {
    //         this.brandName = brand; // should be give same name
    //     }
}

let fortuner = new ToyotaCar("Fortuner", 20);  // before this constuctor invoke all the time
console.log(fortuner);

// fortuner.setBrand("Fortuner");
let lexus = new ToyotaCar("Lexus", 25); // before this constuctor invoke all the time
console.log(lexus);
// lexus.setBrand("Lesux");

// console.log(fortuner);
console.log(fortuner.start());
console.log(lexus.stop());
// console.log(lexus);