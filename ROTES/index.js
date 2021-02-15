app.get("/", (req, resp) => {
    req.statusCode = 200; //quando o usuário conecta com o servidor ele retorna um status code
    //se for 200, a conexão deu certo
    resp.setHeader("Content-Type", "text/html"); //Aqui eu to passando o tipo do conteudo
    //e avisando que é Html
    //----------
  
    resp.end("<h1>Ola</h1>"); //pedindo pra mandar uma res que cria um h1 com Ola escito
  });