document.addEventListener('DOMContentLoaded', () => {
    const weatherContainer = document.getElementById('weather-container');
    const locationElement = document.getElementById('location');
    const temperatureElement = document.getElementById('temperature');

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            const apiKey = 'ae6858db44906f849572452180bb072f';
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

            try {
                const response = await fetch(apiUrl);
                const data = await response.json();

                if (response.ok) {
                    const locationName = data.name;
                    const temperature = data.main.temp;

                    locationElement.innerHTML = `Location: ${locationName}`;
                    temperatureElement.innerHTML = `Current Temperature: ${temperature}°C`;
                } else {
                    console.error(`Error fetching weather: ${data.message}`);
                    weatherContainer.innerHTML = 'Error fetching weather';
                }
            } catch (error) {
                console.error('An error occurred while fetching weather:', error);
                weatherContainer.innerHTML = 'Error fetching weather';
            }
        }, (error) => {
            console.error('Error getting geolocation:', error.message);
            weatherContainer.innerHTML = 'Error getting geolocation';
        });
    } else {
        console.error('Geolocation is not supported by your browser');
        weatherContainer.innerHTML = 'Geolocation not supported';
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const locationElement = document.getElementById('location');
    const currentWeatherElement = document.getElementById('current-weather');
    const humidityElement = document.getElementById('humidity');
    const hazeElement = document.getElementById('haze');
    const temperatureElement = document.getElementById('temperature');
    const refreshButton = document.getElementById('refresh-btn');

    function fetchWeather() {
        // Your existing weather fetching logic here...

        // Simulated data for demonstration
        const locationName = "City, Country";
        const currentWeather = "Partly Cloudy";
        const humidity = 75;
        const haze = "Low";

        // Update UI with fetched data
        locationElement.innerHTML = `Location: ${locationName}`;
        currentWeatherElement.innerHTML = `Weather: ${currentWeather}`;
        humidityElement.innerHTML = `Humidity: ${humidity}%`;
        hazeElement.innerHTML = `Haze: ${haze}`;
        temperatureElement.innerHTML = `Current Temperature: 25°C`; // Replace with actual temperature
    }

    // Initial fetch on page load
    fetchWeather();

    // Button click event to refresh weather
    refreshButton.addEventListener('click', fetchWeather);
});

