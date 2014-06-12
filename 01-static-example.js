// Serve files out of the /static folder at the root level.
// For example /static/jwd.me.logo.png will be visible at /jwd.me.logo.png

var http = require('http');
var node_static = require('node-static');
var file = new node_static.Server('static');

http.createServer(function (req, res){
	file.serve(req, res);
}).listen(1337, '0.0.0.0');
console.log('server running.');