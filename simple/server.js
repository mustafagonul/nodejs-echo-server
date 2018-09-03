var net = require('net');
var config = require('../common/config.json');


net.createServer(function(socket) {
    console.log('CONNECTED: ' + socket.remoteAddress +':'+ socket.remotePort);
    
    // On data
    socket.on('data', function(data) {        
        console.log('DATA ' + socket.remoteAddress + ': ' + data);

        socket.write(data + " coming from Echo Server!");
    });
    
    // On close
    socket.on('close', function(data) {
        console.log('CLOSED: ' + socket.remoteAddress +' '+ socket.remotePort);
    });
}).listen(config.port, config.host);

console.log('Server listening on ' + config.host +':'+ config.port);
