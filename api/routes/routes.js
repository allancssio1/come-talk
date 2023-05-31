const routes = require("express").Router();
const { users } = require("../controllers/userController");

routes.post("/login", users.login);

module.exports = { routes };
