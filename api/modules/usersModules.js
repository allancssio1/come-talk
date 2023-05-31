const { randomUUID } = require("node:crypto");
const users = [
  {
    id: randomUUID(),
    username: "allan",
    name: "allan",
    password: "123456",
  },
];

const usersModules = {
  findUser: async (username) => {
    return await users.find((user) => user.username === username);
  },
  create: async (username, password, name) => {
    users.push({
      id: randomUUID(),
      name,
      username,
      password,
    });
  },
};

module.exports = { usersModules };
