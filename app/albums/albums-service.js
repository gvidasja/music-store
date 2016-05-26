/* @ngInject */
export function AlbumsService( $http ) {
    return {
        getAlbums: () => $http.get( '/albums' ),
        getAlbum: ( id ) => $http.get( `/albums/${id}` ),
        saveAlbum: ( album ) => $http.post( '/albums', album ),
        deleteAlbum: ( album ) => $http.delete( `/albums/${album.id}` )
    }
}