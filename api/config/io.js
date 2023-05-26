const { io } = require("./server");

let messages = [];
io.on("connection", (socket) => {
  console.log("connected", socket.id);
  socket.emit("previowsMessages", messages);
  socket.on("sendMessage", (data) => {
    console.log("🚀 ~ file: server.js:27 ~ socket.on ~ data:", data);
    messages.push(data);
    socket.emit("receivedMessage", data);
  });
});

module.exports = { io };
