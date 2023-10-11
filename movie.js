document.addEventListener("DOMContentLoaded", async () => {
    const navbarBurgers = document.querySelectorAll(".navbar-burger");

    // Your existing code for toggling navbar elements...

    const addMovieButton = document.getElementById("addMovieButton");

    // Get the storageId from the query parameters in the current URL
    const urlParams = new URLSearchParams(window.location.search);
    const storageId = urlParams.get("storageId");

    // Update the href attribute with the dynamically obtained storageId
    if (storageId) {
        const buttonParentAnchor = addMovieButton.parentElement;
        buttonParentAnchor.href = `postMovie.html?storageId=${storageId}`;
    } else {
        console.log("No storageId found in the query parameters.");
        // Handle the case where storageId is not available in the query parameters
    }

    // Rest of your code...

    // Get the query parameters from the URL
    const queryParams = new URLSearchParams(window.location.search);

    // Get the value of 'storageId' from the query parameters
    const storageIdFromQuery = queryParams.get('storageId');

    // Call the function to fetch data based on the storageId
    if (storageIdFromQuery) {
        await fetchDataByStorageId(storageIdFromQuery);
    } else {
        console.log("No storageId found in the query parameters.");
        // Handle the case where storageId is not available in the query parameters
    }
});

async function fetchDataByStorageId(storageId) {
    const apiUrl = `http://localhost:5043/Movie/GetAllMovie?moviesId=${storageId}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data fetched:", data); // Check the structure of the response
        displayMovies(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors if any
    }
}

async function fetchDataFromAPI(url) {
    console.log(url);
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

        const cardHeader = document.createElement("div");
        cardHeader.classList.add("card-header", "m-3");
        cardHeader.textContent = `${movie.title}`; // Display both ID and Title, adjust as needed  ID: ${movie.id}, Title: 

        card.appendChild(cardHeader);
        cardsContainer.appendChild(card);

        card.addEventListener("click", () => {
            // Handle movie card click if needed
        });
    });
}