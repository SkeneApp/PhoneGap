/**
 * Server to test app in the browser
 */

var
  http = require('http'),
  url = require('url'),
  path = require('path'),
  fs = require('fs');

var port = 3000;

var contentType = {
  html : 'text/html',
  css : 'text/css',
  js : 'text/javascript'
};

function notFound (req, res) {
  res.writeHead(404);
  res.end();
}

function onRequest(req, res) {
  var file = url.parse(req.url).pathname;

  if(!file.replace(/\//g, '').length) file = '/index.html';

  file = '.' + file;

  fs.readFile(file, function (err, data) {
    if(err) return notFound(req, res);

    var format = contentType[path.extname(file).slice(1)];

    if(!format) return notFound(req, res);

    res.writeHead(200, { 'Content-Type' : format });
    res.write(fs.readFileSync(file));
    return res.end();
  });
}

http.createServer(onRequest).listen(port);

console.log('Server is running on port ' + port);
