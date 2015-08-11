angular.module('traffic', [])

.controller('trafficController', ['$scope', function($scope) {

    function initialize() {
        var myLatlng = new google.maps.LatLng(47.614848,-122.3359058);
        var mapOptions = {
        zoom: 12,
        center: myLatlng
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var trafficLayer = new google.maps.TrafficLayer();
        trafficLayer.setMap(map);
    }

    google.maps.event.addDomListener(window, 'load', initialize);

}])

.directive('widgetTraffic', function() {
    return {
        templateUrl: './components/traffic/traffic.html'
    };
});