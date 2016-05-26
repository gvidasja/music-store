/* @ngInject */
export function PromosService( $http ) {
    return {
        getPromos: () => $http.get('/promos'),
        getPromo: (code) => $http.get(`/promos/${code}`),
        savePromo: (promo) => $http.post('/promos', promo),
        deletePromo: (promo) => $http.delete(`/promos/${promo.code}`)
    }
}