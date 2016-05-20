/* @ngInject */
export function AlbumController( AlbumsService, MapsService, $routeParams, $location ) {
    var self = this;

    angular.extend( self, { submit } );

    function getAlbum() {
        if( $routeParams.id ) {
            AlbumsService.getAlbum( $routeParams.id ).then( response => {
                self.model = response.data;
            }, showError );
        }

        MapsService.getAlbumTypes().then( response => {
            self.albumTypes = response.data;
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
        AlbumsService.saveAlbum( self.model ).then( () => {
            $location.path( '/albums' );
        }, showError );
    }

    function showError( error ) {
        self.error = error.data
    }

    getAlbum();
}

