import { AlbumsController } from './albums-list-controller';
import { AlbumController } from './album-edit-controller';
import { AlbumsService } from './albums-service';

export const AlbumsModule = 'AlbumsModule';

angular.module( AlbumsModule, [] )
    .controller( 'AlbumsController', AlbumsController )
    .controller( 'AlbumController', AlbumController )
    .service( 'AlbumsService', AlbumsService );