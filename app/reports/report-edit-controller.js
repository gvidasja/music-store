/* @ngInject */
export function ReportController( ReportsService, MapsService, $routeParams, $location ) {
    var self = this;

    angular.extend( self, { submit, clear } );

    function init() {
        MapsService.getArtists().then( response => {
            self.artists = response.data;
        });

        MapsService.getRecordLabels().then( response => {
            self.recordLabels = response.data;
        });

        self.reportTypes = [
            { id: 1, name: 'Albums' },
            { id: 2, name: 'Orders' },
            { id: 3, name: 'Tracks' }
        ]
    }

    function submit() {
        var call;
        self.report = null;

        switch( self.model.type ) {
            case self.reportTypes[0].id:
                call = ReportsService.getAlbumsReport; break;
            case self.reportTypes[1].id:
                call = ReportsService.getOrdersReport; break;
            case self.reportTypes[2].id:
                call = ReportsService.getTracksReport; break;
        }

        call( self.model ).then( processReport, showError );
    }

    function clear() {
        self.model = { type: self.model.type };
        self.report = null;
    }

    function processReport( report ) {
        self.report = report.data;
    }

    function showError( error ) {
        self.error = error.data
    }

    init();
}

