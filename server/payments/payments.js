var express = require( 'express' );
var db = require( './../database' );
var helpers = require( './../helpers' );

var queries = {
    getPayments: require( './get-all.sql' ),
    getPayment: require( './get.sql' ),
    savePayment: require( './save.sql' ),
    deletePayment: require( './delete.sql' ),
    countPayments: require( './count.sql' )
};

var paymentsController = express.Router();

paymentsController.get( '/', getPayments );
paymentsController.get( '/:id', getPayment );
paymentsController.post( '/', savePayment );
paymentsController.delete( '/:id', deletePayment );

function getPayments( request, response ) {
    db.query( queries.getPayments, ( error, rows ) => {
        if( error ) {
            response.status( 400 );
            response.send( error.message );
        } else {
            response.send( rows );
        }
    } );
}

function getPayment( request, response ) {
    var id = request.params.id;

    if( id ) {
        db.query( helpers.insertData( queries.getPayment, request.params ), ( error, rows ) => {
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

function savePayment( request, response ) {
    db.query( queries.countPayments, ( error, rows ) => {
        if( error ) {
            response.status( 400 );
            response.send( error.message );
        } else {
            var data = request.body;
            data.id = data.id || rows[ 0 ].id + 1;

            db.query( helpers.insertData( queries.savePayment, data ), ( error, rows ) => {
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

function deletePayment( request, response ) {
    db.query( helpers.insertData( queries.deletePayment, request.params ), ( error, rows ) => {
        if( error ) {
            response.status( 400 );
            response.send( error.message );
        } else {
            response.status( 200 );
            response.send();
        }
    } );
}

module.exports = paymentsController;