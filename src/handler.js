// var fs = require('fs');
// var querystring = require('querystring');

// function handler(request, response) {
//     var endpoint = request.url;
//     console.log(endpoint);
//     if (endpoint === "/") {
//         response.writeHead(200, { "Content-Type": "text/html" });
//         fs.readFile(__dirname + '/../public' + '/index.html', function(error, file) {
//             if (error) {
//                 console.log(error);
//                 return;
//             }
//             response.end(file);
//         });
//     } else if (endpoint === '/main.css') {
//         response.writeHead(200, { "Content-Type": "text/css" });
//         fs.readFile(__dirname + '/../public/' + endpoint, function(error, file) {
//             if (error) {
//                 console.log(error);
//                 return;
//             }
//             response.end(file);
//         });
//     } else if (endpoint === '/img/image.jpg') {
//         response.writeHead(200, { "Content-Type": "image/jpg" });
//         fs.readFile(__dirname + '/../public' + endpoint, function(error, file) {
//             if (error) {
//                 console.log(error);
//                 return;
//             }
//             response.end(file);
//         });
//         //...
//     } else if (endpoint === '/favicon.ico') {
//         response.writeHead(200, { "Content-Type": "image/x-icon" });
//         fs.readFile(__dirname + '/../public' + endpoint, function(error, file) {
//             if (error) {
//                 console.log(error);
//                 return;
//             }
//             response.end(file);
//         });
//         // TODO - write your generic endpoint code here
//     } else if (endpoint === '/create-post') {
//         var allTheData = '';
//         request.on('data', function(chunkOfData) {
//             allTheData += chunkOfData;
//         });

//         request.on('end', function() {
//             console.log(allTheData);
//             var convertedData = querystring.parse(allTheData);
//             console.log(convertedData);
//             response.writeHead(301, { "Location": "/" });
//             response.end();
//         });
//         // TODO - write your generic endpoint code here
//     }
// }

// module.exports = handler;