var tasks = require("./tasks"); 

var http = require("http");
http.createServer(function(request, response) {
var randoTask = tasks[Math.floor(Math.random() * tasks.length)];	
response.writeHead(200, { "Content-type": "text/plain" });
response.write("Your random task: " + randoTask);
response.end();
}).listen(3000);