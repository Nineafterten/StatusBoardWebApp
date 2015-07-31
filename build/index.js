angular.module("statusBoardApp", [
    "announcements",
    "bandwidth",
    "bus",
    "projects"
])
.controller("statusBoardAppController", function($scope) {
    console.log("statusBoardAppController loaded");
});
angular.module('announcements', [])

.controller('announcementsController', ['$scope', function($scope) {
    console.log('announcementsController loaded');
    
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
angular.module('bandwidth', [])

.controller('bandwidthController', ['$scope', function($scope) {
    console.log('bandwidthController loaded');

}])

.directive('widgetBandwidth', function() {
    return {
        templateUrl: './components/bandwidth/bandwidth.html'
    };
});
angular.module('bus', [])

.controller('busController', ['$scope', function($scope) {
    console.log('busController loaded');

}])

.directive('widgetBusSchedule', function() {
    return {
        templateUrl: './components/bus/bus.html'
    };
});
angular.module('projects', [])

.controller('projectsController', ['$scope', function($scope) {
    console.log('projectsController loaded');

}])

.directive('widgetProjects', function() {
    return {
        templateUrl: './components/projects/projects.html'
    };
});
angular.module('projects', [])

.controller('projectsController', ['$scope', function($scope) {
    console.log('projectsController loaded');

}])

.directive('widgetProjects', function() {
    return {
        templateUrl: './components/projects/projects.html'
    };
});
angular.module('projects', [])

.controller('projectsController', ['$scope', function($scope) {
    console.log('projectsController loaded');

}])

.directive('widgetProjects', function() {
    return {
        templateUrl: './components/projects/projects.html'
    };
});
angular.module('projects', [])

.controller('projectsController', ['$scope', function($scope) {
    console.log('projectsController loaded');

}])

.directive('widgetProjects', function() {
    return {
        templateUrl: './components/projects/projects.html'
    };
});
angular.module('projects', [])

.controller('projectsController', ['$scope', function($scope) {
    console.log('projectsController loaded');

}])

.directive('widgetProjects', function() {
    return {
        templateUrl: './components/projects/projects.html'
    };
});
angular.module('projects', [])

.controller('projectsController', ['$scope', function($scope) {
    console.log('projectsController loaded');

}])

.directive('widgetProjects', function() {
    return {
        templateUrl: './components/projects/projects.html'
    };
});
angular.module('projects', [])

.controller('projectsController', ['$scope', function($scope) {
    console.log('projectsController loaded');

}])

.directive('widgetProjects', function() {
    return {
        templateUrl: './components/projects/projects.html'
    };
});
angular.module('projects', [])

.controller('projectsController', ['$scope', function($scope) {
    console.log('projectsController loaded');

}])

.directive('widgetProjects', function() {
    return {
        templateUrl: './components/projects/projects.html'
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUuanMiLCJhbm5vdW5jZW1lbnRzL2Fubm91bmNlbWVudHMubW9kdWxlLmpzIiwiYmFuZHdpZHRoL2JhbmR3aWR0aC5tb2R1bGUuanMiLCJidXMvYnVzLm1vZHVsZS5qcyIsImNhbGVuZGFyL2NhbGVuZGFyLm1vZHVsZS5qcyIsImNvbmZlcmVuY2Utcm9vbXMvY29uZmVyZW5jZS1yb29tcy5tb2R1bGUuanMiLCJmb29zYmFsbC1nYW1lL2Zvb3NiYWxsLWdhbWUubW9kdWxlLmpzIiwiZm9vc2JhbGwtdGVhbXMvZm9vc2JhbGwtdGVhbXMubW9kdWxlLmpzIiwiZm9vc2JhbGwtc2NvcmVzL2Zvb3NiYWxsLXNjb3Jlcy5tb2R1bGUuanMiLCJub2lzZS9ub2lzZS5tb2R1bGUuanMiLCJwcm9qZWN0cy9wcm9qZWN0cy5tb2R1bGUuanMiLCJ0cmFmZmljL3RyYWZmaWMubW9kdWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKFwic3RhdHVzQm9hcmRBcHBcIiwgW1xuICAgIFwiYW5ub3VuY2VtZW50c1wiLFxuICAgIFwiYmFuZHdpZHRoXCIsXG4gICAgXCJidXNcIixcbiAgICBcInByb2plY3RzXCJcbl0pXG4uY29udHJvbGxlcihcInN0YXR1c0JvYXJkQXBwQ29udHJvbGxlclwiLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICBjb25zb2xlLmxvZyhcInN0YXR1c0JvYXJkQXBwQ29udHJvbGxlciBsb2FkZWRcIik7XG59KTsiLCJhbmd1bGFyLm1vZHVsZSgnYW5ub3VuY2VtZW50cycsIFtdKVxuXG4uY29udHJvbGxlcignYW5ub3VuY2VtZW50c0NvbnRyb2xsZXInLCBbJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgIGNvbnNvbGUubG9nKCdhbm5vdW5jZW1lbnRzQ29udHJvbGxlciBsb2FkZWQnKTtcbiAgICBcbiAgICAkc2NvcGUuZGF0YSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogJ2ZhLXJvY2tldCcsXG4gICAgICAgICAgICBtZXNzYWdlOiAnV2UganVzdCBsYXVuY2hlZCBzb21ldGhpbmcgcmVhbGx5IGF3ZXNvbWUhIENoZWNrIG91dCBvdXIgbmV3cyEnXG4gICAgICAgIH1cbiAgICBdO1xuXG59XSlcblxuLmRpcmVjdGl2ZSgnd2lkZ2V0QW5ub3VuY2VtZW50cycsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL2Fubm91bmNlbWVudHMvYW5ub3VuY2VtZW50cy5odG1sJ1xuICAgIH07XG59KTsiLCJhbmd1bGFyLm1vZHVsZSgnYmFuZHdpZHRoJywgW10pXG5cbi5jb250cm9sbGVyKCdiYW5kd2lkdGhDb250cm9sbGVyJywgWyckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICBjb25zb2xlLmxvZygnYmFuZHdpZHRoQ29udHJvbGxlciBsb2FkZWQnKTtcblxufV0pXG5cbi5kaXJlY3RpdmUoJ3dpZGdldEJhbmR3aWR0aCcsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL2JhbmR3aWR0aC9iYW5kd2lkdGguaHRtbCdcbiAgICB9O1xufSk7IiwiYW5ndWxhci5tb2R1bGUoJ2J1cycsIFtdKVxuXG4uY29udHJvbGxlcignYnVzQ29udHJvbGxlcicsIFsnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgY29uc29sZS5sb2coJ2J1c0NvbnRyb2xsZXIgbG9hZGVkJyk7XG5cbn1dKVxuXG4uZGlyZWN0aXZlKCd3aWRnZXRCdXNTY2hlZHVsZScsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL2J1cy9idXMuaHRtbCdcbiAgICB9O1xufSk7IiwiYW5ndWxhci5tb2R1bGUoJ3Byb2plY3RzJywgW10pXG5cbi5jb250cm9sbGVyKCdwcm9qZWN0c0NvbnRyb2xsZXInLCBbJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgIGNvbnNvbGUubG9nKCdwcm9qZWN0c0NvbnRyb2xsZXIgbG9hZGVkJyk7XG5cbn1dKVxuXG4uZGlyZWN0aXZlKCd3aWRnZXRQcm9qZWN0cycsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL3Byb2plY3RzL3Byb2plY3RzLmh0bWwnXG4gICAgfTtcbn0pOyIsImFuZ3VsYXIubW9kdWxlKCdwcm9qZWN0cycsIFtdKVxuXG4uY29udHJvbGxlcigncHJvamVjdHNDb250cm9sbGVyJywgWyckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICBjb25zb2xlLmxvZygncHJvamVjdHNDb250cm9sbGVyIGxvYWRlZCcpO1xuXG59XSlcblxuLmRpcmVjdGl2ZSgnd2lkZ2V0UHJvamVjdHMnLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5odG1sJ1xuICAgIH07XG59KTsiLCJhbmd1bGFyLm1vZHVsZSgncHJvamVjdHMnLCBbXSlcblxuLmNvbnRyb2xsZXIoJ3Byb2plY3RzQ29udHJvbGxlcicsIFsnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgY29uc29sZS5sb2coJ3Byb2plY3RzQ29udHJvbGxlciBsb2FkZWQnKTtcblxufV0pXG5cbi5kaXJlY3RpdmUoJ3dpZGdldFByb2plY3RzJywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHMuaHRtbCdcbiAgICB9O1xufSk7IiwiYW5ndWxhci5tb2R1bGUoJ3Byb2plY3RzJywgW10pXG5cbi5jb250cm9sbGVyKCdwcm9qZWN0c0NvbnRyb2xsZXInLCBbJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgIGNvbnNvbGUubG9nKCdwcm9qZWN0c0NvbnRyb2xsZXIgbG9hZGVkJyk7XG5cbn1dKVxuXG4uZGlyZWN0aXZlKCd3aWRnZXRQcm9qZWN0cycsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL3Byb2plY3RzL3Byb2plY3RzLmh0bWwnXG4gICAgfTtcbn0pOyIsImFuZ3VsYXIubW9kdWxlKCdwcm9qZWN0cycsIFtdKVxuXG4uY29udHJvbGxlcigncHJvamVjdHNDb250cm9sbGVyJywgWyckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICBjb25zb2xlLmxvZygncHJvamVjdHNDb250cm9sbGVyIGxvYWRlZCcpO1xuXG59XSlcblxuLmRpcmVjdGl2ZSgnd2lkZ2V0UHJvamVjdHMnLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5odG1sJ1xuICAgIH07XG59KTsiLCJhbmd1bGFyLm1vZHVsZSgncHJvamVjdHMnLCBbXSlcblxuLmNvbnRyb2xsZXIoJ3Byb2plY3RzQ29udHJvbGxlcicsIFsnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgY29uc29sZS5sb2coJ3Byb2plY3RzQ29udHJvbGxlciBsb2FkZWQnKTtcblxufV0pXG5cbi5kaXJlY3RpdmUoJ3dpZGdldFByb2plY3RzJywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHMuaHRtbCdcbiAgICB9O1xufSk7IiwiYW5ndWxhci5tb2R1bGUoJ3Byb2plY3RzJywgW10pXG5cbi5jb250cm9sbGVyKCdwcm9qZWN0c0NvbnRyb2xsZXInLCBbJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgIGNvbnNvbGUubG9nKCdwcm9qZWN0c0NvbnRyb2xsZXIgbG9hZGVkJyk7XG5cbn1dKVxuXG4uZGlyZWN0aXZlKCd3aWRnZXRQcm9qZWN0cycsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL3Byb2plY3RzL3Byb2plY3RzLmh0bWwnXG4gICAgfTtcbn0pOyIsImFuZ3VsYXIubW9kdWxlKCdwcm9qZWN0cycsIFtdKVxuXG4uY29udHJvbGxlcigncHJvamVjdHNDb250cm9sbGVyJywgWyckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICBjb25zb2xlLmxvZygncHJvamVjdHNDb250cm9sbGVyIGxvYWRlZCcpO1xuXG59XSlcblxuLmRpcmVjdGl2ZSgnd2lkZ2V0UHJvamVjdHMnLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5odG1sJ1xuICAgIH07XG59KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=