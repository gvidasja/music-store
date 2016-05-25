/* @ngInject */
export function UsersService( $http ) {
    return {
        getUsers: () => $http.get('/users'),
        getUser: (id) => $http.get(`/users/${id}`),
        saveUser: (user) => $http.post('/users', user),
        deleteUser: (user) => $http.delete(`/users/${user.id}`)
    }
}