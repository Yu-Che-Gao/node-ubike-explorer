var server = require('http').createServer()
  , url = require('url')
  , WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({ server: server })
  , express = require('express')
  , app = express()
  , port = process.env.PORT || 4080;

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.send({ msg: "hello" });
  next();
});

wss.on('connection', function connection(ws) {
  var location = url.parse(ws.upgradeReq.url, true);
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
  
  ws.send('this is something');
});

server.on('request', app);
server.listen(port, function () { console.log('Listening on ' + server.address().port) });