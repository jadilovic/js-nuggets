const express = require('express');
const path = require('path');
let {people} = require('./data.js')

const app = express();

app.use(express.static('./methods-public'));

// app.get('/', (req, res) => {
//   res.status(200).sendFile(path.resolve(__dirname, './methods-public/index.html'));
// })

app.get('/api/people', (req, res) => {
  res.status(200).json({success: true, data: people});
})
app.listen(5000, () => {
  console.log("Server is listening at port 5000");
})