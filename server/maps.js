var express = require( 'express' );
var db = require( './database' );

var mapsController = express.Router();

mapsController.get( '/album-types', getAlbumTypes );
mapsController.get( '/discount-types', getDiscountTypes );
mapsController.get( '/genres', getGenres );

mapsController.get( '/users', getUsers );
mapsController.get( '/promos', getPromos );
mapsController.get( '/albums', getAlbums );
mapsController.get( '/record-labels', getRecordLabels );
mapsController.get( '/artists', getArtists );
mapsController.get( '/discounts', getDiscounts );

function getAlbumTypes( request, response ) {
    db.query(
        'select id_Albumtype as id, name from albumtypes',
        respond( response )
    );
}

function getDiscountTypes( request, response ) {
    db.query(
        'select id_Discounttype as id, name from discounttypes',
        respond( response )
    );
}

function getGenres( request, response ) {
    db.query(
        'select id_Genre as id, name from genres',
        respond( response )
    );
}

function getUsers( request, response ) {
    db.query(
        'select id, email as name from users',
        respond( response )
    )
}

function getPromos( request, response ) {
    db.query(
        'select code as id, code as name from promos',
        respond( response )
)
}

function getRecordLabels( request, response ) {
    db.query(
        'select id, name from recordlabels',
        respond( response )
    );
}

function getArtists( request, response ) {
    db.query(
        'select id, name from artists',
        respond( response )
    );
}

function getDiscounts( request, response ) {
    db.query(
        'select id, name from discounts',
        respond( response )
    );
}

function getAlbums( request, response ) {
    db.query(
        'select id, title as name from albums',
        respond( response )
    );
}

function respond( response ) {
    return function( error, rows ) {
        if( error ) {
            response.status = 400;
            response.send( error.message );
        } else {
            response.send( rows );
        }
    }
}

module.exports = mapsController;