// AIRPORT FINDER //
// This code is used to find the airport of a city.

document.getElementById("airportBtn").addEventListener("click", () => {
    const airportCode = document.getElementById("cityName").value;
    const api = `https://nominatim.openstreetmap.org/search?q=${airportCode} airport&format=json`;

    fetch(api)
        .then(response => response.json())
        .then(data => {
            const result = data.length > 0 ? `<p class="mb-4 text-gray-700">${data[0].display_name}</p>` : "No airport found with code: " + airportCode;
            document.getElementById("airportResult").innerHTML = result;
        })
        .catch(err => console.error(err));
});
  
