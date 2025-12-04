const API_KEY = "b22d53c5ca43584eb9a6e06192a90984";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherInfo = document.getElementById("weatherInfo");

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if(city) getWeather(city);
    else alert("Please enter a city name!");
});

cityInput.addEventListener("keypress", (e) => {
    if(e.key === "Enter") searchBtn.click();
});

async function getWeather(city) {
    try {
        const cityEncoded = encodeURIComponent(city);

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityEncoded}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);

        if(!response.ok) {
            throw new Error("City not found!");
        }

        const data = await response.json();
        displayWeather(data);

    } catch(error) {
        weatherInfo.innerHTML = `<p style="color:red">${error.message}</p>`;
    }
}

function displayWeather(data) {
    const { name, main, weather, wind } = data;

    weatherInfo.innerHTML = `
        <h2>${name}</h2>
        <img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="${weather[0].description}">
        <p><strong>${weather[0].main}</strong> - ${weather[0].description}</p>
        <p>Temperature: ${main.temp} °C</p>
        <p>Humidity: ${main.humidity}%</p>
        <p>Wind speed: ${wind.speed} m/s</p>
    `;
}
