const http = require('http');

/*
const server = http.createServer();

server.on('connection', (socket)=>{
    console.log('nueva conexión detectada')
})

server.listen(2012)
console.log('Escuchando en el puerto 2012...');
*/

/*
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('hola mundo');
        res.write('desde NodeJS');
        res.end();
    }

    if(req.url == '/coches'){
        res.write('coche1');
        res.end();
    }
});
server.listen(3030);
console.log('Escuchando en puerto 3030...');
*/

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1> Hola a todos</h1>');
    res.write('<p> Mi web de coches</p>');
    res.end();
}).listen(5050);


