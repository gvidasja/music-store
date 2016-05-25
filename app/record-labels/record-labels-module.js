import {RecordLabelsController} from './record-labels-list-controller';
import {RecordLabelController} from './record-label-edit-controller';
import {RecordLabelsService} from './record-labels-service';

export const RecordLabelsModule = 'RecordLabelsModule';

angular.module(RecordLabelsModule, [])
    .controller( 'RecordLabelsController', RecordLabelsController )
    .controller( 'RecordLabelController', RecordLabelController )
    .service( 'RecordLabelsService', RecordLabelsService );