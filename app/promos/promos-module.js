import {PromosController} from './promos-list-controller';
import {PromoController} from './promo-edit-controller';
import {PromosService} from './promos-service';

export const PromosModule = 'PromosModule';

angular.module(PromosModule, [])
    .controller( 'PromosController', PromosController )
    .controller( 'PromoController', PromoController )
    .service( 'PromosService', PromosService );