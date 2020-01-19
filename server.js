var http = require('http');
var fs = require('fs');
var server = http.createServer(handler);
var message = "I am so happy to be part of the Node Girls workshop!";

function handler(request, response) {

    if (endpoint === "/") {
        response.writeHead(200, { "Content-Type": "text/html" });
        fs.readFile(__dirname + '/public/index.html', function(error, file) {
            if (error) {
                console.log(error);
                return;
            }
            response.end(file);
        });
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