const apiKey = 'AIzaSyB81rVT8oOrg-oTeAP-2X_qiNezgv3f3gY'; // Replace with your actual Youtube Data API Key
const searchInput = document.getElementById('movie-search');
const searchBtn = document.getElementById('search-btn');
const resultsDiv = document.getElementById('results');

searchBtn.addEventListener('click', () => {
  const movieTitle = searchInput.value.trim();

  if (movieTitle) {
    fetchTrailer(movieTitle);
  } else {
    alert('Please enter a movie title');
  }
});

function fetchTrailer(movieTitle) {
  const baseUrl = 'https://www.googleapis.com/youtube/v3/search';
  const params = {
    part: 'snippet',
    q: movieTitle + ' trailer',
    maxResults: 1,
    key: apiKey
  };

  const url = new URL(baseUrl);
  url.search = new URLSearchParams(params);

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const trailerId = data.items[0].id.videoId;
      const youtubeUrl = `https://www.youtube.com/watch?v=${trailerId}`;
      resultsDiv.innerHTML = `<a href="${youtubeUrl}" target="_blank">Watch Trailer</a>`;
    })
    .catch(error => console.error(error));
}
