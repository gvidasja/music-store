/* @ngInject */
export function ArtistController( ArtistsService, MapsService, $routeParams, $location ) {
    var self = this;

    angular.extend( self, { submit } );

    function getArtist() {
        if( $routeParams.id ) {
            ArtistsService.getArtist( $routeParams.id ).then( response => {
                self.model = response.data;
            }, showError );
        }
    }

    function submit() {
        ArtistsService.saveArtist( self.model ).then( () => {
            $location.path( '/artists' );
        }, showError );
    }

    function showError( error ) {
        self.error = error.data;
    }

    getArtist();
}

