/* @ngInject */
export function TracksService( $http ) {
    return {
        getTracks: () => $http.get('/tracks'),
        getTrack: (id) => $http.get(`/tracks/${id}`),
        saveTrack: (track) => $http.post('/tracks', track),
        deleteTrack: (track) => $http.delete(`/tracks/${track.id}`)
    }
}