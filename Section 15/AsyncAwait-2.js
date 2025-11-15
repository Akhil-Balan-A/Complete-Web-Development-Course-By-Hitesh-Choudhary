function fetchPostData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Post Data Fetched");
    }, 2000);
  });
}

function fetchCommentData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Comment Data Fetched");
    }, 3000);
  });
}

async function fetchAllData() {
  try {
    let time1 = new Date().getTime();
    const postData = await fetchPostData();
    const commentData = await fetchCommentData();
    let time2 = new Date().getTime();
    console.log((time2 - time1) / 1000, "seconds"); // 5 seonds to fetch all data
    console.log(postData);
    console.log(commentData);
  } catch (err) {
    console.log(err);
  }
}

fetchAllData();

//--> All at once to run both simultaneously for time efficiency.

async function fetchAllDatas(params) {
    try {
        let time1 = new Date().getTime();
        const [postData, commentData] = await Promise.all([fetchPostData(), fetchCommentData()]);
        let time2 = new Date().getTime();
        console.log((time2 - time1) / 1000, "seconds"); // 3 seonds to fetch all data
        console.log(postData);
        console.log(commentData);
        

    } catch (err) {
        console.log(err);
    }
}

fetchAllDatas();


