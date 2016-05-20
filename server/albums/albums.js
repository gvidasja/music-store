var express = require( 'express' );
var db = require( './../database' );
var helpers = require( './../helpers' );

var queries = {
    getAlbums: require( './get-all.sql' ),
    getAlbum: require( './get.sql' ),
    saveAlbum: require( './save.sql' ),
    deleteAlbum: require( './delete.sql' ),
    countAlbums: require( './count.sql' )
};

var albumsController = express.Router();

albumsController.get( '/', getAlbums );
albumsController.get( '/:id', getAlbum );
albumsController.post( '/', saveAlbum );
albumsController.delete( '/:id', deleteAlbum );

function getAlbums( request, response ) {
    db.query( queries.getAlbums, ( error, rows ) => {
        if( error ) {
            response.status( 400 );
            response.send( error.message );
        } else {
            response.send( rows );
        }
    } );
}

function getAlbum( request, response ) {
    var id = request.params.id;

    if( id ) {
        db.query( helpers.insertData( queries.getAlbum, request.params ), ( error, rows ) => {
            if( error ) {
                response.status( 400 );
                response.send( error.message );
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
            response.send( error.message );
        } else {
            var data = request.body;
            data.id = data.id || rows[ 0 ].id + 1;

            db.query( helpers.nsertData( queries.saveAlbum, data ), ( error, rows ) => {
                if( error ) {
                    response.status( 400 );
                    response.send( error.message );
                } else {
                    response.status( 200 );
                    response.send();
                }
            } );
        }
    } );
}

function deleteAlbum( request, response ) {
    db.query( helpers.insertData( queries.deleteAlbum, request.params ), ( error, rows ) => {
        if( error ) {
            response.status( 400 );
            response.send( error.message );
        } else {
            response.status( 200 );
            response.send();
        }
    } );
}

module.exports = albumsController;