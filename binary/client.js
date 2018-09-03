var net = require('net');
var config = require('./config.json');
var prepare = require('./prepare-struct');


var client = new net.Socket();


// Connecting server
client.connect(config.port, config.host, function() {
    console.log('CONNECTED TO: ' + config.host + ':' + config.port);
    
    client.write(prepare.buffer2());
});

// On data
client.on('data', function(data) {
    prepare.log(data);

    client.destroy();
    
});

// On close
client.on('close', function() {
    console.log('Connection closed');
});
