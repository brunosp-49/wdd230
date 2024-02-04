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

const apiKey = "95648dccd7a252cc6c1dc3b174ae614f";
const cityName = "São José dos Campos";

function call() {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const weatherCard = document.querySelector(".weather-card");
      const tempElement = weatherCard.querySelector("h6:nth-child(3)");
      const windElement = weatherCard.querySelector("h6:nth-child(5)");
      const humidityElement = weatherCard.querySelector("h6:nth-child(6)");
      const descriptionElement = weatherCard.querySelector("p");

      // Convert temperature from Kelvin to Celsius
      const tempInCelsius = Math.round((data.main.temp - 273.15) * 10) / 10;

      tempElement.textContent = `${tempInCelsius}°C`;
      windElement.textContent = `Wind: ${data.wind.speed} m/s`;
      humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
      descriptionElement.textContent = data.weather[0].description;
    })
    .catch((error) => console.error("Error:", error));
}

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
