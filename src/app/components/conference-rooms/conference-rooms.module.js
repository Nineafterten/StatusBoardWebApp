angular.module('conference-rooms', [])

.controller('conferenceRoomsController', ['$scope', function($scope) {
    console.log('conferenceRoomsController loaded');

}])

.directive('widgetConferenceRooms', function() {
    return {
        templateUrl: './components/conference-rooms/conference-rooms.html'
    };
});