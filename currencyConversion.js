const fetchExchangeRates = async () => {
  try {
    const res = await fetch("https://api.exchangerate.host/latest");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const populateCurrencies = async () => {
  const exchangeRates = await fetchExchangeRates();
  const fromCurrencySelect = document.querySelector("#fromCurrency");
  const toCurrencySelect = document.querySelector("#toCurrency");
  for (const [currency, rate] of Object.entries(exchangeRates.rates)) {
    const fromOption = document.createElement("option");
    fromOption.value = currency;
    fromOption.textContent = currency;
    fromCurrencySelect.appendChild(fromOption);

    const toOption = document.createElement("option");
    toOption.value = currency;
    toOption.textContent = currency;
    toCurrencySelect.appendChild(toOption);
  }
};

const convertCurrency = async () => {
  const amountInput = document.querySelector("#amount");
  const fromCurrencySelect = document.querySelector("#fromCurrency");
  const toCurrencySelect = document.querySelector("#toCurrency");
  const convertResult = document.querySelector("#convertResult");
  const exchangeRates = await fetchExchangeRates();
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;
  const amount = amountInput.value;
  const exchangeRate =
    exchangeRates.rates[toCurrency] / exchangeRates.rates[fromCurrency];
  const result = (amount * exchangeRate).toFixed(2);
  convertResult.textContent = `${amount} ${fromCurrency} is equivalent to ${result} ${toCurrency}`;
};

document.addEventListener("DOMContentLoaded", () => {
  populateCurrencies();
  const convertBtn = document.querySelector("#convertBtn");
  convertBtn.addEventListener("click", convertCurrency);
});
