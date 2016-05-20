var express = require('express');
var config = require('../config');
var bodyParser = require('body-parser');

var mapsRouter = require('./maps');
var albumsRouter = require('./albums/albums');

var app = express();

app.get('/', getIndex);
app.use(bodyParser.json());

app.use(express.static(`${config.rootDir}/${config.staticDir}`));
app.use(express.static(`${config.rootDir}/node_modules/bootstrap/dist/`));

app.use('/albums', albumsRouter);
app.use('/maps', mapsRouter);

function getIndex(request, response) {
    response.sendFile(`${config.rootDir}/index.html`);
}

module.exports = app;