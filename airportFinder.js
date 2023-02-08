// AIRPORT FINDER //
// This code is used to find the airport of a city.

document.getElementById("airportBtn").addEventListener("click", function () {
    const airportCode = document.getElementById("cityName").value;
    const api = `https://nominatim.openstreetmap.org/search?q=${airportCode} airport&format=json`;
  
    fetch(api)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.length > 0) {
          const result = `
            <p class="mb-4 text-gray-700">
              ${data[0].display_name}              
            </p>
          `;
  
          document.getElementById("airportResult").innerHTML = result;
        } else {
          document.getElementById("airportResult").innerHTML = "No airport found with code: " + 
            airportCode;
        }
      })
    .catch(err => console.log(err));
});
  
