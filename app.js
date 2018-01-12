console.log('Sistema node ...');

var http = require('http');
var port = 3000;
var ip = 'localhost';

var server = http.createServer((req, res) => {
  console.log('Recebendo uma request!');
  res.end('<h1>Resposta!</h1>');
});

server.listen(port, ip, () => {
  console.log(`Servidor rodando em http://${ip}:${port}`);
});
