var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [
            'Initial Supply',
           
          ],
        datasets: [{
            
            
            data:[ 69000000000000000000],
            backgroundColor: [
                ' lightgreen',
                'green',
                'blue'
               
            ],
            
          
            
           
            
        }]
    },
  
});
Chart.defaults.global.elements.rectangle.borderColor = '#000';
