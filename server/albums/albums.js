var express = require( 'express' );
var db = require( './../database' );

var queries = {
    getAlbums: require( './get-albums.sql' ),
    getAlbum: require( './get-album.sql' ),
    saveAlbum: require( './save-album.sql' ),
    deleteAlbum: require( './delete-album.sql' ),
    countAlbums: require( './count-albums.sql' )
};

var albumsController = express.Router();

albumsController.get( '/', getAlbums );
albumsController.get( '/:id', getAlbum );
albumsController.post( '/', saveAlbum );

function getAlbums( request, response ) {
    db.query( queries.getAlbums, ( error, rows ) => {
        if( error ) {
            response.status( 400 );
            response.send( 'Invalid query' );
        } else {
            response.send( rows );
        }
    } );
}

function getAlbum( request, response ) {
    var id = request.params.id;

    if( id ) {
        db.query( queries.getAlbum.replace( '{id}', id ), ( error, rows ) => {
            if( error ) {
                response.status( 400 );
                response.send( 'Invalid query' );
            } else {
                response.send( rows[ 0 ] );
            }
        } );
    } else {
        response.end();
    }
}

function saveAlbum( request, response ) {
    db.query( queries.countAlbums, ( error, rows ) => {
        if( error ) {
            response.status( 400 );
            response.send( 'Can\'t count rows' );
        } else {
            var data = request.body;
            data.id = rows[ 0 ] + 1;

            db.query( insertData( queries.saveAlbum, data ), ( error, rows ) => {
                if( error ) {
                    response.status( 400 );
                    response.send( 'Invalid query' );
                } else {
                    response.status( 200 );
                    response.send();
                }
            } );
        }
    } );
}

function insertData( query, object ) {
    query.replace(/{(\w*)}/g, object['$1']);

    return query;
}

module.exports = albumsController;