function calculateWindChill(temperature, windSpeed) {
    if (temperature <=  50 && windSpeed >  3.0) {
      var windChill =  35.74 +  0.6215 * temperature -  35.75 * Math.pow(windSpeed,  0.16) +  0.4275 * temperature * Math.pow(windSpeed,  0.16);
      return windChill.toFixed(1);
    } else {
      return 'N/A';
    }
  }
  
  // Example usage:
  var temperature =  10; // Replace with actual temperature
  var windSpeed =  5; // Replace with actual wind speed
  var windChill = calculateWindChill(temperature, windSpeed);
  document.getElementById('windChill').textContent = windChill + '°C';
  