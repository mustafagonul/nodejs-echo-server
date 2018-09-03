var dgram = require('dgram');
var config = require('../common/config.json');


var server = dgram.createSocket('udp4');


// On listening
server.on('listening', function() {
    console.log('LISTENING: ' + config.host +':'+ config.port);
});


// On message
server.on('message', function(data, remote) {
    console.log('DATA ' + remote.address + ': ' + data);

    var message = data + " coming from Echo Server!";

    server.send(message, 0, message.length, remote.port, remote.address, function(err, bytes){
        if (err) 
            throw err;
    });
    
});
    

// On error
server.on('error', (err) => {
    console.log(`ERROR: ${err.stack}`);
    
    server.close();
});


// On close
server.on('close', function(data) {
    console.log('CLOSED: ' + socket.remoteAddress +' '+ socket.remotePort);
});


server.bind(config.port, config.host);

console.log('Server listening on ' + config.host +':'+ config.port);
