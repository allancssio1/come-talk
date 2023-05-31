const { utils } = require("../utils");
const { usersModules } = require("../modules/usersModules");

const users = {
  login: async (request, response) => {
    try {
      const { username, password } = request.body;

      if (!username || !password)
        return response.json({
          message: "Nome de usuário e senha são obrigatórios!",
        });

      const userExists = await usersModules.findUser(username);

      if (!userExists)
        return response.json({ message: "Usuário não cadastrado." });

      // const verifyPermission = await utils.comparePassword(userExists.password);

      // if (!verifyPermission)
      //   return response.json({
      //     message: "Nome de usuário ou senha inválidos.",
      //   });

      return response.json({
        message: "login efetuado com sucesso.",
        user: {
          name: userExists.name,
          username: userExists.username,
          id: userExists.id,
        },
      });
    } catch (error) {
      return response.json({
        message: "Erro de login",
      });
    }
  },
  create: async (request, response) => {
    const { username, name, password } = request.body;

    const userExists = await usersModules.findUser(username);

    if (userExists) return response.json({ message: "Usuário já cadastrado." });

    const passwordHash = await utils.convetPasswordInHash(password);
    try {
      await usersModules.create(username, passwordHash, name);
      return response.json({ message: "Usuário criado com sucesso." });
    } catch (error) {
      return response.json({ message: "Erro de criação" });
    }
  },
};

module.exports = {
  users,
};
