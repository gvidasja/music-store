import { ReportsController } from './reports-list-controller';
import { ReportController } from './report-edit-controller';
import { ReportsService } from './reports-service';

export const ReportsModule = 'ReportsModule';

angular.module( ReportsModule, [] )
    .controller( 'ReportsController', ReportsController )
    .controller( 'ReportController', ReportController )
    .service( 'ReportsService', ReportsService );