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


        .when( '/artists', {
            controller: 'ArtistsController',
            controllerAs: 'artists',
            templateUrl: 'artists/artists-list.html'
        } )
        .when( '/artist', {
            controller: 'ArtistController',
            controllerAs: 'artist',
            templateUrl: 'artists/artist-edit.html'
        })
        .when( '/artist/:id', {
            controller: 'ArtistController',
            controllerAs: 'artist',
            templateUrl: 'artists/artist-edit.html'
        })

        .otherwise({
            redirectTo: '/artists'
        })
}