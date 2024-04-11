document.addEventListener("DOMContentLoaded", function () {
  const weatherInfo = document.getElementById("weather-info");
  const apiKey = "dfb78a945b43593a207edfd2f02237f2";
  const cityId = "439d4b804";
  const cityName = "Cozumel"

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      const weather = data.weather[0];
      const main = data.main;
      const wind = data.wind;
      const sys = data.sys;

      weatherInfo.innerHTML = `
                <h2>Weather in Cozumel</h2>
                <p>Temperature: ${main.temp}°C</p>
                <p>Humidity: ${main.humidity}%</p>
                <p>Weather: ${weather.main} - ${weather.description}</p>
                <p>Wind: ${wind.speed} m/s</p>
                <p>Sunrise: ${new Date(
                  sys.sunrise * 1000
                ).toLocaleTimeString()}</p>
                <p>Sunset: ${new Date(
                  sys.sunset * 1000
                ).toLocaleTimeString()}</p>
            `;
    })
    .catch((error) => console.error("Error fetching weather data:", error));
});

// Inside script.js
document.addEventListener("DOMContentLoaded", function () {
  const rentalsTable = document.getElementById("rentals-table");

  fetch("data/rentals.json")
    .then((response) => response.json())
    .then((data) => {
      let html = "<table>";
      html +=
        "<tr><th>Type</th><th>Max Persons</th><th>Half Day</th><th>Full Day</th></tr>";
      data.rentals.forEach((rental) => {
        html += `<tr>
                            <td>${rental.type}</td>
                            <td>${rental.maxPersons}</td>
                            <td>${rental.halfDay}</td>
                            <td>${rental.fullDay}</td>
                         </tr>`;
      });
      html += "</table>";
      rentalsTable.innerHTML = html;
    })
    .catch((error) => console.error("Error fetching rentals data:", error));
});

document
  .getElementById("reservation-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submitted");
  });

function initMap() {
  const locations = [
    { lat: 20.4793, lng: -86.9189 }, // Location 1
    { lat: 20.48, lng: -86.918 }, // Location 2
  ];

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: locations[0],
  });

  locations.forEach((location) => {
    new google.maps.Marker({
      position: location,
      map: map,
    });
  });
}
