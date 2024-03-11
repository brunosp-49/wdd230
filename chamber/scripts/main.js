window.onload = function () {
  var lastModifiedDate = new Date(document.lastModified);

  var formattedDate =
    lastModifiedDate.toLocaleDateString() +
    " " +
    lastModifiedDate.toLocaleTimeString();

  var lastModifiedElement = document.getElementById("lastModifiedDate");

  if (lastModifiedElement) {
    console.log("Last Modified Date:", formattedDate);
    lastModifiedElement.textContent = formattedDate;
  } else {
    console.error('Element with id "lastModified" not found.');
  }
};

const apiKey = "dfb78a945b43593a207edfd2f02237f2";
const cityName = "São José dos Campos";
const cityId = "3448636";

function call() {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      const tempInCelsius = Math.round((data.main.temp - 273.15) * 10) / 10;
      document.getElementById("temperature").textContent = `${tempInCelsius}°C`;
      document.getElementById("current-description").textContent =
        data.weather[0].description;
      document.getElementById(
        "humidity"
      ).textContent = `${data.main.humidity}%`;
    })
    .catch((error) => console.error("Error:", error));
}

function fetchForecast() {
  fetch(
     `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&appid=${apiKey}`
  )
     .then((response) => response.json())
     .then((data) => {
       const forecastContainer = document.getElementById("forecast");
       forecastContainer.classList.add("forecast-container"); 
 
       const forecastsByDay = data.list.reduce((acc, item) => {
         const forecastDate = new Date(item.dt_txt).toLocaleDateString();
         if (!acc[forecastDate]) {
           acc[forecastDate] = item;
         }
         return acc;
       }, {});
 
       const nextThreeDaysForecast = Object.values(forecastsByDay).slice(0, 3);
 
       nextThreeDaysForecast.forEach(dayForecast => {
         const forecastItem = document.createElement("div");
         forecastItem.classList.add("forecast-item"); 
 
         const avgTemp = dayForecast.main.temp; 
 
         const forecastDate = document.createElement("div");
         forecastDate.textContent = `${new Date(dayForecast.dt_txt).toLocaleDateString()}`;
         forecastItem.appendChild(forecastDate);
 
         const forecastTemperature = document.createElement("div");
         forecastTemperature.textContent = `${Math.round(avgTemp)}°C`;
         forecastItem.appendChild(forecastTemperature);
 
         forecastContainer.appendChild(forecastItem);
       });
     })
     .catch((error) => console.error("Error fetching forecast data:", error));
 }

fetchForecast();

call();

document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobileMenuButton");
  const desktopNav = document.getElementById("desktopNav");

  mobileMenuButton.addEventListener("click", function () {
    if (desktopNav.style.display === "none") {
      desktopNav.style.display = "block";
    } else {
      desktopNav.style.display = "none";
    }
  });
});

const today = new Date();
const dayOfWeek = today.getDay();
if (dayOfWeek === 1 || dayOfWeek === 2 || dayOfWeek === 3) {
  document.getElementById("meet-and-greet-banner").style.display = "flex";
}

// Close the banner
document.getElementById("close-banner").addEventListener("click", () => {
  document.getElementById("meet-and-greet-banner").style.display = "none";
});
