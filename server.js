const fs = require('fs');
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 9090 });

topics = ['/imu_raw', '/nmea_sentence', '/odom', '/points_raw', '/image_compressed']

for(var i = 0; i < topics.length; i++){
    var dirname = '.'+topics[i]
    if( !fs.existsSync(dirname))
        fs.mkdirSync(dirname)    
}

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    //console.log('received: %s', message);
    body = JSON.parse(message);

    if( body.msg){
        var file = '.' + body.topic + "/" + body.msg.header.seq + ".json"
        fs.writeFile(file, JSON.stringify(body))    
    }
    else
        console.log( body)
  });

  //ws.send('something');
});
