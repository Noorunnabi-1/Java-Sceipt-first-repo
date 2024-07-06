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


// examples
function getData(dataId) {

    setTimeout(() => {
        console.log("data", dataId);
    }, 2000);
}
let dataAccess = getData();
console.log(dataAccess);
let idAccess = getData(21341);
console.log(idAccess);


// get data after 2sec delay 
function getData1(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 3000);
}
//  this is a callBack hell  (nested call back)
getData1(1, () => {
    console.log("getting data2....");
    getData1(2, () => {
        console.log("getting data3....");
        getData1(3, () => {
            console.log("getting data4....");
            getData1(4);
        });
    });
});
