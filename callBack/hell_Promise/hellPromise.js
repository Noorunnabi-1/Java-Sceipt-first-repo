//  callback hell using promise
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("Success");
        }, 5000);
    });
}
// promise chain
getData(1).then((res) => {
    console.log(res);
    getData(2).then(() => {
        console.log(res);
    });
});