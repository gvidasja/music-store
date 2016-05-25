/* @ngInject */
export function PromosController (PromosService) {
    var self = this;

    angular.extend(self, {
        list: [],
        deletePromo: deletePromo,
        error: null
    });

    function deletePromo(promo) {
        PromosService.deletePromo(promo).then(() => {
            getPromos();
            self.error = null;
        }, showError);
    }

    function getPromos() {
        PromosService.getPromos().then((response) => {
            self.list = response.data;
            self.error = null;
        }, showError);
    }

    function showError( error ) {
        self.error = error.data;
    }

    getPromos();
}

