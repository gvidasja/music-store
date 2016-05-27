import { AlertDirective } from './directives/alert/alert';
import { capitalize } from './filters/capitalize';
import { toTime } from './filters/to-time';
import { MapsService } from './services/maps';

export const CommonModule = 'CommonModule';

angular.module( CommonModule, [] )

    .directive( 'alert', AlertDirective )
    .filter( 'capitalize', capitalize )
    .filter( 'toTime', toTime )
    .factory( 'MapsService', MapsService );