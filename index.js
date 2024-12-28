// Fetching a random quote from Type.fit API
async function fetchRandomQuote() {
  try {
    console.log('Fetching quote...');
    const response = await fetch("https://type.fit/api/quotes");
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Data fetched:', data);
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomQuote = data[randomIndex];
    const quoteElement = document.getElementById('quote');
    if (quoteElement) {
      quoteElement.innerHTML = `${randomQuote.text} - <em>${randomQuote.author || 'Unknown'}</em>`;
      console.log('Quote displayed:', randomQuote);
    } else {
      console.error('Quote element not found');
    }
  } catch (error) {
    console.error('Error fetching quote:', error);
  }
}

// Call the function to fetch and display a quote
fetchRandomQuote();