import {TracksController} from './tracks-list-controller';
import {TrackController} from './track-edit-controller';
import {TracksService} from './tracks-service';

export const TracksModule = 'TracksModule';

angular.module(TracksModule, [])
    .controller( 'TracksController', TracksController )
    .controller( 'TrackController', TrackController )
    .service( 'TracksService', TracksService );