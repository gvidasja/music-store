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

