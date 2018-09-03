var net = require('net');
var config = require('../common/config.json');


var client = new net.Socket();


// Connecting server
client.connect(config.port, config.host, function() {
    console.log('CONNECTED TO: ' + config.host + ':' + config.port);
    
    client.write('Mustafa Gonul');

});

// On data
client.on('data', function(data) {
    console.log('DATA: ' + data);

    client.destroy();
    
});

// On close
client.on('close', function() {
    console.log('Connection closed');
});
