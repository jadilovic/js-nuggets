const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
	res.send('<h1>Home Page</h1>\n<a href="./api/products">products</a>');
});

app.get('/api/products', (req, res) => {
	const newProducts = products.map((item) => {
		const { id, name, image } = item;
		return { id, name, image };
	});
	res.json(newProducts);
});

app.get('/api/products/:productId', (req, res) => {
	const { productId } = req.params;
	const product = products.find((item) => item.id === Number(productId));
	if (!product) {
		return res
			.status(404)
			.send(
				`<h1>Not found 404</h1>\n<a href="/api/products">Back to products</a>`
			);
	}
	return res.json(product);
});

app.get('/api/products/:id/reviews/:pass', (req, res) => {
	console.log(req.params);
	res.send(req.params);
});

app.get('/api/v1/query', (req, res) => {
	console.log(req.query);
	const { name, id, limit } = req.query;
	let newProducts = [...products];
	if (name) {
		newProducts = products.filter((product) => {
			return product.name.startsWith(name);
		});
		//  return res.json(newProducts)
	}
	if (id) {
		const product = products.find((product) => product.id === Number(id));
		return res.json(product);
	}
	if (limit) {
		newProducts = newProducts.slice(0, Number(limit));
	}
	if (newProducts.length < 1) {
		// res.status(200).send("No products found");
		return res.status(200).json({ success: true, msg: 'No products found' });
	}
	res.json(newProducts);
});

app.listen(5000, () => {
	console.log('Server is listening at port 5000');
});
