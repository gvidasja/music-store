/* @ngInject */
export function ReportsController( ReportsService ) {
    var self = this;
    console.log('e');

    angular.extend( self, {
        list: [],
        deleteReport: deleteReport,
        error: null
    } );

    function deleteReport( report ) {
        ReportsService.deleteReport( report ).then( () => {
            getReports();
            self.error = null;
        }, showError );
    }

    function getReports() {
        ReportsService.getReports().then( ( response ) => {
            self.list = response.data;
            self.error = null;
        }, showError );
    }

    function showError( error ) {
        self.error = error.data;
    }

    getReports();
}

