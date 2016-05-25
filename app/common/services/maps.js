/* @ngInject */
export function MapsService($http) {
    return {
        getAlbumTypes: () => $http.get('/maps/album-types'),
        getDiscountTypes: () => $http.get('/maps/discount-types'),

        getRecordLabels: () => $http.get('/maps/record-labels'),
        getArtists: () => $http.get('/maps/artists'),
        getDiscounts: () => $http.get('/maps/discounts')
    }
}