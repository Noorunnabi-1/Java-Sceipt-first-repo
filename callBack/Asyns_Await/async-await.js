function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather data");
            resolve(200);
        }, 2000);
    });
}
async function getWeatherData() {
    await api();   //  1st call
    await api();   //  2nd call
    await api();   //  3rd call
}
let Weather = getWeatherData();
console.log(Weather);



// hell using promise now using async await
// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("Success");
//         }, 6000);
//     });
// }
// async function getDataId() {
//     await getData(1);
//     await getData(2);
//     await getData(3);
// }
// getDataId();