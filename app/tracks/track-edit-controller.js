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

        MapsService.getTrackTypes().then( response => {
            self.trackTypes = response.data;
        }, showError );

        MapsService.getRecordLabels().then( response => {
            self.recordLabels = response.data;
        }, showError );

        MapsService.getArtists().then( response => {
            self.artists = response.data;
        }, showError );

        MapsService.getDiscounts().then( response => {
            self.discounts = response.data;
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

