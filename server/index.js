const http = require("http");
const socketIO = require("socket.io");

const server = http.createServer();
const io = socketIO(server);

const PORT = 3000;

const rooms = {};

io.on("connection", (socket) => {
  socket.on("join", ({ username, room }) => {
    socket.join(room);
    if (!rooms[room]) {
      rooms[room] = [];
    }
    rooms[room].push({ id: socket.id, username });
    socket.broadcast.to(room).emit("message", `${username} has joined the chat.`);
  });

  socket.on("sendMessage", ({ message, room }) => {
    const user = rooms[room].filter((u) => u.id === socket.id)[0];
    socket.broadcast.to(room).emit("message", `${user.username}: ${message}`);
  });

  socket.on("disconnect", () => {
    const roomArr = Object.keys(rooms);
    roomArr.forEach((roomId) => {
      for (let user of rooms[roomId]) {
        if (user.id === socket.id) {
          io.to(roomId).emit("message", `${user.username} has left the chat`);
        }
      }
      rooms[roomId] = rooms[roomId].filter((userObj) => {
        userObj.id !== socket.id;
      });
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
