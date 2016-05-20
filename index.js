require.extensions['.sql'] = require('./server/sql-reader');

var config = require('./config');
var app = require('./server/express');
var server = require('http').createServer(app);

server.listen(config.port, () => {
    console.log(`server listening at port ${config.port}`);
});
