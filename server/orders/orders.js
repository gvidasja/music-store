var express = require( 'express' );
var db = require( './../database' );
var helpers = require( './../helpers' );
var promise = require( 'promise' );

var discountTypes = {
    percentage: 1,
    sum: 2
};

var queries = {
    getOrders: require( './get-all.sql' ),
    getOrder: require( './get.sql' ),
    saveOrder: require( './save.sql' ),
    deleteOrder: require( './delete.sql' ),
    countOrders: require( './count.sql' )
};

var ordersController = express.Router();

ordersController.get( '/', getOrders );
ordersController.get( '/:id', getOrder );
ordersController.post( '/', saveOrder );
ordersController.delete( '/:id', deleteOrder );

function getOrders( request, response ) {
    db.query( queries.getOrders, ( error, rows ) => {
        if( error ) {
            response.status( 400 );
            response.send( error.message );
        } else {
            response.send( rows );
        }
    } );
}

function getOrder( request, response ) {
    var id = request.params.id;

    if( id ) {
        db.query( helpers.insertData( queries.getOrder, request.params ), ( error, rows ) => {
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

function getAlbum( albumId ) {
    return `select price from album where id = ${albumId}`;
}

function getDiscount( promoCode ) {
    return `select amount, type from promos join discounts on discount.id == promo.fk_Disountid where promo.code = '${promoCode}`;
}

function saveOrder( request, response ) {
    db.query( queries.countOrders, ( error, rows ) => {
        if( error ) {
            response.status( 400 );
            response.send( error.message );
        } else {
            var data = request.body;
            data.id = data.id || rows[ 0 ].id + 1;

            var promises = [
                new promise((resolve, reject) => db.query( getAlbum( data.album ), ( error, rows ) => error ? reject(error.message) : resolve(rows[ 0 ]) ))
            ];

            if( data.promo ) {
                promises.push(new promise((resolve, reject) => db.query( getDiscount( data.promo ), ( error, rows ) => error ? reject(error.message) : resolve(rows[ 0 ] ))));
            }

            promise.all(promises).then( responses => {
                var album = responses[0];
                var discount = responses[1];

                if( discount && discount.type == discountTypes.percentage ) {
                    data.price = Math.max( album.price * (100 - discount.amount) / 100, 0 );
                } else if( discount && discount.type == discountTypes.sum ) {
                    data.price = Math.max( album.price - discount.amount, 0 );
                }

                db.query( helpers.insertData( queries.saveOrder, data ), ( error, rows ) => {
                    if( error ) {
                        response.status( 400 );
                        response.send( error.message );
                    } else {
                        response.status( 200 );
                        response.send();
                    }
                } );
            });
        }
    } );
}

function deleteOrder( request, response ) {
    db.query( helpers.insertData( queries.deleteOrder, request.params ), ( error, rows ) => {
        if( error ) {
            response.status( 400 );
            response.send( error.message );
        } else {
            response.status( 200 );
            response.send();
        }
    } );
}

function getPrice( request, response ) {

}

module.exports = ordersController;