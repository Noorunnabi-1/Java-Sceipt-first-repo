// callBack Hell
// nesting (nested if else)
let age = 19;
if (age >= 18) {
    if (age >= 60) {
        console.log("senior");
    } else {
        console.log("middle");
    }
} else {
    console.log("Child");
}

//(nested loops)
for (let i = 0; i <= 5; i++) {
    for (j = 0; j <= 5; j++) {
        console.log(j);
    }
}
