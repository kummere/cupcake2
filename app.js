var express = require("express");
var app = express();

app.listen(8000, function() {
    console.log('start server on port 8000');
});

app.get('/hello, function (request, response) {' +
    'response.send('Hello World!');
});

app.get('/', function (request, response) {
    resoponse.sendFile(__dirname + "\\index.html");
});