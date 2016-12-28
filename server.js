var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

app.use(express.static(__dirname + '/public'));

app.listen(4000, function () {
    console.log('Example app listening on port 4000!');
});
