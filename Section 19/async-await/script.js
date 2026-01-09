function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log("Making request to " + location);
        if (location === 'Google') {
            resolve("Google says hi");
        } else {
            reject("We can only talk to Google");
        }
    });
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log("Processing response");
        resolve("Request processed " + response);
    });
}


// makeRequest("Facebook").then((response) => {
//     console.log("Response Received");
//     return processRequest(response);
// }).then((processedResponse) => {
//     console.log(processedResponse);
// }).catch(error => {
//     console.log(error);
// });



async function dowork() {
    try {
        const response = await makeRequest('Facebook');
    console.log("Response Received");
    const processedResponse = await processRequest(response);
    console.log(processedResponse);    
    } catch (error) {
        console.log("Error Message:"+error);
    }
    
}

dowork();