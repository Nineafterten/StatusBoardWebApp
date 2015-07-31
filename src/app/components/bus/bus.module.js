angular.module('bus', [])

.controller('busController', ['$scope', function($scope) {
    console.log('busController loaded');

}])

.directive('widgetBusSchedule', function() {
    return {
        templateUrl: './components/bus/bus.html'
    };
});