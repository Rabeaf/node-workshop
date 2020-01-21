const http = require('http');
const router = require('./src/router')
const server = http.createServer(router);

server.listen(3000, function() {
    console.log("server is listening on port 3000. Ready to accept requests!")
});