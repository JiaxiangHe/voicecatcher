const static = require('node-static');

let port = 8080;
 
// 
// Create a node-static server instance to serve the './public' folder 
// 
let file = new static.Server('./public');
 
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        // 
        // Serve files! 
        // 
        file.serve(request, response);
    }).resume();
}).listen(port);

console.log('start listen ' + port)