angular.module('calendar', [])

.controller('calendarController', ['$scope', function($scope) {
    console.log('calendarController loaded');

}])

.directive('widgetCalendarEvents', function() {
    return {
        templateUrl: './components/calendar/calendar.html'
    };
});