/* ngInject */
export function TracksReportDirective() {
    return {
        restrict: 'E',
        templateUrl: 'tracks-report.html',
        scope: {
            report: '='
        }
    }
}