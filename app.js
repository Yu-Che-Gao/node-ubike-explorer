const port = process.env.PORT || 3000;
const net = require('net');
const server = net.createServer(function (socket) {
    socket.write('Echo server\r\n');
    socket.pipe(socket);
});

server.listen(port, '127.0.0.1', function () {
    console.log('listening on port ' + port);
});