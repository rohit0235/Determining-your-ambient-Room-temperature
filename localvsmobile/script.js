// Sample temperature data (replace with actual data)
const timestamps = ['12:00 AM', '3:00 AM', '6:00 AM', '9:00 AM', '12:00 PM', '3:00 PM', '6:00 PM'];
const localTemperatures = [20, 22, 23, 24, 25, 22, 21];
const phoneBatteryTemperatures = [22, 24, 25, 26, 27, 24, 23];

// Create a chart using Chart.js
const ctx = document.getElementById('temperature-chart').getContext('2d');
const temperatureChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: timestamps,
        datasets: [
            {
                label: 'Local Temperature',
                borderColor: 'rgb(75, 192, 192)',
                data: localTemperatures,
                fill: false,
            },
            {
                label: 'Phone Battery Temperature',
                borderColor: 'rgb(255, 99, 132)',
                data: phoneBatteryTemperatures,
                fill: false,
            },
        ],
    },
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Temperature (°C)',
                },
            },
        },
    },
});
