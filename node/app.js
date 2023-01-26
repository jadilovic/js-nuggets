const express = require('express');
const path = require('path');
const people = require('./routes/people')
const auth = require('./routes/auth')

const app = express();

// static assets
app.use(express.static('./methods-public'));
// parse from data req.body
app.use(express.urlencoded({extended: false}));
// parse json
app.use(express.json());
// routes
app.use('/api/people', people);

app.use('/login', auth)

// app.get('/', (req, res) => {
//   res.status(200).sendFile(path.resolve(__dirname, './methods-public/index.html'));
// })

app.listen(5000, () => {
  console.log("Server is listening at port 5000");
})