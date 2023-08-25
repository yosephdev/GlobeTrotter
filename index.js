// index.js
// const apiKey = API_KEY;

// Fetching quote of the day from an API
fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    document.getElementById('quote').innerHTML = `${data.content} - ${data.author}`;
  })
  .catch(error => console.error(error));