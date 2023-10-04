document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });
});

// fetch("http://localhost:5043/storage?idToFind=2", {
//   headers: {
//     "Content-Type": "application/json; charset=utf-8",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

//NIIIIICEEEEE
async function getMovieFromStorage(id) {
  id = 2;
  const response = await fetch(
    "http://localhost:5043/storage?" + new URLSearchParams({ idToFind: id }),
    {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    }
  );
  const data = await response.json();
  console.log(data);
}

getMovieFromStorage(2);

// response 200 is wanted!!!

// Assuming you have a function fetchMoviesByStorage(storageId) to get movies based on storage ID from your API
function fetchMoviesByStorage(storageId) {
  // Fetch movies from your API based on storage ID
  // Example API call using fetch:
  // fetch(`your-api-endpoint/movies?storageId=${storageId}`)
  //   .then(response => response.json())
  //   .then(data => {
  //     // Process the fetched movies data here
  //     // Call a function to display movies and pass the data
  //     displayMovies(data);
  //   })
  //   .catch(error => console.error('Error:', error));
}

// Function to display storage dynamically
function displayStorage(storages) {
  const storageContainer = document.getElementById("storages-container");
  storageContainer.innerHTML ="";

  // Iterate through the storage and create storage elements
  storages.forEach((storage) => {
    const storageElement = document.createElement("div");
    movieElement.classList.add("storage-card");
    movieElement.textContent = storage.name; // Assuming your movie object has a 'title' property

    moviesContainer.appendChild(storageElement);
  });
}


// Function to display movies dynamically
function displayMovies(movies) {
  const moviesContainer = document.getElementById("movies-container");
  moviesContainer.innerHTML = ""; // Clear previous movie data

  // Iterate through the movies and create movie elements
  movies.forEach((movie) => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie-card");
    movieElement.textContent = movie.title; // Assuming your movie object has a 'title' property

    moviesContainer.appendChild(movieElement);
  });
}

// Function to handle click event on storage cards
function handleStorageCardClick(event) {
  const storageId = event.target.dataset.storageId; // Get the storage ID from the clicked card
  fetchMoviesByStorage(storageId); // Fetch and display movies for the clicked storage
}

// Call the function to fetch storage data and create storage cards when the page loads
window.onload = function () {
  fetchDataFromAPI(); // Assuming you have a function to fetch storage data
  // Add click event listener to the document and delegate it to storage cards
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("storage-card")) {
      handleStorageCardClick(event);
    }
  });
};
