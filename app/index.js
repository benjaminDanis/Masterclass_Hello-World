const http = require('http');
const url = require('url');
const config = require('./config');

const server = http.createServer((req, res) => {
    // Get the URL and parse
    const parsedUrl = url.parse(req.url, true);

    // Get the path
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');

    // Get query string as an obj
    const queryStringObject = parsedUrl.query;
    console.log(queryStringObject)
    // Get method

    // Get headers

    res.end();
})

server.listen(config.port, () => {
    console.log(`Listening on port ${config.port} in ${config.envName} mode`);
})