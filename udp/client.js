var dgram = require('dgram');
var config = require('../common/config.json');


var client = dgram.createSocket('udp4');


var message = "Mustafa Gonul";


client.send(message, 0, message.length, config.port, config.address, function(err, bytes){
    if (err) 
        throw err;

    client.close();
});
