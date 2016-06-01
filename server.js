var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/client'));

app.get('/whoami', function (req, res) {
  var obj = {};
  obj.ipaddress = req.headers['x-forwarded-for'];
  obj.language = req.headers['accept-language'];
  obj.ipaddress = req.headers['x-forwarded-for'];
  obj.software = req.headers['user-agent'];
  res.send(obj).end();
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});