const routes = require("express").Router();
const { users } = require("../modules/users");

routes.post("/", users.login);

module.exports = { routes };
