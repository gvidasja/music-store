/* @ngInject */
export function DiscountsService( $http ) {
    return {
        getDiscounts: () => $http.get('/discounts'),
        getDiscount: (id) => $http.get(`/discounts/${id}`),
        saveDiscount: (discount) => $http.post('/discounts', discount),
        deleteDiscount: (discount) => $http.delete(`/discounts/${discount.id}`)
    }
}