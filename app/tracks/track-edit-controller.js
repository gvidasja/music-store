/* @ngInject */
export function TrackController( TracksService, MapsService, $routeParams, $location, $filter ) {
    var self = this;
    var toTime = $filter( 'toTime' );

    angular.extend( self, { submit } );

    function getTrack() {
        if( $routeParams.id ) {
            TracksService.getTrack( $routeParams.id ).then( response => {
                self.model = response.data;
                self.model.minutes = Math.floor(self.model.length / 60);
                self.model.seconds = Math.floor(self.model.length % 60);
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
        self.model.length = self.model.length.getTime() / 1000;

        TracksService.saveTrack( self.model ).then( () => {
            $location.path( '/tracks' );
        }, showError );
    }

    function showError( error ) {
        self.error = error.data
    }

    getTrack();
}

