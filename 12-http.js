const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  if (req.url === "/") {
    res.end("Welcome to oour homepage");
  }
  if (req.url === "/about") {
    res.end("This is the about page");
  }
  res.end('cant find the page')
    
});

server.listen(5000);
