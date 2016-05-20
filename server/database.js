var mysql = require('mysql');
var config = require('../config');

var db = mysql.createConnection(config.mysql);

db.connect();

module.exports = db;