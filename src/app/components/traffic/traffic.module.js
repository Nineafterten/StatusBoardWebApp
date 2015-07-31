angular.module('traffic', [])

.controller('trafficController', ['$scope', function($scope) {
    console.log('trafficController loaded');

}])

.directive('widgetTraffic', function() {
    return {
        templateUrl: './components/traffic/traffic.html'
    };
});