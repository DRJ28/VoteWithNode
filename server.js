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

/*var  http = require('http');
var fileSystem = require('fs');
var express = require('express');
var app = express();
var hostname = 'localhost';
var port = 1337;
var voteCount = 0;

app.post('/submitValue', function (req, res) {
	console.log(req.url);
   	console.log("Got a POST request for the homepage");
   	res.end('Hello POST');
})
http.createServer((request, response) => {
	var url = request.url;
	console.log('*********************' + request.method+'--'+url)
	try{
		var fileName = url.substring(1);
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
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/
//var fileSystem = require('fs');
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/index.html', function (req, res) {
	console.log(req.url.toString(1));
	console.log('asdfghjkl');
	//var file = fileSystem.readFileSync(req.url.toString(1));
	//res.end(index.html);
   	res.sendFile( __dirname + "/" + "index.html" );
});

app.get('/submitValue', function (req, res) {
	console.log('in submitValue');
	console.log(req.query.name);
   // Prepare output in JSON format
   response = {
       value:req.query.weekend
   };
   console.log(response);
   res.end(JSON.stringify(response));
});

var server = app.listen(8081,'localhost' ,function () {

  var host = server.address().address
  var port = server.address().port

  console.log("App listening at http://%s:%s", host, port)

})