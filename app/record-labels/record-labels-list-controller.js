/* @ngInject */
export function RecordLabelsController (RecordLabelsService) {
    var self = this;

    angular.extend(self, {
        list: [],
        deleteRecordLabel: deleteRecordLabel,
        error: null
    });

    function deleteRecordLabel(recordLabel) {
        RecordLabelsService.deleteRecordLabel(recordLabel).then(() => {
            getRecordLabels();
            self.error = null;
        }, showError);
    }

    function getRecordLabels() {
        RecordLabelsService.getRecordLabels().then((response) => {
            self.list = response.data;
            self.error = null;
        }, showError);
    }

    function showError( error ) {
        self.error = error.data;
    }

    getRecordLabels();
}

