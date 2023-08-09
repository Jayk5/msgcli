const http = require('http');
const socketIO = require('socket.io');

const server = http.createServer();
const io = socketIO(server);

const PORT = 3000;

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
