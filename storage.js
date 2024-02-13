document.addEventListener("DOMContentLoaded", () => {
  //   const navbarBurgers = document.querySelectorAll(".navbar-burger");

  //   navbarBurgers.forEach((burger) => {
  //     burger.addEventListener("click", () => {
  //       const targetId = burger.dataset.target;
  //       const targetElement = document.getElementById(targetId);

  //       burger.classList.toggle("is-active");
  //       targetElement.classList.toggle("is-active");
  //     });
  //   });

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

  async function getAllMoviesFromStorage() {
    const apiUrl = "http://localhost:5043/Storage/GetAllStorage";
    const data = await fetchDataFromAPI(apiUrl);

    if (data) {
      displayStorage(data);
    }
  }

  function displayStorage(storages) {
    const cardsContainer = document.getElementById("cards-container");
    cardsContainer.innerHTML = "";

    storages.forEach((storage) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const cardHeader = document.createElement("div");
      cardHeader.classList.add("card-header", "m-3");
      cardHeader.textContent = storage.name;

      card.appendChild(cardHeader);
      cardsContainer.appendChild(card);

      card.addEventListener("click", () => {
        handleStorageCardClick(storage.id);
      });
    });
  }

  async function handleStorageCardClick(storageId) {
    // Assuming your API endpoint for getting movies by storageId is correct
    const apiUrl = `http://localhost:5043/Movie/GetAllMovie?moviesId=${storageId}`;

    try {
      // Fetch data from the API endpoint
      const data = await fetchDataFromAPI(apiUrl);

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

  // Function to handle the input change event in the search input
  function handleSearchInput(event) {
    const searchTerm = event.target.value.toLowerCase(); // Get the input value and convert it to lowercase

    // Filter storages based on the search term
    const filteredStorages = storages.filter((storage) => {
      const storageName = storage.name.toLowerCase();
      return storageName.includes(searchTerm);
    });

    // Update the UI with the filtered storages
    displayStorage(filteredStorages);
  }

  // Attach input event listener to the search input for dynamic filtering
  document
    .getElementById("searchInput")
    .addEventListener("input", handleSearchInput);

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
  window.onload = async function () {
    await getAllMoviesFromStorage();
  };
});
