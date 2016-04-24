var config = require('./config');

var mysql = require('mysql');
var express = require('express');
var app = express();
var server = require('http').createServer(app);

mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    db: 'lab_music_store'
});

server.listen(config.port, () => {
    console.log(`server listening at port ${config.port}`);
});

app.use(express.static(`${__dirname}/${config.staticDir}`));

app.get('/', getIndex);

function getIndex(request, response) {
    response.sendFile(`${__dirname}/index.html`);
}

function getAlbums() {

}

