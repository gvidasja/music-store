/* @ngInject */
export function AlbumsController( AlbumsService ) {
    var self = this;

    angular.extend( self, {
        list: [],
        deleteAlbum: deleteAlbum,
        error: null
    } );

    function deleteAlbum( album ) {
        AlbumsService.deleteAlbum( album ).then( () => {
            getAlbums();
            self.error = null;
        }, showError );
    }

    function getAlbums() {
        AlbumsService.getAlbums().then( ( response ) => {
            self.list = response.data;
            self.error = null;
        }, showError );
    }

    function showError( error ) {
        self.error = error.data;
    }

    getAlbums();
}

