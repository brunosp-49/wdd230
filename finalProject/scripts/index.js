document.addEventListener("DOMContentLoaded", function () {
  const weatherInfo = document.getElementById("weather-info");
  const apiKey = "dfb78a945b43593a207edfd2f02237f2";
  const cityId = "439d4b804";
  const cityName = "Cozumel";

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      const weather = data.weather[0];
      const main = data.main;
      const wind = data.wind;
      const sys = data.sys;
      const tempInCelsius = Math.round((main.temp - 273.15) * 10) / 10;
      const forecastIcon = `http://openweathermap.org/img/wn/${weather.icon}.png`;
      const highTemp = main.temp_max;
      const tempInCelsiusMax = Math.round((highTemp - 273.15) * 10) / 10;
      document.getElementById("high-temp").textContent = tempInCelsiusMax;

      weatherInfo.innerHTML = `
                  <h2>Weather in Cozumel</h2>
                  <p>Temperature: ${tempInCelsius}°C</p>
                  <p>Humidity: ${main.humidity}%</p>
                  <img src="${forecastIcon}" alt="${main.description} icon">
              `;
    })
    .catch((error) => console.error("Error fetching weather data:", error));

  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      const forecast = data.list.find(
        (item) => new Date(item.dt * 1000).getHours() === 15
      );
      if (forecast) {
        const forecastTemp = forecast.main.temp;
        const forecastWeather = forecast.weather[0];
        const tempInCelsius = Math.round((forecastTemp - 273.15) * 10) / 10;
        const forecastIcon = `http://openweathermap.org/img/wn/${forecastWeather.icon}.png`;

        weatherInfo.innerHTML += `
            <h3>Forecast for Tomorrow 15:00</h3>
            <p>Temperature: ${tempInCelsius}°C</p>
            <p>Weather: ${forecastWeather.main} - ${forecastWeather.description}</p>
            <img src="${forecastIcon}" alt="${forecastWeather.description} icon">
          `;
      }
    })
    .catch((error) => console.error("Error fetching forecast data:", error));
});

function closeMessage() {
  document.getElementById("high-temp-message").style.display = "none";
}
