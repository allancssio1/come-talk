const app = require("express")();
const { routes } = require("../routes/routes");
const cors = require("cors");

// app.use(cors("http://localhost:5173"));
app.use(cors());
app.use(require("express").json());
app.use(routes);

const server = require("http").createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

module.exports = {
  io,
  server,
};
