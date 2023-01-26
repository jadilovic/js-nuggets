const express = require('express');
const app = express();
const { register } = require('./middleware-register.js');
const authorize = require('./authorize.js');
const morgan = require('morgan');

// const register = (req, res, next) => {
// 	const method = req.method;
// 	const url = req.url;
// 	const time = new Date().getFullYear();
// 	console.log(method, url, time);
// 	// res.send('Testing middleware');
//   next();
// };

// app.use('/', [register, authorize]);
app.use(morgan('tiny'));

app.get('/', (req, res) => {
	// const method = req.method;
	// const url = req.url;
	// const time = new Date().getFullYear();
	// console.log(method, url, time);
	console.log('user name: ', req.user);
	res.send('Home');
});

app.get('/about', (req, res) => {
	// const method = req.method;
	// const url = req.url;
	// const time = new Date().getFullYear();
	// console.log(method, url, time);
	res.status(200).send('About');
});

app.get('/api/products', (req, res) => {
	res.send('Products');
});

app.get('/api/users', [register, authorize], (req, res) => {
	res.send('Users');
});

app.listen(5000, () => {
	console.log('Server is listening at port 5000');
});
