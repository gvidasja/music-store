var express = require( 'express' );
var db = require( './../database' );
var helpers = require( './../helpers' );

var queries = {
    getDiscounts: require( './get-all.sql' ),
    getDiscount: require( './get.sql' ),
    saveDiscount: require( './save.sql' ),
    deleteDiscount: require( './delete.sql' ),
    countDiscounts: require( './count.sql' )
};

var discountsController = express.Router();

discountsController.get( '/', getDiscounts );
discountsController.get( '/:id', getDiscount );
discountsController.post( '/', saveDiscount );
discountsController.delete( '/:id', deleteDiscount );

function getDiscounts( request, response ) {
    db.query( queries.getDiscounts, ( error, rows ) => {
        if( error ) {
            response.status( 400 );
            response.send( error.message );
        } else {
            response.send( rows );
        }
    } );
}

function getDiscount( request, response ) {
    var id = request.params.id;

    if( id ) {
        db.query( helpers.insertData( queries.getDiscount, request.params ), ( error, rows ) => {
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

function saveDiscount( request, response ) {
    db.query( queries.countDiscounts, ( error, rows ) => {
        if( error ) {
            response.status( 400 );
            response.send( error.message );
        } else {
            var data = request.body;
            data.id = data.id || rows[ 0 ].id + 1;

            db.query( helpers.insertData( queries.saveDiscount, data ), ( error, rows ) => {
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

function deleteDiscount( request, response ) {
    db.query( helpers.insertData( queries.deleteDiscount, request.params ), ( error, rows ) => {
        if( error ) {
            response.status( 400 );
            response.send( error.message );
        } else {
            response.status( 200 );
            response.send();
        }
    } );
}

module.exports = discountsController;