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

