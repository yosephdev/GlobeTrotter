document.getElementById("weatherBtn").addEventListener("click", () => {
  const city = document.getElementById("weatherCity").value;
  let unit = "metric";
  const temperatureElement = document.getElementById("weatherResult");

  document.getElementById("celsiusBtn").addEventListener("click", () => {
    unit = "metric";
    updateTemperature();
  });

  document.getElementById("fahrenheitBtn").addEventListener("click", () => {
    unit = "imperial";
    updateTemperature();
  });

  const updateTemperature = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`)
      .then(response => response.json())
      .then(json => {
        temperatureElement.innerHTML = json.cod === "404" ? "City not found" : `Temperature: ${json.main.temp}°${unit === "metric" ? "C" : "F"}`;
      })
      .catch(() => {
        temperatureElement.innerHTML = "Oh no!";
      });
  };

  updateTemperature();
});
