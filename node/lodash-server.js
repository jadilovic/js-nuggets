const _ = require('lodash');
const http = require('http');

// const server = http.createServer((req, res) => {
// 	console.log('request made');
// 	res.end('hello guys');
// });

const arr = [1, [2, [3, [4, [5]]]]];

console.log(_.flatMapDeep(arr));
console.log('hello dear');
setTimeout(() => {
	console.log('hello from set timeout');
}, 0);
console.log('end');

server.listen(5000, () => {
	console.log('Server is listening at port 500');
});

// setInterval(() => {
//   console.log("interval");
// }, 2000);

// console.log("end of code");


const http = require('http');
const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.end('home');
	}
	if (req.url === '/about') {
		res.end('about');
	}
	// res.end('error')
});

server.listen(5000, () => {
	console.log('Server listening at port 5000');
});