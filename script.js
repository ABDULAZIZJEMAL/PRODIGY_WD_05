const apiKey = '4159199095e4925aa6c430f1b17ae8e9';

async function getWeather() {
    const location = document.getElementById('locationInput').value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    displayWeather(data);
}

function displayWeather(data) {
    const weatherDisplay = document.getElementById('weatherDisplay');
    if (data.cod === 200) {
        weatherDisplay.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
    } else {
        weatherDisplay.innerHTML = `<p>${data.message}</p>`;
    }
}