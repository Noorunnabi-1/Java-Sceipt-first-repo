let promise = new Promise((resolve, reject) => {
    console.log("I am a promises.");
    resolve("Success.");
    // reject("some error occured.");
    //promise on console

});

function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("get data successfully.");
            // reject("error");
            if (getNextData) {
                getNextData();
            }
        }, 5000);
    });
}
let finalVal = getData();
console.log(finalVal);
// finalVal on console


// rejected
// function getData1(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log("data", dataId);
//             // resolve("get data successfully.");
//             reject("error");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 5000);
//     });
// }
// let finalVal1 = getData();
// console.log(finalVal);
// // finalVal1 on console
