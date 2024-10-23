const http = require('node:http');

const server = http.createServer(function (req, res) {
    if (req.url === '/getSecretData') {
        res.end("There is no secret data.");
    } else {
        res.end("Hello World!");
    }
});

server.listen(5775);