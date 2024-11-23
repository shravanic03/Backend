const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to Home!");
  } else if (req.url === "/about") {
    res.end("Welcome to About");
  } else {
    res.end(
      `<h1>Error</h1>
       <a href="/">Back to Home</a>` // Fixed typo: hred -> href
    );
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});
console.log("Hello!");
