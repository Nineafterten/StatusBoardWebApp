angular.module("statusBoardApp", [
    "announcements",
    "bandwidth",
    "bus",
    "calendar",
    "conference-rooms",
    "foosball-games",
    "foosball-scores",
    "foosball-teams",
    "noise",
    "projects",
    "traffic"
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
angular.module('bus', [])

.controller('busController', ['$scope', function($scope) {
    console.log('busController loaded');

}])

.directive('widgetBusSchedule', function() {
    return {
        templateUrl: './components/bus/bus.html'
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
angular.module('conference-rooms', [])

.controller('conferenceRoomsController', ['$scope', function($scope) {
    console.log('conferenceRoomsController loaded');

}])

.directive('widgetConferenceRooms', function() {
    return {
        templateUrl: './components/conference-rooms/conference-rooms.html'
    };
});
angular.module('calendar', [])

.controller('calendarController', ['$scope', function($scope) {
    console.log('calendarController loaded');

}])

.directive('widgetCalendarEvents', function() {
    return {
        templateUrl: './components/calendar/calendar.html'
    };
});
angular.module('foosball-games', [])

.controller('foosballGamesController', ['$scope', function($scope) {
    console.log('foosballGamesController loaded');

}])

.directive('widgetFoosballGames', function() {
    return {
        templateUrl: './components/foosball-games/foosball-games.html'
    };
});
angular.module('foosball-teams', [])

.controller('foosballTeamsController', ['$scope', function($scope) {
    console.log('foosballTeamsController loaded');

}])

.directive('widgetFoosballTeams', function() {
    return {
        templateUrl: './components/foosball-teams/foosball-teams.html'
    };
});
angular.module('foosball-scores', [])

.controller('foosballScoresController', ['$scope', function($scope) {
    console.log('foosballScoresController loaded');

}])

.directive('widgetFoosballScores', function() {
    return {
        templateUrl: './components/foosball-scores/foosball-scores.html'
    };
});
angular.module('noise', [])

.controller('noiseController', ['$scope', function($scope) {
    console.log('noiseController loaded');

}])

.directive('widgetNoise', function() {
    return {
        templateUrl: './components/noise/noise.html'
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
angular.module('traffic', [])

.controller('trafficController', ['$scope', function($scope) {
    console.log('trafficController loaded');

}])

.directive('widgetTraffic', function() {
    return {
        templateUrl: './components/traffic/traffic.html'
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUuanMiLCJhbm5vdW5jZW1lbnRzL2Fubm91bmNlbWVudHMubW9kdWxlLmpzIiwiYnVzL2J1cy5tb2R1bGUuanMiLCJiYW5kd2lkdGgvYmFuZHdpZHRoLm1vZHVsZS5qcyIsImNvbmZlcmVuY2Utcm9vbXMvY29uZmVyZW5jZS1yb29tcy5tb2R1bGUuanMiLCJjYWxlbmRhci9jYWxlbmRhci5tb2R1bGUuanMiLCJmb29zYmFsbC1nYW1lcy9mb29zYmFsbC1nYW1lcy5tb2R1bGUuanMiLCJmb29zYmFsbC10ZWFtcy9mb29zYmFsbC10ZWFtcy5tb2R1bGUuanMiLCJmb29zYmFsbC1zY29yZXMvZm9vc2JhbGwtc2NvcmVzLm1vZHVsZS5qcyIsIm5vaXNlL25vaXNlLm1vZHVsZS5qcyIsInByb2plY3RzL3Byb2plY3RzLm1vZHVsZS5qcyIsInRyYWZmaWMvdHJhZmZpYy5tb2R1bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZShcInN0YXR1c0JvYXJkQXBwXCIsIFtcbiAgICBcImFubm91bmNlbWVudHNcIixcbiAgICBcImJhbmR3aWR0aFwiLFxuICAgIFwiYnVzXCIsXG4gICAgXCJjYWxlbmRhclwiLFxuICAgIFwiY29uZmVyZW5jZS1yb29tc1wiLFxuICAgIFwiZm9vc2JhbGwtZ2FtZXNcIixcbiAgICBcImZvb3NiYWxsLXNjb3Jlc1wiLFxuICAgIFwiZm9vc2JhbGwtdGVhbXNcIixcbiAgICBcIm5vaXNlXCIsXG4gICAgXCJwcm9qZWN0c1wiLFxuICAgIFwidHJhZmZpY1wiXG5dKVxuLmNvbnRyb2xsZXIoXCJzdGF0dXNCb2FyZEFwcENvbnRyb2xsZXJcIiwgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgY29uc29sZS5sb2coXCJzdGF0dXNCb2FyZEFwcENvbnRyb2xsZXIgbG9hZGVkXCIpO1xufSk7IiwiYW5ndWxhci5tb2R1bGUoJ2Fubm91bmNlbWVudHMnLCBbXSlcblxuLmNvbnRyb2xsZXIoJ2Fubm91bmNlbWVudHNDb250cm9sbGVyJywgWyckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICBjb25zb2xlLmxvZygnYW5ub3VuY2VtZW50c0NvbnRyb2xsZXIgbG9hZGVkJyk7XG4gICAgXG4gICAgJHNjb3BlLmRhdGEgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGljb246ICdmYS1yb2NrZXQnLFxuICAgICAgICAgICAgbWVzc2FnZTogJ1dlIGp1c3QgbGF1bmNoZWQgc29tZXRoaW5nIHJlYWxseSBhd2Vzb21lISBDaGVjayBvdXQgb3VyIG5ld3MhJ1xuICAgICAgICB9XG4gICAgXTtcblxufV0pXG5cbi5kaXJlY3RpdmUoJ3dpZGdldEFubm91bmNlbWVudHMnLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9hbm5vdW5jZW1lbnRzL2Fubm91bmNlbWVudHMuaHRtbCdcbiAgICB9O1xufSk7IiwiYW5ndWxhci5tb2R1bGUoJ2J1cycsIFtdKVxuXG4uY29udHJvbGxlcignYnVzQ29udHJvbGxlcicsIFsnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgY29uc29sZS5sb2coJ2J1c0NvbnRyb2xsZXIgbG9hZGVkJyk7XG5cbn1dKVxuXG4uZGlyZWN0aXZlKCd3aWRnZXRCdXNTY2hlZHVsZScsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL2J1cy9idXMuaHRtbCdcbiAgICB9O1xufSk7IiwiYW5ndWxhci5tb2R1bGUoJ2JhbmR3aWR0aCcsIFtdKVxuXG4uY29udHJvbGxlcignYmFuZHdpZHRoQ29udHJvbGxlcicsIFsnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgY29uc29sZS5sb2coJ2JhbmR3aWR0aENvbnRyb2xsZXIgbG9hZGVkJyk7XG5cbn1dKVxuXG4uZGlyZWN0aXZlKCd3aWRnZXRCYW5kd2lkdGgnLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9iYW5kd2lkdGgvYmFuZHdpZHRoLmh0bWwnXG4gICAgfTtcbn0pOyIsImFuZ3VsYXIubW9kdWxlKCdjb25mZXJlbmNlLXJvb21zJywgW10pXG5cbi5jb250cm9sbGVyKCdjb25mZXJlbmNlUm9vbXNDb250cm9sbGVyJywgWyckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICBjb25zb2xlLmxvZygnY29uZmVyZW5jZVJvb21zQ29udHJvbGxlciBsb2FkZWQnKTtcblxufV0pXG5cbi5kaXJlY3RpdmUoJ3dpZGdldENvbmZlcmVuY2VSb29tcycsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL2NvbmZlcmVuY2Utcm9vbXMvY29uZmVyZW5jZS1yb29tcy5odG1sJ1xuICAgIH07XG59KTsiLCJhbmd1bGFyLm1vZHVsZSgnY2FsZW5kYXInLCBbXSlcblxuLmNvbnRyb2xsZXIoJ2NhbGVuZGFyQ29udHJvbGxlcicsIFsnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgY29uc29sZS5sb2coJ2NhbGVuZGFyQ29udHJvbGxlciBsb2FkZWQnKTtcblxufV0pXG5cbi5kaXJlY3RpdmUoJ3dpZGdldENhbGVuZGFyRXZlbnRzJywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXIuaHRtbCdcbiAgICB9O1xufSk7IiwiYW5ndWxhci5tb2R1bGUoJ2Zvb3NiYWxsLWdhbWVzJywgW10pXG5cbi5jb250cm9sbGVyKCdmb29zYmFsbEdhbWVzQ29udHJvbGxlcicsIFsnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgY29uc29sZS5sb2coJ2Zvb3NiYWxsR2FtZXNDb250cm9sbGVyIGxvYWRlZCcpO1xuXG59XSlcblxuLmRpcmVjdGl2ZSgnd2lkZ2V0Rm9vc2JhbGxHYW1lcycsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL2Zvb3NiYWxsLWdhbWVzL2Zvb3NiYWxsLWdhbWVzLmh0bWwnXG4gICAgfTtcbn0pOyIsImFuZ3VsYXIubW9kdWxlKCdmb29zYmFsbC10ZWFtcycsIFtdKVxuXG4uY29udHJvbGxlcignZm9vc2JhbGxUZWFtc0NvbnRyb2xsZXInLCBbJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgIGNvbnNvbGUubG9nKCdmb29zYmFsbFRlYW1zQ29udHJvbGxlciBsb2FkZWQnKTtcblxufV0pXG5cbi5kaXJlY3RpdmUoJ3dpZGdldEZvb3NiYWxsVGVhbXMnLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9mb29zYmFsbC10ZWFtcy9mb29zYmFsbC10ZWFtcy5odG1sJ1xuICAgIH07XG59KTsiLCJhbmd1bGFyLm1vZHVsZSgnZm9vc2JhbGwtc2NvcmVzJywgW10pXG5cbi5jb250cm9sbGVyKCdmb29zYmFsbFNjb3Jlc0NvbnRyb2xsZXInLCBbJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgIGNvbnNvbGUubG9nKCdmb29zYmFsbFNjb3Jlc0NvbnRyb2xsZXIgbG9hZGVkJyk7XG5cbn1dKVxuXG4uZGlyZWN0aXZlKCd3aWRnZXRGb29zYmFsbFNjb3JlcycsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL2Zvb3NiYWxsLXNjb3Jlcy9mb29zYmFsbC1zY29yZXMuaHRtbCdcbiAgICB9O1xufSk7IiwiYW5ndWxhci5tb2R1bGUoJ25vaXNlJywgW10pXG5cbi5jb250cm9sbGVyKCdub2lzZUNvbnRyb2xsZXInLCBbJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgIGNvbnNvbGUubG9nKCdub2lzZUNvbnRyb2xsZXIgbG9hZGVkJyk7XG5cbn1dKVxuXG4uZGlyZWN0aXZlKCd3aWRnZXROb2lzZScsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL25vaXNlL25vaXNlLmh0bWwnXG4gICAgfTtcbn0pOyIsImFuZ3VsYXIubW9kdWxlKCdwcm9qZWN0cycsIFtdKVxuXG4uY29udHJvbGxlcigncHJvamVjdHNDb250cm9sbGVyJywgWyckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICBjb25zb2xlLmxvZygncHJvamVjdHNDb250cm9sbGVyIGxvYWRlZCcpO1xuXG59XSlcblxuLmRpcmVjdGl2ZSgnd2lkZ2V0UHJvamVjdHMnLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5odG1sJ1xuICAgIH07XG59KTsiLCJhbmd1bGFyLm1vZHVsZSgndHJhZmZpYycsIFtdKVxuXG4uY29udHJvbGxlcigndHJhZmZpY0NvbnRyb2xsZXInLCBbJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgIGNvbnNvbGUubG9nKCd0cmFmZmljQ29udHJvbGxlciBsb2FkZWQnKTtcblxufV0pXG5cbi5kaXJlY3RpdmUoJ3dpZGdldFRyYWZmaWMnLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy90cmFmZmljL3RyYWZmaWMuaHRtbCdcbiAgICB9O1xufSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9