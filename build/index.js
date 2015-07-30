angular.module("statusBoardApp", ["announcements"])

.controller("statusBoardAppController", function($scope) {
    console.log("Status Board controller loaded.");
});
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUuanMiLCJhbm5vdW5jZW1lbnRzL2Fubm91bmNlbWVudHMubW9kdWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZShcInN0YXR1c0JvYXJkQXBwXCIsIFtcImFubm91bmNlbWVudHNcIl0pXG5cbi5jb250cm9sbGVyKFwic3RhdHVzQm9hcmRBcHBDb250cm9sbGVyXCIsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgIGNvbnNvbGUubG9nKFwiU3RhdHVzIEJvYXJkIGNvbnRyb2xsZXIgbG9hZGVkLlwiKTtcbn0pOyIsImFuZ3VsYXIubW9kdWxlKCdhbm5vdW5jZW1lbnRzJywgW10pXG5cbi5jb250cm9sbGVyKCdhbm5vdW5jZW1lbnRzQ29udHJvbGxlcicsIFsnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG5cbiAgICAkc2NvcGUuZGF0YSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogJ2ZhLXJvY2tldCcsXG4gICAgICAgICAgICBtZXNzYWdlOiAnV2UganVzdCBsYXVuY2hlZCBzb21ldGhpbmcgcmVhbGx5IGF3ZXNvbWUhIENoZWNrIG91dCBvdXIgbmV3cyEnXG4gICAgICAgIH1cbiAgICBdO1xuXG59XSlcblxuLmRpcmVjdGl2ZSgnd2lkZ2V0QW5ub3VuY2VtZW50cycsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL2Fubm91bmNlbWVudHMvYW5ub3VuY2VtZW50cy5odG1sJ1xuICAgIH07XG59KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=