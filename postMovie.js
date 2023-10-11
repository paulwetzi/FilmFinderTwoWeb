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

    async function postMovie(title, storageId) {
        const apiUrl = "http://localhost:5043/Movie/PostMovie";

        const movieData = {
            title: title,
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

        // Get the storageId from the query parameters in the current URL
        const urlParams = new URLSearchParams(window.location.search);
        const storageId = urlParams.get("storageId");

        // Call the postMovie method with the input value and storageId
        await postMovie(title, storageId);

        // Redirect the user to movie.html with the storageId after successful form submission
        window.location.href = `movie.html?storageId=${storageId}`;
    }

    document
    .getElementById("submitButton")
    .addEventListener("click", handleFormSubmission);
});
