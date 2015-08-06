angular.module('announcements', [])

.controller('announcementsController', [
    'jquery',
    '$scope',
    function(
        $,
        $scope
    ) {

    // NOTE - Eventually this will be loaded via a CMS or external source file.

    // model for the UI
    // -= Icons List Source: http://fortawesome.github.io/Font-Awesome/icons/ =-
    $scope.newsData = [
    {
        "message": "This message has an average amount of text for a new announcement. This message has an average amount of text for a new announcement.",
        "icon": "commenting"
    },
    {
        "message": "This message is short and to the point.",
        "icon": "rocket"
    },
    {
        "message": "This message has a long amount of text for a new announcement. This message has a long amount of text for a new announcement. This message has a long amount of text for a new announcement. This message has a long amount of text for a new announcement. This message has a long amount of text for a new announcement. This message has a long amount of text for a new announcement.",
        "icon": "thumbs-up"
    }];

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