document.addEventListener("DOMContentLoaded", () => {
    const deleteButton = document.getElementById("deleteButton");
    const cancelButton = document.getElementById("cancelButton");

    deleteButton.addEventListener("click", async () => {
        const urlParams = new URLSearchParams(window.location.search);
        const movieId = urlParams.get("movieId");

        if (movieId) {
            await deleteMovie(movieId);
            window.location.href = './storage.php';
        } else {
            console.error("No movieId found in the query parameters.");
        }
    });

    cancelButton.addEventListener("click", () => {
        const urlParams = new URLSearchParams(window.location.search);
        const movieId = urlParams.get("movieId");

        if (movieId) {
            window.location.href = `./storage.php`;
        } else {
            window.location.href = "./index.php";
        }
    });
    const displayMovieDetails = async (movieId) => {
        const apiUrl = `http://localhost:5043/Movie/GetMovie?id=${movieId}`;

        try {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const movieData = await response.json();
            document.getElementById('movieTitle').textContent = movieData.title;
            document.getElementById('imdbUrl').textContent = movieData.imDbUrl;
        } catch (error) {
            console.error("Error fetching movie data:", error);
        }
    };

    const movieId = new URLSearchParams(window.location.search).get("movieId");
    if (movieId) {
        displayMovieDetails(movieId);
    }
});

async function deleteMovie(movieId) {
    const apiUrl = `http://localhost:5043/Movie/DeleteMovie`;

    try {
        const response = await fetch(apiUrl, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: movieId }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        console.log(`Movie with ID ${movieId} successfully deleted!`);
    } catch (error) {
        console.error("Error deleting movie:", error);
    }
}
