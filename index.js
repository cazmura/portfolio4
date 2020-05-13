var http = require("http");

var fs = require('fs');

var server = http.createServer(function (request, response) {
    fs.readFile('./index.html', 'utf-8', function (error, data) {
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.write(data);
        response.end();
    });
});

var port = process.env.PORT || 3000;
server.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});