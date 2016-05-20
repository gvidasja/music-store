/* ngInject */
export function MusicStoreRouter( $routeProvider ) {
    $routeProvider
        .when( '/albums', {
            controller: 'AlbumsController',
            controllerAs: 'albums',
            templateUrl: 'albums/albums-list.html'
        } )
        .when( '/album', {
            controller: 'AlbumController',
            controllerAs: 'album',
            templateUrl: 'albums/album-edit.html'
        })
        .when( '/album/:id', {
            controller: 'AlbumController',
            controllerAs: 'album',
            templateUrl: 'albums/album-edit.html'
        })
        .otherwise({
            redirectTo: '/albums'
        })
}