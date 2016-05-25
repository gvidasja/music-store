import {DiscountsController} from './discounts-list-controller';
import {DiscountController} from './discount-edit-controller';
import {DiscountsService} from './discounts-service';

export const DiscountsModule = 'DiscountsModule';

angular.module(DiscountsModule, [])
    .controller( 'DiscountsController', DiscountsController )
    .controller( 'DiscountController', DiscountController )
    .service( 'DiscountsService', DiscountsService );