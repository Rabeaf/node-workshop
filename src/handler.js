var fs = require('fs');
var path = require('path');
var querystring = require('querystring');

const handleHomeRoute = (request, response) => {
    const indexFilePath = path.join(__dirname, '..', 'public', 'index.html');
    fs.readFile(indexFilePath, (err, file) => {
        if (err) {
            console.log(err);
            response.writeHead(500);
            response.end('an error occured');
        } else {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(file)
        }
    })
}

const handlePublic = (request, response) => {

    const url = request.url;
    console.log(url);
    const extension = url.split('.')[1]
    const extensionType = {
        html: 'text/html',
        css: 'text/css',
        js: 'application/javascript',
        ico: 'image/x-icon',
        jpg: 'image/jpg',
        png: 'image/png'
    }
    const filePath = path.join(__dirname, '..', 'public', url);
    fs.readFile(filePath, (err, file) => {
        if (err) {
            console.log(err);
            response.writeHead(500);
            response.end('an error occured');
        } else {
            response.writeHead(200, { 'Content-Type': extensionType[extension] })
            response.end(file);
        }
    });

}

const handleLoadPosts = (request, response) => {
    const url = request.url;
    console.log(url);
    var posts = require('./posts.json');
    response.end(JSON.stringify(posts));
}

const handleCreatePost = (request, response) => {
    const url = request.url;
    console.log(url);
    var allTheData = '';
    request.on('data', function(chunkOfData) {
        allTheData += chunkOfData;
    });
    request.on('end', function() {
        console.log(allTheData);
        var convertedData = querystring.parse(allTheData);
        console.log(convertedData);
        var data = require('./posts.json');
        data[Date.now()] = convertedData["post"];
        fs.writeFile("./src/posts.json", JSON.stringify(data), function(err) {
            if (err) {
                console.log(err);
            }
            console.log(data)
        });
        response.writeHead(301, { "Location": "/" });
        response.end();
    });
}

module.exports = { handleHomeRoute, handlePublic, handleLoadPosts, handleCreatePost }