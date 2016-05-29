var express = require( 'express' );
var db = require( './../database' );
var helpers = require( './../helpers' );
var promise = require( 'promise' );

var queries = {
    albums: require( './albums.sql' ),
    albumsByLabels: require( './albums-by-label.sql' ),
    albumsByArtists: require( './albums-by-artist.sql')
};

var reportsController = express.Router();

reportsController.post( '/albums', getAlbumsReport );
reportsController.post( '/orders', getOrdersReport );
reportsController.post( '/tracks', getTracksReport );

function getAlbumsReport( request, response ) {
    var data = {
        artist: { field: 'id', data: request.body.artist },
        recordLabel: { field: 'id', data: request.body.recordLabel }
    };

    var query = helpers.insertConditions( queries.albums, data );

    promise.all([
        toPromise( helpers.insertData( query, data ) ),
        toPromise( helpers.insertConditions( queries.albumsByLabels, data ) ),
        toPromise( helpers.insertConditions( queries.albumsByArtists, data ) )
    ]).then( responses => {
        response.send( responses );
    }, error => {
        response.status( 400 );
        response.send( error.message );
    });
}

function getOrdersReport( request, response ) {
    var data = {
        from: { field: 'date', data: request.body.artist },
        to: { field: 'date', data: request.body.recordLabel }
    };

    var query = helpers.insertConditions( queries.albums, data );
    var requests = [];

    requests.push( db.query( helpers.insertData( query, data ), ( error, rows ) => {
        if( error ) {
            response.status( 400 );
            response.send( error.message );
        } else {
            response.send( rows );
        }
    } ) );
}

function getTracksReport( request, response ) {
    var data = {
        artist: { field: 'id', data: request.body.artist },
        recordLabel: { field: 'id', data: request.body.recordLabel }
    };

    var query = helpers.insertConditions( queries.albums, data );
    var requests = [];

    requests.push( db.query( helpers.insertData( query, data ), ( error, rows ) => {
        if( error ) {
            response.status( 400 );
            response.send( error.message );
        } else {
            response.send( rows );
        }
    } ) );
}

function toPromise( query ) {
    return new promise( ( resolve, reject ) => {
        db.query( query, ( error, rows ) => {
            if ( error ) reject( error );
            else resolve( rows );
        })
    })
}

module.exports = reportsController;