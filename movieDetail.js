const urlParams = new URLSearchParams(window.location.search);
const movieIdFromURL = urlParams.get("movieId");

function displayMovieDetails(movie) {
  const detailsContainer = document.getElementById("movie-details-container");
  detailsContainer.innerHTML = "";
  
  if (!movie) {
    detailsContainer.textContent = "No details found for this movie.";
    return;
  }
  
  // Create card for movie details
  const card = document.createElement("div");
  card.classList.add("card");
  
  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  cardHeader.textContent = `${movie.title}`;
  card.appendChild(cardHeader);
  
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  // Add directors
  const directorsElem = document.createElement("p");
  directorsElem.textContent = "Directors: " + movie.Directors.join(", ");
  cardBody.appendChild(directorsElem);
  
  // Add writers
  const writersElem = document.createElement("p");
  writersElem.textContent = "Writers: " + movie.Writers.join(", ");
  cardBody.appendChild(writersElem);
  
  // Add stars
  const starsElem = document.createElement("p");
  starsElem.textContent = "Stars: " + movie.Stars.join(", ");
  cardBody.appendChild(starsElem);
  
  card.appendChild(cardBody);
  detailsContainer.appendChild(card);
}
// Fetch person details from the API
function fetchPersonDetails(personId) {
  fetch(`http://localhost:5043/People/${personId}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Assuming data contains the movie details
    displayMovieDetails(data);
  })
  .catch(error => {
    console.error('Fetch error: ', error.message);
  });
}

// On page load or at some trigger, call the fetch function
fetchPersonDetails(movieIdFromURL);
