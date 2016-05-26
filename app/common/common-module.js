import { AlertDirective } from './directives/alert/alert';
import { capitalize } from './filters/capitalize';
import { MapsService } from './services/maps';

export const CommonModule = 'CommonModule';

angular.module( CommonModule, [] )

    .directive( 'alert', AlertDirective )
    .filter( 'capitalize', capitalize )
    .factory( 'MapsService', MapsService );