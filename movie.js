// document.addEventListener("DOMContentLoaded", async () => {
//   const navbarBurgers = document.querySelectorAll(".navbar-burger");

//   navbarBurgers.forEach((burger) => {
//     burger.addEventListener("click", () => {
//       const targetId = burger.dataset.target;
//       const targetElement = document.getElementById(targetId);

//       burger.classList.toggle("is-active");
//       targetElement.classList.toggle("is-active");
//     });
//   });

//   // Your existing code for toggling navbar elements...

// const addMovieButton = document.getElementById("addMovieButton");
// addMovieButton.addEventListener("click", handleAddMovieClick);
// const deleteStorageButton = document.getElementById("deleteStorageButton");
// const updateStorageButton = document.getElementById("updateStorageButton");
// const movieId = document.getElementById("movieDetail");

// Get the movieId from the query parameters in the current URL
// const urlParams = new URLSearchParams(window.location.search);
// const movieId = urlParams.get("movieId");
// if (movieId) {
//   await fetchMovieDetails(movieId);
// } else {
//   console.log("No movieId found in the query parameters.");
//   // Handle the case where movieId is not available in the query parameters
// }
// });

//   // Rest of your code...

//   // Get the query parameters from the URL
//   const queryParams = new URLSearchParams(window.location.search);

//   // Get the value of 'storageId' from the query parameters
//   const storageIdFromQuery = queryParams.get("storageId");

//   // Call the function to fetch data based on the storageId
//   if (storageIdFromQuery) {
//     await fetchDataByStorageId(storageIdFromQuery);
//   } else {
//     console.log("No storageId found in the query parameters.");
//     // Handle the case where storageId is not available in the query parameters
//   }
// });

// async function fetchDataByStorageId(storageId) {
//   const apiUrl = `http://localhost:5043/Movie/GetAllMovie?moviesId=${storageId}`;

//   try {
//     const response = await fetch(apiUrl);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log("Data fetched:", data); // Check the structure of the response
//     displayMovies(data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     // Handle errors if any
//   }
// }

// async function fetchDataFromAPI(url) {
//   console.log(url);
//   try {
//     const response = await fetch(url, {
//       headers: {
//         "Content-Type": "application/json; charset=utf-8",
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     return response.json();
//   } catch (error) {
//     console.error("Error fetching data: ", error);
//   }
// }

// // function displayMovies(movies) {
// //   const cardsContainer = document.getElementById("movies-container");
// //   cardsContainer.innerHTML = "";

// //   if (!movies || movies.length === 0) {
// //     cardsContainer.textContent = "No movies found for this storage.";
// //     return;
// //   }

// //   movies.forEach((movie) => {
// //     const card = document.createElement("div");
// //     card.classList.add("card");

// //     const cardHeader = document.createElement("div");
// //     cardHeader.classList.add("card-header", "m-3");
// //     cardHeader.textContent = `${movie.title}`; // Display both ID and Title, adjust as needed  ID: ${movie.id}, Title:

// //     card.appendChild(cardHeader);
// //     cardsContainer.appendChild(card);

// //     card.addEventListener("click", () => {
// //       handleMovieCardClick(movieId);
// //     });
// //   });
// // }

// function displayMovies(movies) {
//   const cardsContainer = document.getElementById("movies-container");
//   cardsContainer.innerHTML = "";

//   if (!movies || movies.length === 0) {
//     cardsContainer.textContent = "No movies found for this storage.";
//     return;
//   }

//   movies.forEach((movie) => {
//     const card = document.createElement("div");
//     card.classList.add("card");

//     // Storing the movie id as a data attribute
//     card.setAttribute('data-movie-id', movie.id);

//     const cardHeader = document.createElement("div");
//     cardHeader.classList.add("card-header", "m-3");
//     cardHeader.textContent = `${movie.title}`; // Display both ID and Title, adjust as needed  ID: ${movie.id}, Title:

//     card.appendChild(cardHeader);
//     cardsContainer.appendChild(card);

//     card.addEventListener("click", (event) => {
//       // Retrieving the movieId from the clicked card's data attribute
//       const movieId = event.currentTarget.getAttribute('data-movie-id');
//       handleMovieCardClick(movieId);
//     });
//   });
// }

// async function handleMovieCardClick(movieId) {
//   const apiUrl = `http://localhost:5043/Movie/GetMovie?id=${movieId}`;

//   try {
//   const data = await fetchDataFromAPI(apiUrl);

//   window.location.href = `movieDetail.html?movieId=${movieId}`;

//   } catch (error){
//     console.error("Error fetching data: ", error)
//   }

// }
// async function fetchDataFromAPI(url) {
//   console.log(url);
//   try {
//     const response = await fetch(url, {
//       headers: {
//         "Content-Type": "application/json; charset=utf-8",
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     return response.json();
//   } catch (error) {
//     console.error("Error fetching data: ", error);
//   }
// }
// async function fetchMovieDetails(movieId) {
//   const apiUrl = `http://localhost:5043/Movie/GetMovie?id=${movieId}`;
//   try {
//     const response = await fetch(apiUrl);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log("Data fetched:", data); // You should now see "Read movie with id: 19" or similar
//     // displayMovieDetails(data);  // If you have a function to display the movie's details
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

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

function setupNavbarToggle() {
  const navbarBurgers = document.querySelectorAll(".navbar-burger");
  navbarBurgers.forEach((burger) => {
    burger.addEventListener("click", () => {
      const targetId = burger.dataset.target;
      const targetElement = document.getElementById(targetId);
      burger.classList.toggle("is-active");
      targetElement.classList.toggle("is-active");
    });
  });
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
    window.location.href = `movieDetail.html?movieId=${movieId}`;
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
  return urlParams.get('storageId');
}
addMovieButton.addEventListener("click", function() {
  const storageId = getStorageIdFromUrl();
  window.location.href = `postMovie.html?storageId=${storageId}`;
});
deleteStorageButton.addEventListener("click", function() {
  const storageId = getStorageIdFromUrl();
  window.location.href = `deleteStorage.html?storageId=${storageId}`;
});
updateStorageButton.addEventListener("click", function() {
  const storageId = getStorageIdFromUrl();
  window.location.href = `updateStorage.html?storageId=${storageId}`;
});

// Placeholder for displaying individual movie details
// function displayMovieDetails(movie) {
//   // Code to display individual movie details goes here...
// }
