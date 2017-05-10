'use strict';

const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(9000, function () {
  console.log('Hello World listening on port 9000!')
})
