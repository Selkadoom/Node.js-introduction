const express = require("express");

let app = express();

app.get(function (req, resp) {
  console.log("URL:", req.url); //todas as solicitações do servidor são mandadas pro req e a reposta pro res
  console.log("METHOD:", req.method);
  switch (req.url) {
    case "/":
      req.statusCode = 200; //quando o usuário conecta com o servidor ele retorna um status code
      //se for 200, a conexão deu certo
      resp.setHeader("Content-Type", "text/html"); //Aqui eu to passando o tipo do conteudo
      //e avisando que é Html
      //----------

      resp.end("<h1>Ola</h1>"); //pedindo pra mandar uma res que cria um h1 com Ola escito

      break;

    case "/users":
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

    default:
      resp.end(`
        <html>
           <head>
               <meta charset="utf -8">
           </head>
           <body>
               <h1> Casa do Codigo </h1>
           </body>
        </html>
   `);
  }
});
servidor.listen(3000, () => {
  console.log("funfando");
});
