var express = require( 'express' );
var db = require( './../database' );
var helpers = require( './../helpers' );

var queries = {
    getUsers: require( './get-all.sql' ),
    getUser: require( './get.sql' ),
    saveUser: require( './save.sql' ),
    deleteUser: require( './delete.sql' ),
    countUsers: require( './count.sql' )
};

var usersController = express.Router();

usersController.get( '/', getUsers );
usersController.get( '/:id', getUser );
usersController.post( '/', saveUser );
usersController.delete( '/:id', deleteUser );

function getUsers( request, response ) {
    db.query( queries.getUsers, ( error, rows ) => {
        if( error ) {
            response.status( 400 );
            response.send( error.message );
        } else {
            response.send( rows );
        }
    } );
}

function getUser( request, response ) {
    var id = request.params.id;

    if( id ) {
        db.query( helpers.insertData( queries.getUser, request.params ), ( error, rows ) => {
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

function saveUser( request, response ) {
    db.query( queries.countUsers, ( error, rows ) => {
        if( error ) {
            response.status( 400 );
            response.send( error.message );
        } else {
            var data = request.body;
            data.id = data.id || rows[ 0 ].id + 1;

            db.query( helpers.insertData( queries.saveUser, data ), ( error, rows ) => {
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

function deleteUser( request, response ) {
    db.query( helpers.insertData( queries.deleteUser, request.params ), ( error, rows ) => {
        if( error ) {
            response.status( 400 );
            response.send( error.message );
        } else {
            response.status( 200 );
            response.send();
        }
    } );
}

module.exports = usersController;