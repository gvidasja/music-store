/* @ngInject */
export function DiscountsController (DiscountsService) {
    var self = this;

    angular.extend(self, {
        list: [],
        deleteDiscount: deleteDiscount,
        error: null
    });

    function deleteDiscount(discount) {
        DiscountsService.deleteDiscount(discount).then(() => {
            getDiscounts();
            self.error = null;
        }, showError);
    }

    function getDiscounts() {
        DiscountsService.getDiscounts().then((response) => {
            self.list = response.data;
            self.error = null;
        }, showError);
    }

    function showError( error ) {
        self.error = error.data;
    }

    getDiscounts();
}

