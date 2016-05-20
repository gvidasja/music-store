import { AlbumsController } from './albums/albums-list-controller';
import { AlbumsService } from './albums/albums-service';
import { MusicStoreRouter } from './router';
import { AlbumController } from './albums/album-edit-controller';
import { capitalize } from './filters/capitalize';
import { MapsService } from './services/maps';

var MusicStore = angular.module( 'MusicStore', [ 'ngRoute', 'templates' ] )

    .config( MusicStoreRouter )

    .controller( 'AlbumsController', AlbumsController )
    .controller( 'AlbumController', AlbumController )

    .factory( 'AlbumsService', AlbumsService )
    .factory( 'MapsService', MapsService )

    .filter( 'capitalize', capitalize );