angular.module('bandwidth', [])

.controller('bandwidthController', ['$scope', function($scope) {
    console.log('bandwidthController loaded');

    var loadOptions = { packages: ['corechart', 'bar'], callback: drawBasic };
    google.load('visualization', '1', loadOptions);

function drawBasic() {
    console.log("draw a chart");
      var data = new google.visualization.DataTable();
      data.addColumn('timeofday', 'Time of Day');
      data.addColumn('number', 'Bandwidth');

      data.addRows([
        [{v: [1, 0, 0], f: '1 am'}, 1],
        [{v: [2, 0, 0], f: '2 am'}, 0],
        [{v: [3, 0, 0], f: '3 am'}, 0],
        [{v: [4, 0, 0], f: '4 am'}, 0],
        [{v: [5, 0, 0], f: '5 am'}, 0],
        [{v: [6, 0, 0], f: '6 am'}, 2],
        [{v: [7, 0, 0], f: '7 am'}, 3],
        [{v: [8, 0, 0], f: '8 am'}, 6],
        [{v: [9, 0, 0], f: '9 am'}, 9],
        [{v: [10, 0, 0], f:'10 am'}, 8],
        [{v: [11, 0, 0], f: '11 am'}, 10],
        [{v: [12, 0, 0], f: '12 pm'}, 3],
        [{v: [13, 0, 0], f: '1 pm'}, 2],
        [{v: [14, 0, 0], f: '2 pm'}, 5],
        [{v: [15, 0, 0], f: '3 pm'}, 9],
        [{v: [16, 0, 0], f: '4 pm'}, 10],
        [{v: [17, 0, 0], f: '5 pm'}, 9],
        [{v: [18, 0, 0], f: '6 pm'}, 4],
        [{v: [19, 0, 0], f: '7 pm'}, 3],
        [{v: [20, 0, 0], f: '8 pm'}, 2],
        [{v: [21, 0, 0], f: '9 pm'}, 6],
        [{v: [22, 0, 0], f: '10 pm'}, 7],
        [{v: [23, 0, 0], f: '11 pm'}, 3],
        [{v: [24, 0, 0], f: '12 pm'}, 2],
      ]);

      var options = {
        backgroundColor: '#111111',
        titleTextStyle: {
            color: '#efefef'
        },
        bar: {
            groupWidth: "95%",
        },
        chartArea: {
            top: "20%",
            height: "80%",
            width: "100%",
            border: "none"
        },
        colors: ["#666666"],
        dataOpacity: 0.75,
        legend: {
            position: 'none'
        },
        hAxis: {
            gridlines: {
                count: 0
            },
            format: 'h:mm a',
            viewWindow: {
                min: [1, 0, 0],
                max: [24, 0, 0]
            }
        },
        vAxis: {
            gridlines: {
                count: 5,
                color: "#333333"
            }
        }

    };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('bandwidthChart'));

      chart.draw(data, options);
    }
}])

.directive('widgetBandwidth', function() {
    return {
        templateUrl: './components/bandwidth/bandwidth.html'
    };
});