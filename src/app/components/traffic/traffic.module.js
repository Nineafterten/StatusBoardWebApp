angular.module('traffic', [])

.controller('trafficController', ['$scope', function($scope) {

    function initialize() {

    // load the traffic layer on top
    var trafficLayer = new google.maps.TrafficLayer();
        trafficLayer.setMap(map);
    }
    // our name for the map toggle style (desktop action)
    var styledMapOptions = {
        name: 'L4 Mobile'
    };
    // the styling changes to the map
    var featureOpts = [
    {
      stylers: [
        { color: '#444444' },
        { visibility: 'simplified' },
        { gamma: 0.5 },
        { weight: 0.5 }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [
        { color: '#666666' }
      ]
    },{
      featureType: 'road.arterial',
      elementType: 'all',
      stylers: [
        { color: '#cccccc' },
        { visibility: 'simplified' }
      ]
    },{
      featureType: 'road.local',
      elementType: 'all',
      stylers: [
        { color: '#999999' },
        { visibility: 'simplified' }
      ]
    },{
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        { color: '#006699' }
      ]
    },{
      featureType: 'road.highway',
      elementType: 'labels',
      stylers: [
        { visibility: 'off' }
      ]
    },{
      featureType: 'administrative.locality',
      elementType: 'labels',
      stylers: [
        { hue: '#ffffff' }
      ]
    },{
      featureType: 'transit.line',
      elementType: 'geometry',
      stylers: [
        { hue: '#cccccc' },
        { visibility: 'on' },
        { lightness: -70 }
      ]
    }
  ];

    var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
    // you are here
    var seattle = new google.maps.LatLng(47.614848,-122.3359058);
    // map id for customizing
    var MY_MAPTYPE_ID = 'custom_style';
    // map options for setting exact location
    var mapOptions = {
        zoom: 12,
        center: seattle,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
        },
        mapTypeId: MY_MAPTYPE_ID
    };
    // get the map element and set it
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

    google.maps.event.addDomListener(window, 'load', initialize);

}])

.directive('widgetTraffic', function() {
    return {
        templateUrl: './components/traffic/traffic.html'
    };
});