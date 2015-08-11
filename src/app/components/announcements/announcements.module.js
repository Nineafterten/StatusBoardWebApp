angular.module('announcements', [])

.controller('announcementsController', [
    'jquery',
    'lodash',
    '$scope',
    function(
        $,
        _,
        $scope
    ) {

    // model for the UI   -= Icons List Source: http://fortawesome.github.io/Font-Awesome/icons/ =-
    $scope.newsData = [];

    var runSlides = function() {
        // tell the carousel to go (this corrects the jquery/angular race condition)
        // -= UI Source: http://getbootstrap.com/javascript/#carousel =-
        $("#newsContainer").carousel({
            interval: 15000
        });
    };

    var convertJsonData = function() {
        // convert data from Google Doc into rows/entries
        _.forEach(jsonData, function(n, i) {
            var index = i + 1;
            if (index % 2 === 0 && index > 2) {
                // skip the first row (that's the description row)
                // if there is a message and an icon then save both as a single entry
                $scope.newsData.push({
                    "icon" : jsonData[index - 2].content.$t,
                    "message": jsonData[index - 1].content.$t
                });
            }
        });
        // update the model
        $scope.$apply();
        // then run the messages
        runSlides();
    };

    // this points to an established Google doc that L4 admins (eventually this could be a CMS database elsewhere)
    var url = "https://spreadsheets.google.com/feeds/cells/1TeQfvph1LGYGzSdF-kbkmcUBBRUdOrKBhOuDd28YPGg/od6/public/basic?alt=json";
    var jsonData = null;
    // make the call for the data
    $.ajax({
        url:url,
        dataType:"jsonp",
        success:function(data) {
            jsonData = data.feed.entry;
            convertJsonData();
        },
    });

}])

.directive('widgetAnnouncements', function() {
    return {
        templateUrl: './components/announcements/announcements.html'
    };
});