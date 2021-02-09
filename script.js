const http = require('http');

let server = http.createServer((req, res) => {
    console.log("URL:", req.url);
    console.log("METHOD:", req.method);

});

server.listen(3000, '10.0.1.112', ()=>{

    
})