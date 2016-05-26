/* @ngInject */
export function TrackController( TracksService, MapsService, $routeParams, $location ) {
    var self = this;

    angular.extend( self, { submit } );

    function getTrack() {
        if( $routeParams.id ) {
            TracksService.getTrack( $routeParams.id ).then( response => {
                self.model = response.data;
            }, showError );
        }
        MapsService.getAlbums().then( response => {
            self.albums = response.data;
        }, showError );

        MapsService.getGenres().then( response => {
            self.genres = response.data;
        }, showError );
    }

    function submit() {
        TracksService.saveTrack( self.model ).then( () => {
            $location.path( '/tracks' );
        }, showError );
    }

    function showError( error ) {
        self.error = error.data
    }

    getTrack();
}

