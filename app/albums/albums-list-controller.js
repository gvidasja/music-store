/* @ngInject */
export function AlbumsController (AlbumsService) {
    var self = this;

    angular.extend(self, {
        list: [],
        deleteAlbum: deleteAlbum
    });

    function deleteAlbum(album) {
        AlbumsService.deleteAlbum(album).then(() => {
            getAlbums();
        });
    }

    function getAlbums() {
        AlbumsService.getAlbums().then((response) => {
            self.list = response.data;
        });
    }

    getAlbums();
}

