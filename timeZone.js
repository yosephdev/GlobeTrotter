// Time Zone API
// Get the time zone of a city

document.querySelector("#timezoneBtn").addEventListener("click", function () {
  const timezone = document.querySelector("#timezone").value;
  fetch(
    `http://api.timezonedb.com/v2.1/get-time-zone?key=your_api_key&format=json&by=zone&zone=${timezone}`
  )
    .then((response) => response.json())
    .then((data) => {
      const time = data.formatted;
      document.querySelector("#timezoneResults").innerHTML = "Time: " + time;
    })
    .catch((error) => console.error(error));
});

 