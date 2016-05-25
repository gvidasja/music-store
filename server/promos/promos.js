var express = require( 'express' );
var db = require( './../database' );
var helpers = require( './../helpers' );

var queries = {
    getPromos: require( './get-all.sql' ),
    getPromo: require( './get.sql' ),
    savePromo: require( './save.sql' ),
    deletePromo: require( './delete.sql' ),
    countPromos: require( './count.sql' )
};

var promosController = express.Router();

promosController.get( '/', getPromos );
promosController.get( '/:id', getPromo );
promosController.post( '/', savePromo );
promosController.delete( '/:id', deletePromo );

function getPromos( request, response ) {
    db.query( queries.getPromos, ( error, rows ) => {
        if( error ) {
            response.status( 400 );
            response.send( error.message );
        } else {
            response.send( rows );
        }
    } );
}

function getPromo( request, response ) {
    var id = request.params.id;

    if( id ) {
        db.query( helpers.insertData( queries.getPromo, request.params ), ( error, rows ) => {
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

function savePromo( request, response ) {
    db.query( queries.countPromos, ( error, rows ) => {
        if( error ) {
            response.status( 400 );
            response.send( error.message );
        } else {
            var data = request.body;
            data.id = data.id || rows[ 0 ].id + 1;

            db.query( helpers.insertData( queries.savePromo, data ), ( error, rows ) => {
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

function deletePromo( request, response ) {
    db.query( helpers.insertData( queries.deletePromo, request.params ), ( error, rows ) => {
        if( error ) {
            response.status( 400 );
            response.send( error.message );
        } else {
            response.status( 200 );
            response.send();
        }
    } );
}

module.exports = promosController;