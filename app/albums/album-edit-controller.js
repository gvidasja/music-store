/* @ngInject */
export function AlbumController( AlbumsService, MapsService, $routeParams, $location ) {
    var self = this;

    angular.extend( self, { submit } );

    function getAlbum() {
        if( $routeParams.id ) {
            AlbumsService.getAlbum( $routeParams.id ).then( response => {
                self.model = response.data;
            } );
        }

        MapsService.getAlbumTypes().then( response => {
            self.albumTypes = response.data;
        } );

        MapsService.getRecordLabels().then( response => {
            self.recordLabels = response.data;
        } );

        MapsService.getArtists().then( response => {
            self.artists = response.data;
        } );

        MapsService.getDiscounts().then( response => {
            self.discounts = response.data;
        } );
    }

    function submit() {
        AlbumsService.saveAlbum( self.model ).then( () => {
            $location.path( '/albums' );
        } );
    }

    getAlbum();
}

