// create a route otherwise serve files out of /static

var http = require('http');
var node_static = require('node-static');
var file = new node_static.Server('static');
var fv = require('./views/first-view.js');
var url = require('url');

http.createServer(function (req, res){
	if (url.parse(req.url).pathname == '/first-view') {
		fv.serve(req, res);
	} else {
		file.serve(req, res);
	}
}).listen(1337, '0.0.0.0');
console.log('server running.');