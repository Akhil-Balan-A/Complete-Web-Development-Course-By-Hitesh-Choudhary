// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({ name: "Akhil", url: "https://www.google.com" });
//         }, 3000);
//     });
// }

// async function getUserData() {
//     try {
//         console.log('Fetching user Data...');
//         const userData = await fetchUserData();
//         console.log("User data: ", userData);
        
        
//     } catch (error) {
//         console.log("Error fetching data",error);
        
//     }
// }

// getUserData();


//////////////////////Example 2//////////////////////////////////

function fetchPostData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("comment: PostData fetched");
        },2000);
    })
}

function fetchCommentData() {
        return new Promise((resolve) => {
        setTimeout(() => {
            resolve("comment: comment data fetched");
        },3000);
    })
}

async function getCommentData() {
    try {
        console.log('Fetching data');
            const [commentData,postData] = await Promise.all([fetchCommentData(),fetchPostData()])
            console.log(commentData)
            console.log(postData)
        console.log('fetch complete')

    } catch (error) {
        console.error("Error while fetching data: ",error)
    }
    
}

getCommentData()