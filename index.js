const API_KEY = "YOUR_API_KEY";

document.getElementById("weatherBtn").addEventListener("click", function () {
  let city = document.getElementById("weatherCity").value;
  let unit = "metric";
  let temperatureElement = document.getElementById("weatherResult");

  let toggleSwitch = document.createElement("div");
  toggleSwitch.innerHTML = `<p class="text-gray-700">°C / °F</p>
                                <label class="switch">
                                    <input type="checkbox">
                                    <span class="slider round"></span>
                                </label>`;
  temperatureElement.appendChild(toggleSwitch);

  document
    .querySelector("input[type='checkbox']")
    .addEventListener("change", function () {
      if (this.checked) {
        unit = "imperial";
      } else {
        unit = "metric";
      }
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
