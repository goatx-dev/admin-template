/*
 Template Name: Lurid - Material Design Admin & Dashboard Template
 Author: Myra Studio
 File: Sparklines
*/


$( document ).ready(function() {
    
  var DrawSparkline = function() {
      $('#sparkline1').sparkline([0, 23, 43, 35, 44, 45, 56, 37, 40], {
          type: 'line',
          width: "100%",
          height: '200',
          chartRangeMax: 50,
          lineColor: '#2e78e1',
          fillColor: 'rgba(46, 120, 225, 0.3)',
          highlightLineColor: 'rgba(0,0,0,.1)',
          highlightSpotColor: 'rgba(0,0,0,.2)',
          maxSpotColor:false,
          minSpotColor: false,
          spotColor:false,
          lineWidth: 1
      });

      $('#sparkline1').sparkline([25, 23, 26, 24, 25, 32, 30, 24, 19], {
          type: 'line',
          width: "100%",
          height: '200',
          chartRangeMax: 40,
          lineColor: '#5b9af5',
          fillColor: 'rgba(91, 154, 245, 0.3)',
          composite: true,
          highlightLineColor: 'rgba(0,0,0,.1)',
          highlightSpotColor: 'rgba(0,0,0,.2)',
          maxSpotColor:false,
          minSpotColor: false,
          spotColor:false,
          lineWidth: 1
      });
  
      $('#sparkline2').sparkline([3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12], {
          type: 'bar',
          height: '200',
          barWidth: '10',
          barSpacing: '3',
          barColor: '#2e78e1'
      });
      
      $('#sparkline3').sparkline([20, 40, 30, 10], {
          type: 'pie',
          width: '200',
          height: '200',
          sliceColors: ['#5b9af5', '#3281f2', '#69adf0', '#e3eaef']
      });

      $('#sparkline5').sparkline([3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12], {
          type: 'line',
          width: "100%",
          height: '200',
          lineColor: '#69adf0',
          lineWidth: 2,
          fillColor: 'rgba(105, 173, 240,0.3)',
          highlightLineColor: 'rgba(0,0,0,.1)',
          highlightSpotColor: 'rgba(0,0,0,.2)'
      });

      $('#sparkline5').sparkline([3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12], {
          type: 'bar',
          height: '200',
          barWidth: '10',
          barSpacing: '5',
          composite: true,
          barColor: '#3281f2'
      });

      $("#sparkline6").sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 5, 6, 3, 4, 5, 8, 7, 6, 9, 3, 2, 4, 1, 5, 6, 4, 3, 7], {
          type: 'discrete',
          width: '280',
          height: '200',
          lineColor: '#2b70d1'
      });

      },
      DrawMouseSpeed = function () {
          var mrefreshinterval = 500; // update display every 500ms
          var lastmousex=-1; 
          var lastmousey=-1;
          var lastmousetime;
          var mousetravel = 0;
          var mpoints = [];
          var mpoints_max = 30;
          $('html').mousemove(function(e) {
              var mousex = e.pageX;
              var mousey = e.pageY;
              if (lastmousex > -1) {
                  mousetravel += Math.max( Math.abs(mousex-lastmousex), Math.abs(mousey-lastmousey) );
              }
              lastmousex = mousex;
              lastmousey = mousey;
          });
          var mdraw = function() {
              var md = new Date();
              var timenow = md.getTime();
              if (lastmousetime && lastmousetime!=timenow) {
                  var pps = Math.round(mousetravel / (timenow - lastmousetime) * 1000);
                  mpoints.push(pps);
                  if (mpoints.length > mpoints_max)
                      mpoints.splice(0,1);
                  mousetravel = 0;
                  $('#sparkline4').sparkline(mpoints, {
                      tooltipSuffix: ' pixels per second',
                      type: 'line',
                      width: "100%",
                      height: '200',
                      chartRangeMax: 77,
                      maxSpotColor:false,
                      minSpotColor: false,
                      spotColor:false,
                      lineWidth: 1,
                      lineColor: '#69adf0',
                      fillColor: 'rgba(105, 173, 240, 0.3)',
                      highlightLineColor: 'rgba(24,147,126,.1)',
                      highlightSpotColor: 'rgba(24,147,126,.2)'
                  });
              }
              lastmousetime = timenow;
              setTimeout(mdraw, mrefreshinterval);
          }
          // We could use setInterval instead, but I prefer to do it this way
          setTimeout(mdraw, mrefreshinterval); 
      };
  
  DrawSparkline();
  DrawMouseSpeed();
  
  var resizeChart;

  $(window).resize(function(e) {
      clearTimeout(resizeChart);
      resizeChart = setTimeout(function() {
          DrawSparkline();
          DrawMouseSpeed();
      }, 300);
  });
});