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
var bodyParser = require("body-parser");
var fileSystem = require("fs");
var app = express();
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

var server = app.listen(8081 ,function () {

  //var host = server.address().address
  var port = server.address().port

  console.log("App listening at http://%s:%s", port)

})

app.get('/', function(req, res){
	console.log('no url******');
	console.log(req.url);
});

app.get('/index.html', function (req, res) {
	console.log(req.url.toString(1));
	//console.log('asdfghjkl---' + req.app);
	//var file = fileSystem.readFileSync(req.url.toString(1));
	//res.end(index.html);
   	res.sendFile( __dirname + "/" + "index.html" );
});


var readFrom = require('./response.json');
app.post('/submitValue', function (req, res) {
    var name = JSON.stringify(req.body.name);
    var choice = req.body.choice;
   response = {
       value: choice//req.query.weekend --name + ' good luck for your weekdays, this weekend was ' + choice
   };   
   readFrom.userChoice.push(response);
   fileSystem.writeFile('./response.json', JSON.stringify(readFrom));
   res.end(JSON.stringify(response));
});
app.post('/gettotalcount', function(request, response){
	var name = request.body.username;
	var password = request.body.password;
	console.log('sending all saved response from user ' + name);
	var readUserList = require('./auth.json');
	//if (request.body.username =) {}
	//console.log(readUserList.userCredentials[0].username);
	readUserList.userCredentials.forEach(function(obj){
		console.log(obj.username);

		if (obj.username === name && obj.password === password) {
			console.log('user found');
			response.end(JSON.stringify(readFrom));
		}
	});
});

app.get('/submitValue', function (req, res) {
	console.log('in submitValue GET');
	//console.log(req.query.name);
   // Prepare output in JSON format
   console.log(req.method);
   console.log(req.ip);
   console.log(req.query.weekend);
   var str = JSON.stringify(req.method);
   console.log(str);
   response = {
       value:'always gooood'//req.query.weekend//req.query.weekend
   };
   console.log(response);
   
   res.end(JSON.stringify(response));
   console.log('object sent');
});
app.get('/logo.PNG', function(res, req){
	console.log('+++++++++' +res.url.toString(1));
	res.download('logo.PNG');
	//res.sendFile(__dirname + "/"+"error.html");
});

