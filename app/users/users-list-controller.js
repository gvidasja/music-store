/* @ngInject */
export function UsersController (UsersService) {
    var self = this;

    angular.extend(self, {
        list: [],
        deleteUser: deleteUser,
        error: null
    });

    function deleteUser(user) {
        UsersService.deleteUser(user).then(() => {
            getUsers();
            self.error = null;
        }, showError);
    }

    function getUsers() {
        UsersService.getUsers().then((response) => {
            self.list = response.data;
            self.error = null;
        }, showError);
    }

    function showError( error ) {
        self.error = error.data;
    }

    getUsers();
}

