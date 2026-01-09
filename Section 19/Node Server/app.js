const http = require('node:http');
const port = process.env.PORT || 5000;
const fs = require('node:fs');


const server = http.createServer((req, res) => {
    fs.readFile('./indexx.html', 'utf-8', (err, html) =>{
        if (err) {
            res.setHeader("Content-Type","text/html");
            res.writeHead(500);
            res.end('<html><h1>Internal Server Error</h1></html>');
            console.log(err);
        }else{
            res.writeHead(200,{"Content-Type":"text/html"});
                res.write(html);
                 res.end();
        }   
    });
   
});


server.listen(port, (error) => {
    if (error) {
        console.log("Something went wrong while running the server",error);
    }
    console.log(`Server running on the port number ${port}...`)
});