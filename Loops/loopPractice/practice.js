
// question 1
for (let num = 0; num <= 100; num++) {
    //console.log("num  = ", num);  for print all numbers.
    if (num % 2 === 0) {     //(num % 2 !== 0)   odd number
        console.log("even number =", num);
    }
}

// question 2
let gameNumber = 25;
let userNumber = prompt("Guess the game number = ");
while (userNumber != gameNumber) {
    userNumber = prompt("You entered wrong number, Guess again = ");

}
console.log("Congratulations, You entered right number. ");
