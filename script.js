/*
const http = require('http'); //carregou o módulo

let server = http.createServer((req, res) => { //criou o servidor no let
    console.log("URL:", req.url); //todas as solicitações do servidor são mandadas pro req e a reposta pro res
    console.log("METHOD:", req.method);
res.end("Ok")
});

server.listen(3000, '10.0.1.112', ()=>{ // a variável mandada pelo servidor vai ser ouvida na porta 3000
    //qualquer porta nao usada funciona, lembrando que o ip é o enredeço local

    console.log("sevidor rodando")
});
*/
//-----------------
/*
const http = require('http'); //carregou o módulo
let server = http.createServer(function (request, response) { //criou o servidor no let
    console.log("URL:", request.url); //todas as solicitações do servidor são mandadas pro req e a reposta pro res
    console.log("METHOD:", request.method);
    request.readableEnded("Ok")
});
server.listen(3000, '10.0.1.112', () => {
    //qualquer porta nao usada funciona, lembrando que o ip é o enredeço local
    console.log("servidor funfando");
} );

*/
//ACIMA SÓ TEM OS ERRADOS
const http = require('http');

let servidor = http.createServer(function (req, resp) {
    console.log("URL:", req.url); //todas as solicitações do servidor são mandadas pro req e a reposta pro res
    console.log("METHOD:", req.method);
  console.log('servidor funcionando');
  resp.end(`
      <html>
         <head>
             <meta charset="utf -8">
         </head>
         <body>
             <h1> Casa do Codigo </h1>
         </body>
      </html>
 ` );

});
servidor.listen(3000, ()=> {

    console.log("funfando")
});