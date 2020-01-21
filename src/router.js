const handlers = require('./handler.js')


const router = (request, response) => {
    const url = request.url;
    if (url === "/") {
        handlers.handleHomeRoute(request, response)
    } else if (url === "/create/post") {
        handlers.handleCreatePost(request, response)
    } else {
        handlers.handlePublic(request, response)
    }
}
module.exports = router;