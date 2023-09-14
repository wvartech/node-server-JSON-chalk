const chalk = require('chalk');
const http = require('http');
const HOST = 'localhost';
const PORT = '8080';

const server = http.createServer( (req, res) => {

    res.setHeader('Content-Type', 'application/json');

    const respuestaJSON = {
        name: 'William',
        message: 'Este es un mensaje de respuesta en formato JSON'
    };

    res.end(JSON.stringify(respuestaJSON));

});

server.listen(PORT,HOST, () => {
    console.log(chalk.green('listening on: ' + HOST + ':' + PORT));
});