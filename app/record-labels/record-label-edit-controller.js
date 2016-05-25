/* @ngInject */
export function RecordLabelController( RecordLabelsService, MapsService, $routeParams, $location ) {
    var self = this;

    angular.extend( self, { submit } );

    function getRecordLabel() {
        if( $routeParams.id ) {
            RecordLabelsService.getRecordLabel( $routeParams.id ).then( response => {
                self.model = response.data;
            }, showError );
        }

        MapsService.getRecordLabelTypes().then( response => {
            self.recordLabelTypes = response.data;
        }, showError );

        MapsService.getRecordLabels().then( response => {
            self.recordLabels = response.data;
        }, showError );

        MapsService.getArtists().then( response => {
            self.artists = response.data;
        }, showError );

        MapsService.getDiscounts().then( response => {
            self.discounts = response.data;
        }, showError );
    }

    function submit() {
        RecordLabelsService.saveRecordLabel( self.model ).then( () => {
            $location.path( '/record-labels' );
        }, showError );
    }

    function showError( error ) {
        self.error = error.data
    }

    getRecordLabel();
}

