/*
 Template Name: Lurid - Material Design Admin & Dashboard Template
 Author: Myra Studio
 File: Chart Js
*/


(function($) {
  'use strict';
  $(function() {
    if ($("#pieChart").length) {
      var pieChartCanvas = $("#pieChart").get(0).getContext("2d");
      var pieChart = new Chart(pieChartCanvas, {
        type: 'pie',
        data: {
          datasets: [{
            data: [21, 16, 48, 31],
            backgroundColor: [
              '#e9ecef',
              '#2e78e1',
              '#3281f2', 
              '#69adf0' 
              
            ],
            borderColor: [

              '#e9ecef',
              '#28a26e',
              '#3281f2', 
              '#69adf0'  
              
            ],
          }],
      
          // These labels appear in the legend and in the tooltips when hovering different arcs
          labels: [
            'Samsung',
            'Apple',
            'Vivo',
            'Motorola'
          ]
        },
        options: {
          responsive: true,
          animation: {
            animateScale: true,
            animateRotate: true
          }
        }
      });
    }
    if ($('#lineChart').length) {
      var lineChartCanvas = $("#lineChart").get(0).getContext("2d");
      var data = {
        labels: ["2013", "2014", "2014", "2015", "2016", "2017", "2018", "2019"],
        datasets: [
          {
            label: 'Apple',
            data: [120, 180, 140, 210, 160, 240, 180, 210],
            borderColor: [
              '#5b9af5'
            ],
            borderWidth: 3,
            fill: false,
            pointBackgroundColor: "#ffffff",
            pointBorderColor: "#5b9af5"
          },
          {
            label: 'Samsung',
            data: [80, 140, 100, 170, 120, 200, 140, 170],
            borderColor: [
              '#e9ecef'
            ],
            borderWidth: 3,
            fill: false,
            pointBackgroundColor: "#ffffff",
            pointBorderColor: "#e9ecef"
          }
        ]
      };
      var options = {
        scales: {
          yAxes: [{
            gridLines: {
              drawBorder: false,
              borderDash: [3, 3]
            },
            ticks: {
              min: 0
            },
          }],
          xAxes: [{
            gridLines: {
              display: false,
              drawBorder: false,
              color: "#ffffff"
            }
          }]
        },
        elements: {
          line: {
            tension: 0.2
          },
          point: {
            radius: 4
          }
        },
        stepsize: 1
      };
      var lineChart = new Chart(lineChartCanvas, {
        type: 'line',
        data: data,
        options: options
      });
    }
    
    if ($("#areaChart").length) {
      var areaData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            data: [22, 23, 28, 20, 27, 20, 20, 24, 10, 35, 20, 25],
            backgroundColor: [
              '#69adf0'
            ],
            borderColor: [
              '#69adf0'
            ],
            borderWidth: 1,
            fill: 'origin',
            label: "purchases"
          },
          {
            data: [50, 40, 48, 70, 50, 63, 63, 42, 42, 51, 35, 35],
            backgroundColor: [
              '#2e78e1'
            ],
            borderColor: [
              '#2e78e1'
            ],
            borderWidth: 1,
            fill: 'origin',
            label: "services"
          },
          {
            data: [95, 75, 90, 105, 95, 95, 95, 100, 75, 95, 90, 105],
            backgroundColor: [
              '#dfe3e9'
            ],
            borderColor: [
              '#dfe3e9'
            ],
            borderWidth: 1,
            fill: 'origin',
            label: "services"
          }
        ]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          filler: {
            propagate: false
          }
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false,
              drawBorder: false,
              color: 'transparent',
              zeroLineColor: '#eeeeee'
            }
          }],
          yAxes: [{
            gridLines: {
              drawBorder: false,
              borderDash: [3, 3]
            },
          }]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        },
        elements: {
          line: {
            tension: 0
          },
          point: {
            radius: 0
          }
        }
      }
      var salesChartCanvas = $("#areaChart").get(0).getContext("2d");
      var salesChart = new Chart(salesChartCanvas, {
        type: 'line',
        data: areaData,
        options: areaOptions
      });
    }
    areaChart
    
    if ($("#barChart").length) {
      var currentChartCanvas = $("#barChart").get(0).getContext("2d");
      var currentChart = new Chart(currentChartCanvas, {
        type: 'bar',
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [{
              label: 'Apple',
              data: [65, 59, 80, 81, 56, 89, 40, 32, 65, 59, 80, 81],
              backgroundColor: '#69adf0'
            },
            {
              label: 'Samsung',
              data: [89, 40, 32, 65, 59, 80, 81, 56, 89, 40, 65, 59],
              backgroundColor: '#2e78e1'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          
          scales: {
            yAxes: [{
              display: false,
              gridLines: {
                drawBorder: false,
              },
              ticks: {
                fontColor: "#686868"
              }
            }],
            xAxes: [{
              ticks: {
                fontColor: "#686868"
              },
              gridLines: {
                display: false,
                drawBorder: false
              }
            }]
          },
          elements: {
            point: {
              radius: 0
            }
          }
        }
      });
    }
  });
})(jQuery);