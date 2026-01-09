const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    const readable = fs.createReadStream(
        path.join(__dirname, "test.html"),
        { encoding: "utf-8" }
    );

    readable.pipe(res);
    // fs.readFile(path.join(__dirname, "test.html"), 'utf-8', (error, data) => { 
    // 
    // if (error) { 
    // 
    // console.log(error) 
    // 
    // } else { 
    // 
    // console.log(data) 
    // 
    // res.end(data); 
    // 
    // } 
    // })
});

const port = process.env.PORT || 4000;
server.listen(port, () => {
    console.log(`Server running on port ${port}.....`);
});
