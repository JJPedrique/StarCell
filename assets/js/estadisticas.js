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
        '#0d6efd',
        '#0dcaf0', 
        '#198754', 
        '#ffc107', 
        '#fd7e14', 
        '#6c757d'  
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