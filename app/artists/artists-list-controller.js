/* @ngInject */
export function ArtistsController( ArtistsService ) {
    var self = this;

    angular.extend( self, {
        list: [],
        deleteArtist: deleteArtist,
        error: null
    } );

    function deleteArtist( artist ) {
        ArtistsService.deleteArtist( artist ).then( () => {
            getArtists();
            self.error = null;
        }, showError );
    }

    function getArtists() {
        ArtistsService.getArtists().then( ( response ) => {
            self.list = response.data;
            self.error = null;
        }, showError );
    }

    function showError( error ) {
        self.error = error.data;
    }

    getArtists();
}

