angular.module('foosball-teams', [])

.controller('foosballTeamsController', ['$scope', function($scope) {
    console.log('foosballTeamsController loaded');

}])

.directive('widgetFoosballTeams', function() {
    return {
        templateUrl: './components/foosball-teams/foosball-teams.html'
    };
});