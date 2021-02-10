const express = require("express");

let app = express();

app.get("/", (req, resp) => {
  req.statusCode = 200; //quando o usuário conecta com o servidor ele retorna um status code
  //se for 200, a conexão deu certo
  resp.setHeader("Content-Type", "text/html"); //Aqui eu to passando o tipo do conteudo
  //e avisando que é Html
  //----------

  resp.end("<h1>Ola</h1>"); //pedindo pra mandar uma res que cria um h1 com Ola escito
});

app.get("/users", (req, resp) => {
  req.statusCode = 200; //quando o usuário conecta com o servidor ele retorna um status code
  //se for 200, a conexão deu certo
  resp.setHeader("Content-Type", "application/json"); //Aqui eu to passando o tipo do conteudo
  //e avisando que é Html
  //----------

  resp.end(
    JSON.stringify({
      users: [
        {
          name: "Reinaldo Ramos",
          email: "Reinaldo_RAmos@gmail.com",
          id: 1,
        },
      ],
    })
  );
});

app.listen(3000, () => {
  console.log("funfando");
});
