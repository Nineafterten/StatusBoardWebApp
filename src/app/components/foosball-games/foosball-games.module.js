angular.module('foosball-games', [])

.controller('foosballGamesController', ['$scope', function($scope) {
    console.log('foosballGamesController loaded');

}])

.directive('widgetFoosballGames', function() {
    return {
        templateUrl: './components/foosball-games/foosball-games.html'
    };
});