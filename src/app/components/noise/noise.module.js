angular.module('noise', [])

.controller('noiseController', ['$scope', function($scope) {
    console.log('noiseController loaded');

}])

.directive('widgetNoise', function() {
    return {
        templateUrl: './components/noise/noise.html'
    };
});