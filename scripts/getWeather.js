const apiKey = 'dfb78a945b43593a207edfd2f02237f2';
const city = 'São José dos Campos';
const units = 'metric';

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`)
   .then(response => response.json())
   .then(data => {
     const temperature = data.main.temp;
     const description = data.weather[0].description;
     const icon = data.weather[0].icon;

     // Update the information card with the fetched data
     document.getElementById('currentTemperature').textContent = `${temperature}°C`;
     document.getElementById('weatherDescription').textContent = description;
     document.getElementById('weatherIcon').src = `http://openweathermap.org/img/wn/${icon}.png`;
   })
   .catch(error => console.error('Error fetching weather data:', error));