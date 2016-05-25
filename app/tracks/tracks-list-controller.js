/* @ngInject */
export function TracksController (TracksService) {
    var self = this;

    angular.extend(self, {
        list: [],
        deleteTrack: deleteTrack,
        error: null
    });

    function deleteTrack(track) {
        TracksService.deleteTrack(track).then(() => {
            getTracks();
            self.error = null;
        }, showError);
    }

    function getTracks() {
        TracksService.getTracks().then((response) => {
            self.list = response.data;
            self.error = null;
        }, showError);
    }

    function showError( error ) {
        self.error = error.data;
    }

    getTracks();
}

