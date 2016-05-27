/* @ngInject */
export function ReportController( ReportsService, MapsService, $routeParams, $location ) {
    var self = this;

    angular.extend( self, { submit } );

    function getReport() {
        if( $routeParams.id ) {
            ReportsService.getReport( $routeParams.id ).then( response => {
                self.model = response.data;
            }, showError );
        }

        self.reportTypes = [
            { id: 1, name: 'Orders' },
            { id: 2, name: 'Albums' },
            { id: 3, name: 'Tracks' }
        ]
    }

    function submit() {
        ReportsService.saveReport( self.model ).then( () => {
            $location.path( '/reports' );
        }, showError );
    }

    function showError( error ) {
        self.error = error.data
    }

    getReport();
}

