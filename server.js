var http = require('http');
var fs = require('fs');
var path = require('path');
var querystring = require('querystring');
var server = http.createServer(handler);
var message = "I am so happy to be part of the Node Girls workshop!";

function handler(request, response) {
    var method = request.method;
    var endpoint = request.url;
    console.log(endpoint);
    if (endpoint === "/") {
        response.writeHead(200, { "Content-Type": "text/html" });
        fs.readFile(__dirname + '/public' + '/index.html', function(error, file) {
            if (error) {
                console.log(error);
                return;
            }
            response.end(file);
        });
    } else if (endpoint === '/main.css') {
        response.writeHead(200, { "Content-Type": "text/css" });
        fs.readFile(__dirname + '/public/' + endpoint, function(error, file) {
            if (error) {
                console.log(error);
                return;
            }
            response.end(file);
        });
    } else if (endpoint === '/img/image.jpg') {
        response.writeHead(200, { "Content-Type": "image/jpg" });
        fs.readFile(__dirname + '/public' + endpoint, function(error, file) {
            if (error) {
                console.log(error);
                return;
            }
            response.end(file);
        });
        //...
    } else if (endpoint === '/favicon.ico') {
        response.writeHead(200, { "Content-Type": "image/x-icon" });
        fs.readFile(__dirname + '/public' + endpoint, function(error, file) {
            if (error) {
                console.log(error);
                return;
            }
            response.end(file);
        });
        // TODO - write your generic endpoint code here
    } else if (endpoint === '/create-post') {
        var allTheData = '';
        request.on('data', function(chunkOfData) {
            allTheData += chunkOfData;
        });

        request.on('end', function() {
            console.log(allTheData);
            var convertedData = querystring.parse(allTheData);
            console.log(convertedData);
            response.writeHead(301, { "Location": "/" });
            response.end();
        });
        // TODO - write your generic endpoint code here
    }
}






// function handler(request, response) {
//     var method = request.method;
//     console.log(method);
//     var endpoint = request.url;
//     console.log(endpoint);
//     response.writeHead(200, { "Content-Type": "text/html" });
//     if (endpoint === "/node")
//         response.write("/node")
//     else if (endpoint === "/girls")
//         response.write("/girls")
//     else
//         response.write(message); //response body


//     response.end(); //finish response
// }

server.listen(3000, function() {
    console.log("server is listening on port 3000. Ready to accept requests!")
});