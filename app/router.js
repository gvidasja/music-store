/* ngInject */
export function MusicStoreRouter( $routeProvider ) {
    $routeProvider
        .when( '/albums', {
            controller: 'AlbumsController',
            controllerAs: 'albums',
            template: 'aaaaaaa{{albums.lel}}'
        } )
        .when( '/artists', {
            controller: 'AlbumsController',
            controllerAs: 'artists',
            template: '{{albums.lel}}'
        } )
        .when( '/tracks', {
            controller: 'AlbumsController',
            controllerAs: 'tracks',
            template: '{{albums.lel}}'
        } )
}