/* @ngInject */
export function ReportController( ReportsService, MapsService, $routeParams, $location ) {
    var self = this;

    angular.extend( self, { submit, clear, clearEverything } );

    function init() {
        MapsService.getArtists().then( response => {
            self.artists = response.data;
        });

        MapsService.getRecordLabels().then( response => {
            self.recordLabels = response.data;
        });

        MapsService.getGenres().then( response => {
            self.genres = response.data;
        });

        MapsService.getAlbums().then( response => {
            self.albums = response.data;
        });

        MapsService.getUsers().then( response => {
            self.users = response.data;
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
        self.error = null;

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

    function clearEverything() {
        clear();
        self.model.type = null;
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

