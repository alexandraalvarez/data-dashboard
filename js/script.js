// para que cargue configuración de google charts
google.charts.load('current', {'packages':['corechart']});
//llamo a los gráficos y coloco en orden de visualización
google.charts.setOnLoadCallback(drawBasic);
google.charts.setOnLoadCallback(drawPie);
google.charts.setOnLoadCallback(drawVisualization);
google.charts.setOnLoadCallback(drawChart1);

function drawPie() {
var data = google.visualization.arrayToDataTable([
 //genero columnas del gráfico
          ['Porcentage', 'Students'],
          ['Students that meet the target', 0],
          ['Students out the target', 65.7],
          ['Students that meet the target', 79.3]
        ]);

        var options = {
          title: 'Porcentage',
//modifico colores predeterminados doy tonos institucionales        
          colors:['#ffbf43', '#dcdcdc' ]

        };
        var chart = new google.visualization.PieChart(document.getElementById('piechart_1'));

        chart.draw(data, options);
      };   

google.charts.load('current', {packages: ['corechart', 'bar']});

function drawBasic() {

      var data = google.visualization.arrayToDataTable([
        ['Sprints', 'Students meet the Target: Average 79.3', {role:'style'}],
        ['S1', 60,'#ffbf43'],
        ['S2', 75, '#ffbf43'],
        ['S3', 100, '#ffbf43'],
        ['S4', 85,'#ffbf43'],
        ['S5', 97, '#ffbf43'],
        ['S6', 70, '#ffbf43'],
        ['S7', 68, '#ffbf43'],
        ['Nº global', 79.3, 'grey']
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
      
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawEnrollment);
      
      function drawEnrollment() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Dropout',  15],
          ['Enrollment', 145],
          
        ]);

        var options = {
          title: 'Enrollment/Dropout',
//modifico colores predeterminados doy tonos institucionales
          colors:['#dcdcdc','#ffbf43'],
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }

google.charts.load('current', {'packages':['corechart']});

function drawChart1() {
var data = google.visualization.arrayToDataTable([
          ['Porcentage', 'Enrollment'],
          ['Detractors', 17],
          ['Passive',  9],
          ['Promoters', 60]  
        ]);

        var options = {
          title: 'Net Promoter Score',
          colors:['#ffbf43','#DA8B2D','grey']

        };
        var chart = new google.visualization.PieChart(document.getElementById('piechart_2'));

        chart.draw(data, options);
      };   

     google.charts.load('current', {'packages':['corechart']});

      function drawVisualization() {
        // Some raw data (not necessarily accurate)
        var data = google.visualization.arrayToDataTable([
         ['Sprint', 'TECH', 'HSE','Average'],
         ['S1',  70,      93,      116.5],
         ['S2',  85,      110,      140],
         ['S3',  65,      93,      79],
         ['S4',  86,      90,      88],
         ['S5',  92,      98,      92],
         ['S6',  100,      93,      96],
         ['S7',  109,      87,     98]
      ]);

    var options = {
      title : 'Student that meet Target',
      vAxis: {title: 'Nº Students'},
      hAxis: {title: 'Sprints'},
      seriesType: 'bars',
      colors:['#ffbf43', '#D5DA2D', 'grey']
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_target'));
    chart.draw(data, options);
  }