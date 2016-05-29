var express = require( 'express' );
var config = require( '../config' );
var bodyParser = require( 'body-parser' );

var mapsRouter = require( './maps' );
var reportsRouter = require( './reports/reports' );

var albumsRouter = require( './albums/albums' );
var artistsRouter = require( './artists/artists' );
var discountsRouter = require( './discounts/discounts' );
var ordersRouter = require( './orders/orders' );
var paymentsRouter = require( './payments/payments' );
var promosRouter = require( './promos/promos' );
var recordLabelsRouter = require( './record-labels/record-labels' );
var tracksRouter = require( './tracks/tracks' );
var usersRouter = require( './users/users' );

var app = express();

app.get( '/', getIndex );
app.use( bodyParser.json() );

app.use( express.static( `${config.rootDir}/${config.staticDir}` ) );
app.use( express.static( `${config.rootDir}/node_modules/bootstrap/dist/` ) );

app.use( '/maps', mapsRouter );
app.use( '/reports', reportsRouter );

app.use( '/albums', albumsRouter );
app.use( '/artists', artistsRouter );
app.use( '/discounts', discountsRouter );
app.use( '/orders', ordersRouter );
app.use( '/payments', paymentsRouter );
app.use( '/promos', promosRouter );
app.use( '/record-labels', recordLabelsRouter );
app.use( '/tracks', tracksRouter );
app.use( '/users', usersRouter );

app.get( '/favicon.ico', ( request, response ) => {
    response.sendFile( `${config.rootDir}/${config.favicon}` );
} );

function getIndex( request, response ) {
    response.sendFile( `${config.rootDir}/index.html` );
}

module.exports = app;