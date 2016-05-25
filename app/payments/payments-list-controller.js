/* @ngInject */
export function PaymentsController (PaymentsService) {
    var self = this;

    angular.extend(self, {
        list: [],
        deletePayment: deletePayment,
        error: null
    });

    function deletePayment(payment) {
        PaymentsService.deletePayment(payment).then(() => {
            getPayments();
            self.error = null;
        }, showError);
    }

    function getPayments() {
        PaymentsService.getPayments().then((response) => {
            self.list = response.data;
            self.error = null;
        }, showError);
    }

    function showError( error ) {
        self.error = error.data;
    }

    getPayments();
}

