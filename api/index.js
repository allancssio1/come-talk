const { server, io } = require("./config/server");

io.on("connection", (socket) => {
  io.on("params", (data) => {
    console.log("data:", data);
  });
  socket.on("sendMessage", (data) => {
    socket.broadcast.emit("receivedMessage", data);
  });
});

server.listen(3000, () => {
  console.log("rum");
});
