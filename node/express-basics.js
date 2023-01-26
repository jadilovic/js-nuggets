const express = require('express');
const { resolve } = require('path');
const path = require('path');
const app = express();

// setup static and middleware
app.use(express.static('./public'));

// app.get('/', (req, res) => {
//   res.status(200).sendFile(path.resolve(__dirname, './navbar-app/index.html'));
// adding to static pages
// SSR Server Side Rendering
// })

app.get('/about', (req, res) => {
	res.status(200).send('About Page');
});

app.all('*', (req, res) => {
	res.status(404).send(`<h1>Error page</h1>`);
});

app.listen(5000, () => {
	console.log('Server is listening on port 5000');
});

// app.get
// app.post
// app.put
// app.delete
// app.use
// app.listen
// app.all
