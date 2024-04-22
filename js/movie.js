document.addEventListener("DOMContentLoaded", async () => {
  const addMovieButton = document.getElementById("addMovieButton");
  const deleteStorageButton = document.getElementById("deleteStorageButton");
  const updateStorageButton = document.getElementById("updateStorageButton");
  const searchMovieButton = document.getElementById("searchMovieButton");

  const urlParams = new URLSearchParams(window.location.search);
  const movieIdFromURL = urlParams.get("movieId");
  if (movieIdFromURL) {
    await fetchMovieDetails(movieIdFromURL);
  } else {
    console.log("No movieId found in the query parameters.");
  }

  const storageIdFromQuery = urlParams.get("storageId");
  if (storageIdFromQuery) {
    await displayStoragename(storageIdFromQuery);
    await fetchDataByStorageId(storageIdFromQuery);
  } else {
    console.log("No storageId found in the query parameters.");
  }
});
function handleAddMovieClick(storageId) {
  const currentUrl = window.location.href;

  if (currentUrl.includes("?")) {
    window.location.href = `${currentUrl}&storageId=${storageId}`;
  } else {
    window.location.href = `${currentUrl}?storageId=${storageId}`;
  }
}

async function displayStoragename(storageId) {
  const apiUrl = `http://localhost:5043/Storage/GetStorageQuery?idToFind=${storageId}`;
  try {
    const data = await fetchDataFromAPI(apiUrl);

    const storageNameElement = document.getElementById("storageName");
    storageNameElement.textContent = data.name;
    storageNameElement.classList.add("title");

    const storageDescriptionElement =
      document.getElementById("storageDescription");
    storageDescriptionElement.textContent = data.description;
    storageDescriptionElement.classList.add(""); // add classes
  } catch (error) {
    console.error("Error fetching data:", error);
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
    card.classList.add("card", "m-3");
    card.setAttribute("data-movie-id", movie.id);

    const cardHeader = document.createElement("header");
    cardHeader.classList.add("card-header");
    card.appendChild(cardHeader);

    const cardHeaderTitle = document.createElement("p");
    cardHeaderTitle.classList.add("card-header-title");
    cardHeaderTitle.textContent = `${movie.title}`;
    cardHeader.appendChild(cardHeaderTitle);

    // Create dropdown menu
    const dropdown = document.createElement("div");
    dropdown.classList.add("dropdown", "is-right");
    cardHeader.appendChild(dropdown);

    const dropdownTrigger = document.createElement("div");
    dropdownTrigger.classList.add("dropdown-trigger");
    dropdown.appendChild(dropdownTrigger);

    const dropdownButton = document.createElement("button");
    dropdownButton.classList.add("button");
    dropdownButton.setAttribute("aria-haspopup", "true");
    dropdownButton.setAttribute("aria-controls", "dropdown-menu");
    dropdownTrigger.appendChild(dropdownButton);

    const dropdownButtonContent = document.createElement("span");
    dropdownButtonContent.innerHTML = "•••";
    dropdownButton.appendChild(dropdownButtonContent);

    const dropdownMenu = document.createElement("div");
    dropdownMenu.classList.add("dropdown-menu");
    dropdownMenu.id = "dropdown-menu";
    dropdownMenu.setAttribute("role", "menu");
    dropdown.appendChild(dropdownMenu);

    const dropdownContent = document.createElement("div");
    dropdownContent.classList.add("dropdown-content");
    dropdownMenu.appendChild(dropdownContent);

    const updateOption = document.createElement("a");
    updateOption.classList.add("dropdown-item");
    updateOption.href = "#";
    updateOption.textContent = "Update";
    updateOption.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      const card = deleteOption.closest('.card');
      const movieId = card.getAttribute("data-movie-id");
      window.location.href = `./updateMovie.php?movieId=${movieId}`;
    });
    dropdownContent.appendChild(updateOption);

    const deleteOption = document.createElement("a");
    deleteOption.classList.add("dropdown-item");
    deleteOption.href = "#";
    deleteOption.textContent = "Delete";
    deleteOption.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      const card = deleteOption.closest('.card');
      const movieId = card.getAttribute("data-movie-id");
      window.location.href = `./deleteMovie.php?movieId=${movieId}`;
    });
    dropdownContent.appendChild(deleteOption);

    cardsContainer.appendChild(card);

    card.addEventListener("click", async () => {
      const apiUrl = `http://localhost:5043/Movie/GetMovie?id=${movie.id}`;
      try {
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        const movieData = await response.json();
        const imDbUrl = movieData.imDbUrl;
    
        if (imDbUrl) {
          window.location.href = imDbUrl;
        } else {
          console.error("No IMDb URL found for the movie");
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    });
    
    dropdown.addEventListener("click", function (event) {
      event.stopPropagation();
      dropdown.classList.toggle("is-active");
    });
  });

  document.addEventListener("click", function (event) {
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(function (dropdown) {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-active");
      }
    });
  });
}
document.getElementById("search-input").addEventListener("input", function () {
  const query = this.value.trim();
  if (query) {
    searchMovies(query);
  } else {
    // Handle the case when the input is cleared, like fetching all movies or clearing the display
    const urlParams = new URLSearchParams(window.location.search);
    const storageIdFromQuery = urlParams.get("storageId");
    fetchDataByStorageId(storageIdFromQuery);
  }
});
async function searchMovies(query) {
  const urlParams = new URLSearchParams(window.location.search);
  const storageIdFromQuery = urlParams.get("storageId");
  const apiUrl = `http://localhost:5043/Movie/GetAllMovieNameStorage?moviesId=${storageIdFromQuery}&moviesTitle=${encodeURIComponent(query)}`;


  try {
    const data = await fetchDataFromAPI(apiUrl);
    // Process the data, e.g., display the search results on the page
    displayMovies(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
async function fetchMovieDetails(movieId) {
  const apiUrl = `http://localhost:5043/Movie/GetMovie?id=${movieId}`;
  try {
    const data = await fetchDataFromAPI(apiUrl);
    console.log("Data fetched:", data);
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
searchMovieButton.addEventListener("click", function () {
  const storageId = getStorageIdFromUrl();
  window.location.href = `./searchMovie.php?storageId=${storageId}`;
});
// scanMovieButton.addEventListener("click", function () {
//   const storageId = getStorageIdFromUrl();
//   window.location.href = `./scanMovie.php?storageId=${storageId}`;
// });

document.addEventListener('DOMContentLoaded', function() {
  const dropdownTrigger = document.querySelector('.dropdown-trigger button');
  const dropdown = document.querySelector('.dropdown');

  dropdownTrigger.addEventListener('click', function() {
      dropdown.classList.toggle('is-active');
  });

  // Close dropdown if clicked outside
  document.addEventListener('click', function(event) {
      if (dropdown.contains(event.target)) {
          // Clicked inside the dropdown, do nothing
          return;
      }
      // Clicked outside the dropdown, close it
      dropdown.classList.remove('is-active');
  });
});

