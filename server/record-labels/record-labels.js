var express = require( 'express' );
var db = require( './../database' );
var helpers = require( './../helpers' );

var queries = {
    getRecordLabels: require( './get-all.sql' ),
    getRecordLabel: require( './get.sql' ),
    saveRecordLabel: require( './save.sql' ),
    deleteRecordLabel: require( './delete.sql' ),
    countRecordLabels: require( './count.sql' )
};

var recordLabelsController = express.Router();

recordLabelsController.get( '/', getRecordLabels );
recordLabelsController.get( '/:id', getRecordLabel );
recordLabelsController.post( '/', saveRecordLabel );
recordLabelsController.delete( '/:id', deleteRecordLabel );

function getRecordLabels( request, response ) {
    db.query( queries.getRecordLabels, ( error, rows ) => {
        if( error ) {
            response.status( 400 );
            response.send( error.message );
        } else {
            response.send( rows );
        }
    } );
}

function getRecordLabel( request, response ) {
    var id = request.params.id;

    if( id ) {
        db.query( helpers.insertData( queries.getRecordLabel, request.params ), ( error, rows ) => {
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

function saveRecordLabel( request, response ) {
    db.query( queries.countRecordLabels, ( error, rows ) => {
        if( error ) {
            response.status( 400 );
            response.send( error.message );
        } else {
            var data = request.body;
            data.id = data.id || rows[ 0 ].id + 1;

            db.query( helpers.insertData( queries.saveRecordLabel, data ), ( error, rows ) => {
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

function deleteRecordLabel( request, response ) {
    db.query( helpers.insertData( queries.deleteRecordLabel, request.params ), ( error, rows ) => {
        if( error ) {
            response.status( 400 );
            response.send( error.message );
        } else {
            response.status( 200 );
            response.send();
        }
    } );
}

module.exports = recordLabelsController;