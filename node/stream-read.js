const { createReadStream } = require('fs');

const stream = createReadStream('./content/big.txt', {
	highWaterMark: 90000,
	encoding: 'utf-8',
});

stream.on('data', (data) => {
	console.log(data);
});

stream.on('error', (error) => {
	console.log(error);
});


// on server

const http = require('http');
const { readFileSync, createReadStream } = require('fs');

http
	.createServer((req, res) => {
		// const text = readFileSync('./content/big.txt', 'utf-8');
		// res.end(text);
		const fileStream = createReadStream('./content/big.txt', 'utf-8');
		fileStream.on('open', () => {
			fileStream.pipe(res);
		});
		fileStream.on('error', (error) => {
			res.end(error);
		});
	})
	.listen(5000);