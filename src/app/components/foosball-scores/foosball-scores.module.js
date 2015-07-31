angular.module('foosball-scores', [])

.controller('foosballScoresController', ['$scope', function($scope) {
    console.log('foosballScoresController loaded');

}])

.directive('widgetFoosballScores', function() {
    return {
        templateUrl: './components/foosball-scores/foosball-scores.html'
    };
});