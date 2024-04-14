const searchInput = document.getElementById('movie-search');
const searchBtn = document.getElementById('search-btn');
const resultsDiv = document.getElementById('results');

searchBtn.addEventListener('click', () => {
  const movieTitle = searchInput.value.trim();

  if (movieTitle) {
    const encodedTitle = encodeURIComponent(movieTitle); // Encode special characters
    const wikiUrl = `https://en.wikipedia.org/wiki/${encodedTitle}`; // Build Wikipedia URL
    resultsDiv.innerHTML = `<a href="${wikiUrl}" target="_blank">View on Wikipedia</a>`;
  } else {
    alert('Please enter a movie title');
  }
});
