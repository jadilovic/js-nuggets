console.log('Express Server');
const http = require('http');
const { readFileSync } = require('fs');
const homePage = readFileSync('./navbar-app/index.html');
const stylesCss = readFileSync('./navbar-app/styles.css');
const browserApp = readFileSync('./navbar-app/browser-app.js');
const logoSvg = readFileSync('./navbar-app/logo.svg');

const server = http.createServer((req, res) => {
	console.log(req.url);
	console.log(req.method);
	if (req.url === '/') {
		res.writeHead(200, { 'content-type': 'text/html' });
		res.write(homePage);
		res.end();
	} else if (req.url === '/browser-app.js') {
		res.writeHead(200, { 'content-type': 'text/javascript' });
		res.write(browserApp);
		res.end();
	} else if (req.url === '/logo.svg') {
		res.writeHead(200, { 'content-type': 'image/svg+xml' });
		res.write(logoSvg);
		res.end();
	} else if (req.url === '/styles.css') {
		res.writeHead(200, { 'content-type': 'text/css' });
		res.write(stylesCss);
		res.end();
	} else if (req.url === '/about') {
		res.writeHead(200, { 'content-type': 'text/html' });
		res.write('<h1>About</h1>');
		res.end();
	} else {
		res.writeHead(404, { 'content-type': 'text/html' });
		res.write(
			'<h1>Error - no page at this path</h1>\n <a href="/">Back home</a>'
		);
		res.end();
	}
});

server.listen(5000);
