document.getElementById("submitButton").addEventListener("click", searchMovie);
async function searchMovie() {
  const movieName = document.getElementById("movieSearch").value;
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = ""; // Clear previous results

  const apiKey = "65df6076";
  const apiUrl = `http://www.omdbapi.com/?s=${movieName}&apikey=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.Response === "True") {
      data.Search.forEach(movie => {
        const imdbUrl = `https://www.imdb.com/title/${movie.imdbID}/`;
        const movieTitle = movie.Title;
        
        // Append results using Bulma card for each movie
        resultsDiv.innerHTML += `
          <div class="card m-3">
            <div class="card-image">
              <div class="image-container">
                <figure class="image is-4by3 movie-image">
                  <img src="${movie.Poster}" alt="${movieTitle}">
                </figure>
              </div>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">${movieTitle}</p>
                  <p class="subtitle is-6">${movie.Year}</p>
                </div>
              </div>
      
              <div class="content">
                <br>
                <a id="imdbLink" href="${imdbUrl}">View on IMDb</a>
              </div>
            </div>
            <footer class="card-footer">
              <a href="#" onclick="addMovieToStorage('${movieTitle}', '${imdbUrl}')" class="card-footer-item">Save to Storage</a>
            </footer>
          </div>
        `;
      });
    } else {
      resultsDiv.textContent = "Movies not found!";
    }
      
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}


function addMovieToStorage(title, imdb_url) {
  const urlParams = new URLSearchParams(window.location.search);
  const storageId = urlParams.get("storageId");

  if (!storageId) {
    console.error("StorageId is missing from the URL!");
    return;
  }

  postMovie(title, imdb_url, storageId)
    .then(() => {
      document.getElementById('results').textContent = `${title} has been added to storage!`;
    })
    .catch(error => {
      console.error("Error while adding movie to storage: ", error);
    });
}

async function postMovie(title, imdb_url, storageId) {
  const apiUrl = "http://localhost:5043/Movie/PostMovie";

  const movieData = {
    title: title,
    imdb_url: imdb_url,
    storageId: storageId,
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movieData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    console.log("Movie successfully added!");
    window.location.href = `http://localhost/FilmFinderTwo/movie.php?storageId=${storageId}`;
  } catch (error) {
    console.error("Error adding movie: ", error);
  }
}
