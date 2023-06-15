var ctx = document.getElementById('my-chart');

var equity = [1000, 3700, 3100, 7350, 9763];
var frameworks = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];

var myChart = new Chart(ctx, {
    type: "line",
    data: {
       labels: frameworks,
       datasets: [
       {
           label: "Equity",
           data: equity,
           backgroundColor: "#FFF)",
           borderColor: "#FFF",
           borderWidth: 1,
           hoverRadius: 8,
           display: "false",
       }
       ]
    }
   });
   const config = {
    type: 'line',
    options: {
        elements: {
            point: {
                borderColor: "#FFF",
                pointStyle: "rect",
            }
        }
    }
  }
   