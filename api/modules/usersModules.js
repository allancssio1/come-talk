const { randomUUID } = require("node:crypto");
const users = [
  {
    id: randomUUID(),
    username: "b",
    name: "b",
    password: "1",
  },
  {
    id: randomUUID(),
    username: "a",
    name: "a",
    password: "1",
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
