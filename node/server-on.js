const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
	console.log('here i am');
	res.end('hello request');
});

server.listen(5000, () => {
	console.log('Server is listening at 5000');
});
