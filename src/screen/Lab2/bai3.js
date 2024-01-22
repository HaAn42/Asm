const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("lỗi promise1");
    }, 2000);
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hoàn thành promise2");
    }, 2000);
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hoàn thành promise3");
    }, 2000);
});

Promise.all([promise1, promise2, promise3]).then(
    (results) => {
        console.log("tất cả promise đã hoàn thành");
    }
).catch((error) => {
    console.log("promise thất bại tại", error);
});