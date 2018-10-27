var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('Epitech project : API in NodeJS')
})

app.listen(port);

console.log('API server started on: ' + port);

