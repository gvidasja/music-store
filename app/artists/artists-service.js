/* @ngInject */
export function ArtistsService( $http ) {
    return {
        getArtists: () => $http.get( '/artists' ),
        getArtist: ( id ) => $http.get( `/artists/${id}` ),
        saveArtist: ( artist ) => $http.post( '/artists', artist ),
        deleteArtist: ( artist ) => $http.delete( `/artists/${artist.id}` )
    }
}