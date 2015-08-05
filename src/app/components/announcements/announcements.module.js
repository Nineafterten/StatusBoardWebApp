angular.module('announcements', [])

.controller('announcementsController', ['jquery','$scope', '$timeout', function($, $scope, $timeout) {
    console.log('announcementsController loaded');

    // local json data -- this will need to be moved to a central location to be easily edited
    var jsonData = [
    {
        "message": "This messsage has no start date and should not load.",
        "startDate": "",
        "endDate": "8/15/2015",
        "icon": "question-circle",
    },
    {
        "message": "This messsage has no end date and should be removed in two weeks.",
        "startDate": "8/1/2015",
        "endDate": "",
        "icon": "cog",
    },
    {
        "message": "This message has no icon but should load with a default icon instead.",
        "startDate": "8/1/2015",
        "endDate": "8/15/2015",
        "icon": "",
    },
    {
        "message": "This message should not load because it has negative dates.",
        "startDate": "8/15/2015",
        "endDate": "8/1/2015",
        "icon": "map",
    },
    {
        "message": "", // test no message case
        "startDate": "8/1/2015",
        "endDate": "8/15/2015",
        "icon": "hand-lizard-o",
    }];

    // validate and adapt the messages correctly so the UI doesn't break with bad data entries
    var validateIncomingData = function() {
        if(jsonData) {
            // this needs to have data checks before passing to the scope (dates validated, etc)
        }
        $scope.announcements = jsonData;
    };
    validateIncomingData();

    // tell the carousel to go (this corrects the jquery/angular race condition)
    // -= UI Source: http://getbootstrap.com/javascript/#carousel =-
    $("#newsContainer").carousel({
        interval: 15000
    });

}])

.directive('widgetAnnouncements', function() {
    return {
        templateUrl: './components/announcements/announcements.html'
    };
});