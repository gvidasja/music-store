/* @ngInject */
export function MapsService( $http ) {
    return {
        getAlbumTypes: () => $http.get( '/maps/album-types' ),
        getDiscountTypes: () => $http.get( '/maps/discount-types' ),
        getGenres: () => $http.get( '/maps/genres' ),

        getUsers: () => $http.get( '/maps/users' ),
        getPromos: () => $http.get( '/maps/promos' ),
        getAlbums: () => $http.get( '/maps/albums' ),
        getArtists: () => $http.get( '/maps/artists' ),
        getRecordLabels: () => $http.get( '/maps/record-labels' ),
        getDiscounts: () => $http.get( '/maps/discounts' )
    }
}