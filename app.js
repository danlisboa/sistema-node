console.log('Sistema node ...');

const http = require('http')
const port = 3000
const ip = 'localhost'
 
const server = http.createServer((req, res) => {
  console.log('Recebendo uma request!')
  res.end('<h1>Resposta!</h1>')
})
 
server.listen(port, ip, () => {
  console.log(`Servidor rodando em http://${ip}:${port}`)
})
