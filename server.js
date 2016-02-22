/*var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request,response){
	var url = request.url;
	try{
		var fileName = url.substring(1);
		var file = fs.readFileSync(fileName);
		response.end(file);
	}
	catch(er){
		var error = fs.readFileSync("error.html");
		response.end(error);
	}
	

});
server.listen(8080);
console.log("Your Web Server is running in port 8080");*/

var  http = require('http');
var fileSystem = require('fs');

var hostname = '127.0.0.1';
var port = 1337;
var voteCount = 0;

http.createServer((request, response) => {
	var url = request.url;
	console.log('*********************' + request.method)
	try{
		var fileName = url.substring(1);
		/*if (url.match(/submitValue/)) {

			voteCount++;
			console.log('voteCount is ' + voteCount);
		}*/
		if (request.method == 'POST') {
			
			console.log("[200] " + request.method + " to " + request.url);
		    request.on('data', function(chunk) {
		      console.log("Received body data:");
		      console.log(chunk.toString());
		    });
		}

		var file = fileSystem.readFileSync(fileName);
		response.end(file);
	}catch(err){
		var errorFile = fileSystem.readFileSync('error.html');
		response.end(errorFile);
	}
  //res.writeHead(200, { 'Content-Type': 'text/plain' });
  //res.end('Hello World\n');
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});