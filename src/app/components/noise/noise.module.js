angular.module('noise', [])

.controller('noiseController', ['$scope', function($scope) {
    console.log('noiseController loaded');

    var loadOptions = { packages: ['corechart'], callback: drawChart };
    google.load('visualization', '1', loadOptions);

    google.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2004',  1000,      400],
          ['2005',  1170,      460],
          ['2006',  660,       1120],
          ['2007',  1030,      540]
        ]);

        var options = {
        backgroundColor: '#111111',
        titleTextStyle: {
            color: '#efefef'
        },
        bar: {
            groupWidth: "95%",
        },
        curveType: "function",
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

        var chart = new google.visualization.LineChart(document.getElementById('noiseChart'));

        chart.draw(data, options);
      }
}])

.directive('widgetNoise', function() {
    return {
        templateUrl: './components/noise/noise.html'
    };
});