const ctx = document.getElementById('accessoriesChart').getContext('2d');

new Chart(ctx, {
    type: 'pie',
    data: {
    labels: [
        'Fundas y Carcasas', 
        'Protectores de Pantalla', 
        'Cargadores y Cables', 
        'Auriculares / Audio TWS', 
        'Baterías Externas (Power Banks)', 
        'Soportes y Otros'
    ],
    datasets: [{
        label: 'Cuota de Mercado (%)',
        data: [31.5, 18.2, 16.8, 15.1, 10.4, 8.0],
        backgroundColor: [
        '#003483',
        '#004cbd', 
        '#217aff', 
        '#5197ff', 
        '#82b4ff', 
        '#c1d6ff'  
        ],
        borderWidth: 1,
        borderRadius: 6
    }]
    },
    options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
        display: true 
        },
        tooltip: {
        callbacks: {
            label: function(context) {
            return ` ${context.raw}% de las ventas semanales.`;
            }
        }
        }
    }
    }
});