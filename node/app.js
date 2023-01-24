const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end("Welcome to home page")
  }
  else if (req.url === '/about') {
    res.end('This is our history')
  } else {
    console.log("testing");
		res.end('Opps no this page')
	}
    // console.log(req);
  // res.write("Welcome to our home page");
  // res.end();
})

server.listen(5000);