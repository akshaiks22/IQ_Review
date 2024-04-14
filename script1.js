const movieForm = document.getElementById('movie-form');
const movieList = document.getElementById('movie-list');

function showMovies() {
  const movies = JSON.parse(localStorage.getItem('movies') || '[]'); // Get movies from localStorage (or empty array)
  movieList.innerHTML = ''; // Clear previous movie list
  movies.forEach((movie, index) => { // Add movie index to each item
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie-item'); // Add a CSS class for styling

    const movieImage = document.createElement('img');
    movieImage.src = movie.poster || 'default-poster.jpg'; // Set default image if no poster URL provided
    movieElement.appendChild(movieImage);

    const movieInfo = document.createElement('p');
    movieInfo.innerText = `${movie.title} (${movie.year}) - Rating: ${movie.rating}`;
    movieElement.appendChild(movieInfo);

    const movieReview = document.createElement('p');
    movieReview.innerText = `Review: ${movie.review}`;
    movieElement.appendChild(movieReview);

    // Add a delete button for each movie
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => {
      movies.splice(index, 1); // Remove movie from movies array at clicked index
      localStorage.setItem('movies', JSON.stringify(movies)); // Update localStorage
      showMovies(); // Re-display updated movie list
    });
    movieElement.appendChild(deleteButton);

    movieList.appendChild(movieElement);
  });
}

movieForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const year = document.getElementById('year').value;
  const poster = document.getElementById('poster').value;
  const rating = parseFloat(document.getElementById('rating').value);
  const review = document.getElementById('review').value;
  const movies = JSON.parse(localStorage.getItem('movies') || '[]'); // Get movies from localStorage (or empty array)
  movies.push({ title, year, poster, rating, review }); // Add new movie data
  localStorage.setItem('movies', JSON.stringify(movies)); // Store updated movies in localStorage
  movieForm.reset(); // Clear form after submission
  showMovies(); // Display updated movie list
});

// Call showMovies on page load to display any existing movies
showMovies();
