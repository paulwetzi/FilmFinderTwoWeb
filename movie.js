document.addEventListener("DOMContentLoaded", async () => {
  setupNavbarToggle();

  // Button elements (Add these functionalities later if needed)
  const addMovieButton = document.getElementById("addMovieButton");
  const deleteStorageButton = document.getElementById("deleteStorageButton");
  const updateStorageButton = document.getElementById("updateStorageButton");

  const urlParams = new URLSearchParams(window.location.search);
  const movieIdFromURL = urlParams.get("movieId");
  if (movieIdFromURL) {
    await fetchMovieDetails(movieIdFromURL);
  } else {
    console.log("No movieId found in the query parameters.");
    // Handle the case where movieId is not available in the query parameters
  }

  const storageIdFromQuery = urlParams.get("storageId");
  if (storageIdFromQuery) {
    await fetchDataByStorageId(storageIdFromQuery);
  } else {
    console.log("No storageId found in the query parameters.");
    // Handle the case where storageId is not available in the query parameters
  }
});
function handleAddMovieClick(storageId) {
  // get current URL
  const currentUrl = window.location.href;

  // Check if the URL already has query parameters
  if (currentUrl.includes("?")) {
    window.location.href = `${currentUrl}&storageId=${storageId}`;
  } else {
    window.location.href = `${currentUrl}?storageId=${storageId}`;
  }
}

async function fetchDataByStorageId(storageId) {
  const apiUrl = `http://localhost:5043/Movie/GetAllMovie?moviesId=${storageId}`;
  try {
    const data = await fetchDataFromAPI(apiUrl);
    displayMovies(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function fetchDataFromAPI(url) {
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}

function displayMovies(movies) {
  const cardsContainer = document.getElementById("movies-container");
  cardsContainer.innerHTML = "";
  if (!movies || movies.length === 0) {
    cardsContainer.textContent = "No movies found for this storage.";
    return;
  }
  movies.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-movie-id", movie.id);
    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header", "m-3");
    cardHeader.textContent = `${movie.title}`;
    card.appendChild(cardHeader);
    cardsContainer.appendChild(card);
    card.addEventListener("click", (event) => {
      const selectedMovieId = event.currentTarget.getAttribute("data-movie-id");
      handleMovieCardClick(selectedMovieId);
    });
  });
}

async function handleMovieCardClick(movieId) {
  const apiUrl = `http://localhost:5043/Movie/GetMovie?id=${movieId}`;
  try {
    await fetchDataFromAPI(apiUrl);
    window.location.href = `movieDetail.php?movieId=${movieId}`;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}

async function fetchMovieDetails(movieId) {
  const apiUrl = `http://localhost:5043/Movie/GetMovie?id=${movieId}`;
  try {
    const data = await fetchDataFromAPI(apiUrl);
    console.log("Data fetched:", data);
    // Placeholder for displaying movie details
    // displayMovieDetails(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
function getStorageIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("storageId");
}
addMovieButton.addEventListener("click", function () {
  const storageId = getStorageIdFromUrl();
  window.location.href = `./postMovie.php?storageId=${storageId}`;
});
deleteStorageButton.addEventListener("click", function () {
  const storageId = getStorageIdFromUrl();
  window.location.href = `./deleteStorage.php?storageId=${storageId}`;
});
updateStorageButton.addEventListener("click", function () {
  const storageId = getStorageIdFromUrl();
  window.location.href = `./updateStorage.php?storageId=${storageId}`;
});

// Placeholder for displaying individual movie details
// function displayMovieDetails(movie) {
//   // Code to display individual movie details goes here...
// }
