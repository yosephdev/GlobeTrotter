// ======================================== TIME ZONE API ============================================-=

$("#clockSearchBtn").on("click", function(event) {
    event.preventDefault();
    $("ul").empty();
    var clockCountry = $("#clock-country").val();
    var clockCity = $("#clock-city").val();
    var settings = {
        async: true,
        crossDomain: true,
        url:
            "https://world-time2.p.rapidapi.com/timezone/" +
            clockCountry +
            "/" +
            clockCity,
        method: "GET",
        headers: {
            "x-rapidapi-host": "world-time2.p.rapidapi.com",
            "x-rapidapi-key": "912f8882abmsh597d3316e2e61bcp121db1jsnabc830ace42d"
        },
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
        console.log(moment(response.datetime).format("h:mm:ss A"));
        
        var $clockUl = $("<ul>");
        var $clockLi = $(
            `<li class="list-unstyled font-weight-normal">
                Timezone: ${response.timezone}, ${response.abbreviation}</li>
            <li class="list-unstyled font-weight-normal">
                ${(moment(response.datetime.substring(0, response.datetime.length - 13)).format('MMMM Do YYYY, h:mm a'))}
            </li>`);
        
        $clockLi.appendTo($clockUl);
        $clockUl.appendTo("#clockZones");
    });
});