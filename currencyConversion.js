const fetchExchangeRates = async () => {
  try {
    const res = await fetch("https://api.exchangerate.host/latest");
    return await res.json();
  } catch (error) {
    console.error(error);
  }
};

const populateCurrencies = async () => {
  const exchangeRates = await fetchExchangeRates();
  const fromCurrencySelect = document.querySelector("#fromCurrency");
  const toCurrencySelect = document.querySelector("#toCurrency");
  Object.entries(exchangeRates.rates).forEach(([currency]) => {
    const fromOption = new Option(currency, currency);
    const toOption = new Option(currency, currency);
    fromCurrencySelect.add(fromOption);
    toCurrencySelect.add(toOption);
  });
};

const convertCurrency = async () => {
  const amount = document.querySelector("#amount").value;
  const fromCurrency = document.querySelector("#fromCurrency").value;
  const toCurrency = document.querySelector("#toCurrency").value;
  const exchangeRates = await fetchExchangeRates();
  const exchangeRate = exchangeRates.rates[toCurrency] / exchangeRates.rates[fromCurrency];
  const result = (amount * exchangeRate).toFixed(2);
  document.querySelector("#convertResult").textContent = `${amount} ${fromCurrency} is equivalent to ${result} ${toCurrency}`;
};

document.addEventListener("DOMContentLoaded", () => {
  populateCurrencies();
  document.querySelector("#convertBtn").addEventListener("click", convertCurrency);
});
