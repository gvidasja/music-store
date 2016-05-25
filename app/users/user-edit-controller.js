/* @ngInject */
export function UserController( UsersService, MapsService, $routeParams, $location ) {
    var self = this;

    angular.extend( self, { submit } );

    function getUser() {
        if( $routeParams.id ) {
            UsersService.getUser( $routeParams.id ).then( response => {
                self.model = response.data;
            }, showError );
        }

        MapsService.getUserTypes().then( response => {
            self.userTypes = response.data;
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
        UsersService.saveUser( self.model ).then( () => {
            $location.path( '/users' );
        }, showError );
    }

    function showError( error ) {
        self.error = error.data
    }

    getUser();
}

