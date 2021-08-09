



// ======================================= CURRENCY CONVERSION API ============================================================

var amount;

// BUTTON TO CONVERT CURRENCY, GRAB HTML IDs IN VARIABLES TO BE USE LATER =========================================

$("#convertBtn").on("click", function (event) {
    event.preventDefault();
    $("ul").empty();

    var cur1 = $("#first-currency").val();
    var cur2 = $("#second-currency").val();
    amount = $("#currency-amount").val();

    // AJAX CALL TO URL, CUR1, CUR2 TAKE ANY VALUE SELECTED ON THE HTML PAGE
    var covSettings = {
        async: true,
        crossDomain: true,
        url:
            "https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=" +
            cur1 +
            "&to=" +
            cur2 +
            "&amount=" +
            amount,
        method: "GET",
        headers: {
            "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
            "x-rapidapi-key": "29dd263ad6mshc1112f72b21d1dcp179f5ejsn33dcadd6248f"
        }
    };

    $.ajax(covSettings).done(function (response) {
        console.log(response);

        var $moneyUl = $("<ul>");

        // Converted a string into a float.
        var rate = response.rates[cur2].rate_for_amount;
        var parseRate = parseFloat(rate).toFixed(2)
        var rate2 = response.rates[cur2].rate;
        var parseRate2 = parseFloat(rate2).toFixed(2)

        var $moneyli = $(`<li class="list-unstyled font-weight-normal">
            ${"Currency Name: " + response.rates[cur2].currency_name}</li>
            <li class="list-unstyled font-weight-regular">
            ${"Rate per unit: " + "$" + parseRate2}</li>                
            <li class="list-unstyled font-weight-regular">
            ${"Rate amount: " + "$" + parseRate}</li>`);

        console.log(response.rates[cur2].rate_for_amount);

        $moneyli.appendTo($moneyUl);
        $moneyUl.appendTo("#currencyConv");
    });

    console.log(amount);
});