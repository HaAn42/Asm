const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Hoàn thành promise1");
    }, 2000);
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hoàn thành promise2");
    }, 3000);
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hoàn thành promise3");
    }, 4000);
});

Promise.allSettled([promise1, promise2, promise3]).then(
    (results) => {
        console.log("Tất cả promise hoàn thành");
        results.forEach((result) => {
            if (result.status === "fulfilled") {
                console.log("Promise hoàn thành ", result.value);
            } else {
                console.log("promise thất bại", result.reason);
            }
        });
    });