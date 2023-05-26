const users = {
  login: (request, response) => {
    console.log(request);
    return response.send("eu");
  },
};

module.exports = {
  users,
};
