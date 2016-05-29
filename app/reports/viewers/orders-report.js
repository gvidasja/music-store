/* ngInject */
export function OrdersReportDirective() {
    return {
        restrict: 'E',
        templateUrl: 'orders-report.html',
        scope: {
            report: '='
        }
    }
}