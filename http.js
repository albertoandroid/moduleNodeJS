const http = require('http');

const server = http.createServer();

server.on('connection', (socket)=>{
    console.log('nueva conexión detectada')
})

server.listen(2012)
console.log('Escuchando en el puerto 2012...');