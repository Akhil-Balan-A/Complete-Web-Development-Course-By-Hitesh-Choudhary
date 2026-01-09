const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(path.join(__dirname, "index.html"), "utf-8", (err, data) => {
      const name = "Akhil Balan A";
      res.writeHead(200, { "Content-Type": "text/html" });
      if (err) {
        res.end(`<h1>${err}</h1>`);
      } else {
        let html = data;
        html = html.replace("{{name}}", name);
        res.end(html);
      }
    });
  } else if (req.url === "/about") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>About Page</h1>");
      
  } else if (req.url === "/api") {
      res.setHeader("Content-Type", "application/json");
      res.writeHead(200);
      res.end(
          JSON.stringify({
              name: "Akhil Balan A",
              age: 21
          })
      );
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Page Not Found</h1>");
  }
});

server.listen(5000, () => console.log("Server running..."));
