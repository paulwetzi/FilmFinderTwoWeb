document.addEventListener("DOMContentLoaded", () => {
    async function postMovie(title, imdb_url, storageId) {
        const apiUrl = "http://localhost:5043/Movie/PostMovie";

        const movieData = {
            title: title,
            imdb_url: imdb_url,
            storageId: storageId
        };

        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(movieData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            console.log("Movie successfully added!");
        } catch (error) {
            console.error("Error adding movie: ", error);
        }
    }

    async function handleFormSubmission() {
        const title = document.getElementById("titleInput").value;
        const imdb_url = document.getElementById("imdb_url").value;

        // Get the storageId from the query parameters in the current URL
        const urlParams = new URLSearchParams(window.location.search);
        const storageId = urlParams.get("storageId");

        // Call the postMovie method with the input value and storageId
        await postMovie(title, imdb_url, storageId);

        // Redirect the user to movie.html with the storageId after successful form submission
        window.location.href = `./movie.php?storageId=${storageId}`;
    }

    document
    .getElementById("submitButton")
    .addEventListener("click", handleFormSubmission);
});
