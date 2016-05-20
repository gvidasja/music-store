var express = require('express');
var db = require('./database');

var mapsController = express.Router();

mapsController.get('/album-types', getAlbumTypes);
mapsController.get('/record-labels', getRecordLabels);
mapsController.get('/artists', getArtists);
mapsController.get('/discounts', getDiscounts);

function getAlbumTypes(request, response) {
    db.query(`select id_Albumtype as id, name from albumtypes`, (error, rows) => {
        if (error) {
            response.status(400);
            response.send('invalid query');
        } else {
            response.send(rows);
        }
    });
}

function getRecordLabels(request, response) {
    db.query(`select id, name from recordlabels`, (error, rows) => {
        if (error) {
            response.status(400);
            response.send('invalid query');
        } else {
            response.send(rows);
        }
    });
}

function getArtists(request, response) {
    db.query(`select id, name from artists`, (error, rows) => {
        if (error) {
            response.status(400);
            response.send('invalid query');
        } else {
            response.send(rows);
        }
    });
}

function getDiscounts(request, response) {
    db.query(`select id, name from discounts`, (error, rows) => {
        if (error) {
            response.status(400);
            response.send('invalid query');
        } else {
            response.send(rows);
        }
    });
}

module.exports = mapsController;