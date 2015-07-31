angular.module('bandwidth', [])

.controller('bandwidthController', ['$scope', function($scope) {
    console.log('bandwidthController loaded');

}])

.directive('widgetBandwidth', function() {
    return {
        templateUrl: './components/bandwidth/bandwidth.html'
    };
});