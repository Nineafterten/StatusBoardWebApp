angular.module('projects', [])

.controller('projectsController', ['$scope', function($scope) {
    console.log('projectsController loaded');

}])

.directive('widgetProjects', function() {
    return {
        templateUrl: './components/projects/projects.html'
    };
});