document.addEventListener("DOMContentLoaded", () => {
  const navbarBurgers = document.querySelectorAll(".navbar-burger");

  navbarBurgers.forEach((burger) => {
    burger.addEventListener("click", () => {
      const targetId = burger.dataset.target;
      const targetElement = document.getElementById(targetId);

      burger.classList.toggle("is-active");
      targetElement.classList.toggle("is-active");
    });
  });

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
    const apiUrl = `http://localhost:5043/Movie/GetMovie?id=${storageId}`;
    try {
      const data = await fetchDataFromAPI(apiUrl);
      if (data) {
        // displayMovies(data.movies);
        console.log(data);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  function displayMovies(movies) {
    const moviesContainer = document.getElementById("movies-container");
    moviesContainer.innerHTML = "";

    movies.forEach((movie) => {
      const movieElement = document.createElement("div");
      movieElement.classList.add("movie-card");
      movieElement.textContent = movie.title;

      moviesContainer.appendChild(movieElement);
    });
  }

  window.onload = async function () {
    await getAllMoviesFromStorage();
  };
});