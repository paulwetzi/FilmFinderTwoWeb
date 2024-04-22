document.addEventListener("DOMContentLoaded", () => {
  getAllMoviesFromStorage();
  async function getAllMoviesFromStorage() {
    const apiUrl = "http://localhost:5043/Storage/GetAllStorage";
    const data = await fetchDataFromAPI(apiUrl);

    if (data) {
      displayStorage(data);
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

  function displayStorage(storages) {
    const cardsContainer = document.getElementById("cards-container");
    cardsContainer.innerHTML = "";

    storages.forEach((storage) => {
      const card = document.createElement("div");
      card.classList.add("card", "m-3");
      cardsContainer.appendChild(card);

      const cardHeader = document.createElement("header");
      cardHeader.classList.add("card-header");
      card.appendChild(cardHeader);

      const cardHeaderTitle = document.createElement("p");
      cardHeaderTitle.classList.add("card-header-title");
      cardHeaderTitle.textContent = storage.name;
      cardHeader.appendChild(cardHeaderTitle);

      card.addEventListener("click", () => {
        handleStorageCardClick(storage.id);
      });
    });

    function handleStorageCardClick(storageId) {
      // Assuming your API endpoint for getting movies by storageId is correct
      const apiUrl = `http://localhost:5043/php/Movie/GetAllMovie?moviesId=${storageId}`;

      try {
        // Fetch data from the API endpoint
        const data = fetchDataFromAPI(apiUrl);

        // if (data && data.movies && data.movies.length > 0) {
        // Redirect to movie.html with storageId as a query parameter
        window.location.href = `./movie.php?storageId=${storageId}`;
        // } else {
        //     console.log("No movies found for this storage.");
        //     // Handle the case where no movies are found for this storage
        // }
      } catch (error) {
        console.error("Error fetching data: ", error);
        // Handle errors if any
      }
    }

    // Function to fetch storage data by ID using the provided API endpoint
    async function getStorageById(idToFind) {
      const apiUrl = `http://localhost:5043/Storage/GetStorageQuery?idToFind=${idToFind}`;

      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const storageData = await response.json();
        // Handle the retrieved storage data as needed
        console.log(storageData);
      } catch (error) {
        console.error("Error fetching storage data: ", error);
      }
    }
  }

  document
    .getElementById("search-input")
    .addEventListener("input", function () {
      const query = this.value.trim();
      if (query) {
        searchStorage(query);
      } else {
        // Handle the case when the input is cleared, like fetching all movies or clearing the display
        //fetchData();
        getAllMoviesFromStorage();
      }
    });
  async function searchStorage(query) {
    const apiUrl = `http://localhost:5043/Storage/GetAllStorageName?name=${encodeURIComponent(
      query
    )}`;

    try {
      const data = await fetchDataFromAPI(apiUrl);
      // Process the data, e.g., display the search results on the page
      displayStorage(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  window.onload = async function () {
    await getAllMoviesFromStorage();
  };
});
