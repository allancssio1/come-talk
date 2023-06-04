const { server, io } = require("./config/server");

io.on("connection", (socket) => {
  socket.on("sendMessage", (data) => {
    console.log("🚀", data);
    socket.emit(`receivedMessage-${data.receivedId}`, data);
  });
});

server.listen(3000, () => {
  console.log("rum");
});
