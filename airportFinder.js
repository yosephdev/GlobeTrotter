
// =========================== AIRPORT FINDER API ===============================
var theCity;

// BUTTON GRAB VALUE FROM INPUT #CITYNAME

$("#airportBtn").on("click", function (event) {
    event.preventDefault();
    $("ul").empty();
    theCity = $("#cityName").val();
    
    // AJAX CALL 
    var settings = {
        async: true,
        crossDomain: true,
        url: "https://airportix.p.rapidapi.com/airport/code/MUC/{icao_code}" + theCity + "/",
        method: "GET",
        headers: {
            "x-rapidapi-host": "airportix.p.rapidapi.com",
            "x-rapidapi-key": "cbd9be7746msh922bcfc5a5584b6p11a1f2jsn70aedb4ccd02"
        },
    };
    $.ajax(settings).done(function (response) {
        console.log(response);

        // CREATE A UL TO APPEND LIs UNDER, LATER
        var $newUl = $("<ul>");

        // CREATE LIs TO GRAB INFO FROM ARRAY AND APPENTO UL
        var $newLi = $(
            `<li id="liName" class="list-unstyled text-regular font-weight-regular">${response.data.name.original},</li>
            <li class="list-unstyled font-weight-regular">${response.data.city.cityOriginal}, ${response.data.stateCode}</li>
            <li class="list-unstyled font-weight-regular">${response.data.location.latitude}, ${response.data.location.longitude}</li>`
        );
        $newLi.appendTo($newUl);
        // APPENDTO PAGE
        $newUl.appendTo("#airportNames");
    });
});
