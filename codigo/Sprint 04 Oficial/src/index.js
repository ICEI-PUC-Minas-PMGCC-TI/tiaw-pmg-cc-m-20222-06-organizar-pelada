const fs = require('fs');
const http = require('http');

http.createServer(function (req, res) {
  if (req.url === '/') {
    fs.readFile(__dirname + '/index.html', function (err, data) {
      if (err) {
        res.writeHead(404);
        res.end(JSON.stringify(err));
      }
      res.writeHead(200);
      return res.end(data);
    });
  } else {
    fs.readFile(__dirname + req.url, function (err, data) {
      if (err) {
        res.writeHead(404);
        res.end(JSON.stringify(err));
      }
      res.writeHead(200);
      return res.end(data);
    });
  }
}).listen(process.env.PORT);
