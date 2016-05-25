/* @ngInject */
export function RecordLabelsService( $http ) {
    return {
        getRecordLabels: () => $http.get('/record-labels'),
        getRecordLabel: (id) => $http.get(`/record-labels/${id}`),
        saveRecordLabel: (recordLabel) => $http.post('/record-labels', recordLabel),
        deleteRecordLabel: (recordLabel) => $http.delete(`/record-labels/${recordLabel.id}`)
    }
}