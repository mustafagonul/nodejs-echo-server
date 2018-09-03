var net = require('net');
var config = require('../common/config.json');
var prepare = require('../common/prepare-struct');


net.createServer(function(socket) {
    console.log('CONNECTED: ' + socket.remoteAddress +':'+ socket.remotePort);
    
    // On data
    socket.on('data', function(data) {        
        console.log('DATA ' + socket.remoteAddress + ': ' + data);

        prepare.log(data);
        
        socket.write(data);
    });
    
    // On close
    socket.on('close', function(data) {
        console.log('CLOSED: ' + socket.remoteAddress +' '+ socket.remotePort);
    });
}).listen(config.port, config.host);

console.log('Server listening on ' + config.host +':'+ config.port);
