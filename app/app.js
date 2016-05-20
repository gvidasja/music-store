import { AlbumsController } from './albums/albums-list-controller';
import { AlbumsService } from './albums/albums-service';
import { MusicStoreRouter } from './router';
import { AlbumController } from './albums/album-edit-controller';
import { capitalize } from './filters/capitalize';
import { MapsService } from './services/maps';
import { ArtistsController } from './artists/artists-list-controller';
import { ArtistController } from './artists/artist-edit-controller';
import { ArtistsService } from './artists/artists-service';

var MusicStore = angular.module( 'MusicStore', [ 'ngRoute', 'templates' ] )

    .config( MusicStoreRouter )

    .controller( 'AlbumsController', AlbumsController )
    .controller( 'AlbumController', AlbumController )
    .controller( 'ArtistsController', ArtistsController )
    .controller( 'ArtistController', ArtistController )

    .factory( 'AlbumsService', AlbumsService )
    .factory( 'ArtistsService', ArtistsService )
    .factory( 'MapsService', MapsService )

    .filter( 'capitalize', capitalize );