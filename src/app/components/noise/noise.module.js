angular.module('noise', [])

.controller('noiseController', ['$scope', function($scope) {
    console.log('noiseController loaded');

    var loadOptions = { packages: ['corechart'], callback: drawChart };
    google.load('visualization', '1', loadOptions);

    google.setOnLoadCallback(drawChart);

      function drawChart() {
            var data = google.visualization.arrayToDataTable([
                ['Day', 'Decibels'],
                ['8/1',   40],
                ['8/2',   36],
                ['8/3',   31],
                ['8/4',   42],
                ['8/5',   40],
                ['8/6',   22],
                ['8/7',   21],
                ['8/8',   34],
                ['8/9',   27],
                ['8/10',  44],
                ['8/11',  39],
                ['8/12',  38],
                ['8/13',  23],
                ['8/14',  24],
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