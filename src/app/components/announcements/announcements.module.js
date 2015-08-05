angular.module('announcements', [])

.controller('announcementsController', [
    'lodash',
    'jquery',
    '$scope',
    '$timeout',
    function(
        _,
        $,
        $scope,
        $timeout
    ) {

    console.log('announcementsController loaded');

    // model for the UI
    $scope.newsList = [];

    // local json data -- this will need to be moved to a central location to be easily edited
    var jsonData = [
    {
        "message": "This messsage has an average amount of text for a new announcement.",
        "icon": "question-circle"
    },
    {
        "message": "This messsage small.",
        "icon": "rocket"
    },
    {
        "message": "This messsage has a tremendous amount of text for a new announcement. This messsage has a tremendous amount of text for a new announcement. This messsage has a tremendous amount of text for a new announcement. This messsage has a tremendous amount of text for a new announcement.",
        "icon": "map"
    }];

    // validate and adapt the messages correctly so the UI doesn't break with bad data entries
    var validateIncomingData = function() {
        if(jsonData) {
            _.forEach(jsonData, function(item) {
                // the item must have at least a message
                if(item.message.length) {
                    // then update the scaled font size
                    item.scaledFontSize = "font-size:" + item.message.length + "px";

                    // update the model
                    $scope.newsList.push(item);
                }
            });
        }
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