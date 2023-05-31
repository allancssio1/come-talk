const { io } = require("../config/server");

const messages = {
  chat: async (request, response) => {
    await io.on("connection", (socket) => {
      console.log("connection ok", socket.id);
    });
    console.log("chegou");

    response.json({
      ok: true,
    });
  },
};

module.exports = {
  messages,
};
