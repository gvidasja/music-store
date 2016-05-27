/* @ngInject */
export function ReportsService( $http ) {
    return {
        getReports: () => $http.get( '/reports' ),
        getReport: ( id ) => $http.get( `/reports/${id}` ),
        saveReport: ( report ) => $http.post( '/reports', report ),
        deleteReport: ( report ) => $http.delete( `/reports/${report.id}` )
    }
}