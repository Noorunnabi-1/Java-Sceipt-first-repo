const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promises.");
        resolve("Success.");
        // reject("some error occured.");
        //promise on console

    });
};
let promise = getPromise();
promise.then((res) => {
    console.log("Promise fulfilled.", res);
});

promise.catch((err) => {
    console.log("Rejected", err);
});


// asyncFunction    
function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data 1");
            resolve("Success to fetch data 1");
        }, 4000);
    });
};

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data 2");
            resolve("Success to fetch data 2");
        }, 4000);
    });
};
console.log("fetching data 1........");
let p1 = asyncFunc1();
p1.then((res) => {
    console.log(res);
    console.log("fetching data 2........");
    let p2 = asyncFunc2();
    p2.then((res) => {
        console.log(res);
    })
});



