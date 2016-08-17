const server = require('http').createServer()
const url = require('url')
const WebSocketServer = require('ws').Server
const wss = new WebSocketServer({ server: server })
const express = require('express')
const app = express()
const port = process.env.PORT || 4080;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.send({ msg: 'hello, it is ' + Date.now() });
  next();
});

wss.on('connection', (ws) => {
  let location = url.parse(ws.upgradeReq.url, true);
  ws.on('message', (message) => {
    console.log('received: ' + message);

  });

  sendAction();
  function sendAction() {
    ws.send('this is something ' + Date.now());
    setTimeout(sendAction, 1000);
  }


});

server.on('request', app);
server.listen(port, () => { console.log('Listening on ' + server.address().port) });