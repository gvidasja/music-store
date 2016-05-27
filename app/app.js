import { AlbumsModule } from './albums/albums-module';
import { ArtistsModule } from './artists/artists-module';
import { DiscountsModule } from './discounts/discounts-module';
import { OrdersModule } from './orders/orders-module';
import { PaymentsModule } from './payments/payments-module';
import { PromosModule } from './promos/promos-module';
import { RecordLabelsModule } from './record-labels/record-labels-module';
import { TracksModule } from './tracks/tracks-module';
import { UsersModule } from './users/users-module';
import { ReportsModule } from './reports/reports-module';
import { CommonModule } from './common/common-module';

import { MusicStoreRouter } from './router';

var MusicStore = angular.module( 'MusicStore', [
    'ngRoute',
    'templates',

    AlbumsModule,
    ArtistsModule,
    DiscountsModule,
    OrdersModule,
    PaymentsModule,
    PromosModule,
    RecordLabelsModule,
    TracksModule,
    UsersModule,
    ReportsModule,

    CommonModule
] ).config( MusicStoreRouter );