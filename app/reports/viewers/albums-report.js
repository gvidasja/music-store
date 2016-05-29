/* ngInject */
export function AlbumsReportDirective() {
    return {
        restrict: 'E',
        templateUrl: 'albums-report.html',
        scope: {
            report: '='
        }
    }
}