/* @ngInject */
export function ReportsService( $http ) {
    return {
        getAlbumsReport: ( data ) => {  console.log(data); return $http.post( '/reports/albums', data ); },
        getOrdersReport: ( data ) => $http.post( '/reports/orders', data ),
        getTracksReport: ( data ) => $http.post( '/reports/tracks', data )
    }
}