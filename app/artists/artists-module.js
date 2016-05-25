import {ArtistsController} from './artists-list-controller';
import {ArtistController} from './artist-edit-controller';
import {ArtistsService} from './artists-service';

export const ArtistsModule = 'ArtistsModule';

angular.module(ArtistsModule, [])
    .controller( 'ArtistsController', ArtistsController )
    .controller( 'ArtistController', ArtistController )
    .service( 'ArtistsService', ArtistsService );