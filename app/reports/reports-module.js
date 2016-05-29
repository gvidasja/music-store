import { AlbumsReportDirective } from './viewers/albums-report';
import { OrdersReportDirective } from './viewers/orders-report';
import { TracksReportDirective } from './viewers/tracks-report';
import { ReportController } from './report-edit-controller';
import { ReportsService } from './reports-service';

export const ReportsModule = 'ReportsModule';

angular.module( ReportsModule, [] )
    .directive( 'albumsReport', AlbumsReportDirective )
    .directive( 'ordersReport', OrdersReportDirective )
    .directive( 'tracksReport', TracksReportDirective )
    .controller( 'ReportController', ReportController )
    .service( 'ReportsService', ReportsService );