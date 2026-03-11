const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hey this msg is msg from mars')
})

server.listen(4000, '127.0.0.1', () => {
    console.log('Server started successfully')
})