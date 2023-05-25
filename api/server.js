const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const server = require("http").createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

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

server.listen(3000, () => {
  console.log("rum");
});
