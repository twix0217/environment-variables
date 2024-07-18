require('dotenv').config();
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('The server is running');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
  console.log(`Youre secret key is ${process.env.SECRET_PASSWORD} `)
});