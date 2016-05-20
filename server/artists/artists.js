var express = require( 'express' );
var db = require( './../database' );

var queries = {
    getArtists: require( './get-all.sql' ),
    getArtist: require( './get.sql' ),
    saveArtist: require( './save.sql' ),
    deleteArtist: require( './delete.sql' ),
    countArtists: require( './count.sql' )
};

var artistsController = express.Router();

artistsController.get( '/', getArtists );
artistsController.get( '/:id', getArtist );
artistsController.post( '/', saveArtist );
artistsController.delete( '/:id', deleteArtist );

function getArtists( request, response ) {
    db.query( queries.getArtists, ( error, rows ) => {
        if( error ) {
            response.status( 400 );
            response.send( error.message );
        } else {
            response.send( rows );
        }
    } );
}

function getArtist( request, response ) {
    var id = request.params.id;

    if( id ) {
        db.query( insertData( queries.getArtist, request.params ), ( error, rows ) => {
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

function saveArtist( request, response ) {
    db.query( queries.countArtists, ( error, rows ) => {
        if( error ) {
            response.status( 400 );
            response.send( error.message );
        } else {
            var data = request.body;
            data.id = data.id || rows[ 0 ].id + 1;

            db.query( insertData( queries.saveArtist, data ), ( error, rows ) => {
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

function deleteArtist( request, response ) {
    db.query( insertData( queries.deleteArtist, request.params ), ( error, rows ) => {
        if( error ) {
            response.status( 400 );
            response.send( error.message );
        } else {
            response.status( 200 );
            response.send();
        }
    } );
}

function insertData( query, object ) {
    query = query.replace(/{(\w*)}/g, (match, key) => `'${object[key]}'` || null);

    return query;
}

module.exports = artistsController;