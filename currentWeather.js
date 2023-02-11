document.getElementById("weatherBtn").addEventListener("click", function () {
  let city = document.getElementById("weatherCity").value;
  let unit = "metric";
  let temperatureElement = document.getElementById("weatherResult");

  let celsiusBtn = document.getElementById("celsiusBtn");
  let fahrenheitBtn = document.getElementById("fahrenheitBtn");

  celsiusBtn.addEventListener("click", function () {
    unit = "metric";
    updateTemperature();
  });

  fahrenheitBtn.addEventListener("click", function () {
    unit = "imperial";
    updateTemperature();
  });

  function updateTemperature() {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        if (json.cod === "404") {
          temperatureElement.innerHTML = "City not found";
        } else {
          temperatureElement.innerHTML = `Temperature: ${json.main.temp}°${
            unit === "metric" ? "C" : "F"
          }`;
        }
      })
      .catch((error) => {
        temperatureElement.innerHTML = "Oh no!";
      });
  }

  updateTemperature();
});
