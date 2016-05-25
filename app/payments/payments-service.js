/* @ngInject */
export function PaymentsService( $http ) {
    return {
        getPayments: () => $http.get('/payments'),
        getPayment: (id) => $http.get(`/payments/${id}`),
        savePayment: (payment) => $http.post('/payments', payment),
        deletePayment: (payment) => $http.delete(`/payments/${payment.id}`)
    }
}