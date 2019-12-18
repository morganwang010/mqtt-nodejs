var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://127.0.0.1:1883');
client.on('connect', function () {
setInterval(function() {
client.publish('myTopic', new Date() + 'Hello mqtt');
console.log('Message Sent');
}, 1000);
});
