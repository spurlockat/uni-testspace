var http = require('http');
var DateManager = require('./Date_Module');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("the current date and time is = " + DateManager.myDateTime());
}).listen(8080);
//run using "node server.js"

