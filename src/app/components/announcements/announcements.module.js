angular.module('announcements', [])

.controller('announcementsController', ['$scope', function($scope) {

    $scope.data = [
        {
            icon: 'fa-rocket',
            message: 'We just launched something really awesome! Check out our news!'
        }
    ];

}])

.directive('widgetAnnouncements', function() {
    return {
        templateUrl: './components/announcements/announcements.html'
    };
});