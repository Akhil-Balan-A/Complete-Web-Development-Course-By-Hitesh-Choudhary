function fetchData() {
    let isApiFetched = false
    return new Promise((resolve, reject) => {
   
        setTimeout(() => {
            if (isApiFetched) {
                resolve('Data Fetched')
            }else {
                reject('Data Not Fetched')
            }
                  
        }, 2000)    
     
    })   
}

fetchData()
    .then(res => { return res })
    .then(res => console.log(res))
.catch(err => console.log(err))