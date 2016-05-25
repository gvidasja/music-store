/* @ngInject */
export function PromosService( $http ) {
    return {
        getPromos: () => $http.get('/promos'),
        getPromo: (id) => $http.get(`/promos/${id}`),
        savePromo: (promo) => $http.post('/promos', promo),
        deletePromo: (promo) => $http.delete(`/promos/${promo.id}`)
    }
}