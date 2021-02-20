// START ADD DATA
var ctx = document.getElementById('myChart').getContext('2d');

ctx.canvas.width = 100;
ctx.canvas.height = 100;

var data = [{x: 0,y: 30}, {x: 1,y: 29}, {x: 2, y: 27}];

var scatterChart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            label: 'Weight',
            data: data,
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom',
            }]
        }
    }
});
// END ADD DATA