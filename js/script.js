google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
//#dcdcdc #b9b9b9
function drawChart() {
var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Promoters',     60],
          ['Passive',      17],
          ['Detractors',  9],
        ]);

        var options = {
          title: 'Net Promoter Score'
        };
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      };   

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = google.visualization.arrayToDataTable([
        ['Sprints', '# students meet the Target', {role:'style'}],
        ['S1', 60,'#ffbf43'],
        ['S2', 75, '#ffbf43'],
        ['S3', 100, '#ffbf43'],
        ['S4', 85,'#ffbf43'],
        ['S5', 97, '#ffbf43'],
        ['S6', 70, '#ffbf43'],
        ['S7', 68, '#ffbf43']
      ]);

      var options = {
        title: 'Achievement Global',
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Nº Students meet de Target 70%',
          minValue: 0
        },
        vAxis: {
          title: 'Sprints'
        }
      };

      var graphic = new google.visualization.AreaChart(document.getElementById('chart_div'));

      graphic.draw(data, options);
    };

   /*google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawVisual);

      function drawVisual() {
        var data = google.visualization.arrayToDataTable([
         ['TECH', 'HSE'],
         ['S1',65, 78],
         ['S2',72, 80],
         ['S3', 80, 82],
         ['S4',  77, 90],
         ['S5',  75, 84],
         ['S6',  75, 84]
      ]);
    var options = {
      title : 'Student that meet the Target TECH / HSE',
      vAxis: {title: 'Nº STUDENTS'},
      hAxis: {title: 'SPRINTS'},
      //seriesType: 'bars',
      //series: {2: {type: 'line'}}
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div3'));
    chart.draw(data, options);
  }*/
 
        
/*google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart2);

function drawChart2() {
var data = google.visualization.arrayToDataTable([
         data.addColumn('string','sprints');
         data.addColumn('number','#Students That Meet The Target');
         
         data.addRows([
          ['S1',70],
          ['S2',83],
          ['S3', 0],
          ['S4', 0],
          ['S5',0],
          ['S6',0],
          ['S7',0],
        ]);

        var options = {
          title: 'Achievement Global TECH'
        };

        var chart = new google.visualization.barChart(document.getElementById('barchart_div'));

        chart.draw(data, options);
      };*/      