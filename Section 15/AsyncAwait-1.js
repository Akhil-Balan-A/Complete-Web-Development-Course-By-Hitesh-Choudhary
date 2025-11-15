//--> normal promise.
// function fetchUsserData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Data Fetched')
//         }, 2000)
//     })
// }

// fetchUsserData()
//     .then((result)=>{console.log(result)})
//     .catch((error) => { console.log(error) });
    

//--> asyn function mode

function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({userName: 'Akhil', age: 20})
        }, 6000)
    })
}

async function getUserInfo() {
    console.log("fetching data.....");
    const userData = await getUserData();
    console.log('data fetched');//even though this line is asynchronous it will be executed after the promise is resolved..async function will stop line by line exection when it reaches await. that's why even though the console.log() is synchronous it waits for the promise to resolve.
    console.log(userData); //same case above.
    
}

getUserInfo();