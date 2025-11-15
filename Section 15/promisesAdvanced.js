const promise1 = new Promise((res, rej) => {
    setTimeout(() => {
 res('Promise 3 resolved')    }, 2000)
})

const promise2 = new Promise((res, rej) => {
    setTimeout(() => {
 rej('Promise 3 Rejected')    }, 3000)
})

const promise3 = new Promise((res, rej) => {
    setTimeout(() => {
        rej('Promise 3 Rejected')
    }, 4000)
});

// //way 1 for calling promises
// promise1
//     .then(res => {
//         console.log(res);
//         return promise2;
//     })
//     .then(res => {
//         console.log(res);
//         return promise3;
//     })
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err);
//     })

//Way 2 for calling promises

// async function allPromises() {
//     try {
//         const time1 = new Date().getTime();
//         const res1 = await promise1;
//         console.log(res1);
//         const res2 = await promise2;
//         console.log(res2);
//         const res3 = await promise3;
//         console.log(res3);
//         const time2 = new Date().getTime();
//         console.log((time2 - time1) / 1000, "seconds");

//     } catch (error) {
//         console.log(error);
//     }
// }

// allPromises()



//Way 3 for calling promises
//all will work only when all promises are resolved
// Promise.all([promise1, promise2, promise3])
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err);
//     })

//way 4 for calling promises
//allSettled will work only when any one of the promises is resolved
Promise.allSettled([promise1, promise2, promise3])
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })

//Way 5 for calling promises
//return single promise as soon sa it fails or succeeds. depends on first promise and what it returns.
Promise.race([promise1, promise2, promise3])
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })

//Way 6 for calling promises
//any will work only when any one of the promises is resolved. if all promise rejected, then only the error will be thrown
// Promise.any([promise1, promise2, promise3])
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err);
//     })