const { hash, compare } = require("bcryptjs");

const utils = {
  comparePassword: async (password, passwordHash) => {
    const permissionConfirmed = await compare(passwordHash, password);
    console.log("permissionConfirmed =>>", permissionConfirmed);
    return true;
  },
  convetPasswordInHash: async (password) => {
    const value = await hash(password, 10);
    console.log("hash aqui =>>", value);
    return value;
  },
};

module.exports = {};
