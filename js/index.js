document.addEventListener("DOMContentLoaded", async () => {
  fetchData();

  // Close the dropdown if click outside
  document.addEventListener("click", function (event) {
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(function (dropdown) {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-active");
      }
    });
  });
});

async function fetchData() {
  const apiUrl = `http://localhost:5043/Movie/GetAllMovies`;
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
    card.setAttribute("data-movie-storage_id", movie.storage_id);


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
      const card = deleteOption.closest(".card");
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
      const card = deleteOption.closest(".card");
      const movieId = card.getAttribute("data-movie-id");
      window.location.href = `./deleteMovie.php?movieId=${movieId}`;
    });
    dropdownContent.appendChild(deleteOption);

    const inStorageOption = document.createElement("a");
    inStorageOption.classList.add("dropdown-item");
    inStorageOption.href = "#";
    inStorageOption.textContent = "In Storage";
    inStorageOption.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      // This logic is just a placeholder and should be replaced with your actual logic
      // to fetch the storage information and redirect the user.
      const card = inStorageOption.closest(".card");
      const storageId = card.getAttribute("data-movie-storage_id");
      window.location.href = `./movie.php?storageId=${storageId}`;
    });
    dropdownContent.appendChild(inStorageOption);

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

  // Close the dropdown if click outside
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
    fetchData();
  }
});
async function searchMovies(query) {
  const apiUrl = `http://localhost:5043/Movie/GetAllMovieName?moviesTitle=${encodeURIComponent(
    query
  )}`;

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
