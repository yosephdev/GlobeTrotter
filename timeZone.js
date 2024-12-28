// Time Zone API
// Get the time zone of a city

document.querySelector("#timeZoneBtn").addEventListener("click", () => {
  const city = document.querySelector("#timeZoneCity").value;
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.openWeatherMapApiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      const time = new Date(data.dt * 1000);
      document.querySelector("#timeZoneResult").innerHTML = "Time: " + time;
    })
    .catch((error) => console.error(error));
});

