let express = require('express');
let routesUsers = express.Router();

routesUsers.get("/users", (req, resp) => {
  req.statusCode = 200; //quando o usuário conecta com o servidor ele retorna um status code
  //se for 200, a conexão deu certo
  resp.setHeader("Content-Type", "application/json"); //Aqui eu to passando o tipo do conteudo
  //e avisando que é Html
  //----------

  resp.json({
    users: [
      {
        name: "Reinaldo Ramos",
        email: "Reinaldo_RAmos@gmail.com",
        id: 1,
      },
    ],
  });
});

module.exports = routesUsers;