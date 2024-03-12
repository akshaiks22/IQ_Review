document.addEventListener("DOMContentLoaded", () => {
    const movieListElement = document.getElementById("movieList");

    // Fetch 20 Hollywood movies
// Fetch 20 Hollywood movies
fetch("https://www.omdbapi.com/?s=hollywood&type=movie&apikey=ffec05ca")
    .then(response => response.json())
    .then(data => {
        const movies = data.Search.slice(0, 20); // Get the top 20 movies
        movies.forEach(movie => {
            fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=ffec05ca`)
                .then(response => response.json())
                .then(movieDetails => {
                    displayMovie(movieDetails);
                });
        });
    });


    // Display movie details on the webpage
    function displayMovie(movie) {
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie");

        movieElement.innerHTML = `
            <h2>${movie.Title}</h2>
            <p><strong>Year:</strong> ${movie.Year}</p>
            <p><strong>Rating:</strong> ${movie.imdbRating}</p>
            <img src="${movie.Poster}" alt="${movie.Title} Poster">
            <p>${movie.Plot}</p>
        `;

        movieListElement.appendChild(movieElement);
    }
});
