// document.addEventListener("DOMContentLoaded", () => {
//     const submitButton = document.getElementById("submitButton");
//     const titleInput = document.getElementById("titleInput");

//     // Add an event listener to the submit button
//     submitButton.addEventListener("click", async () => {
//       const newName = titleInput.value.trim();

//       if (newName) {
//         await updateStorage(newName);
//         // Optional: Clear the input field after a successful update
//         titleInput.value = "";
//       } else {
//         console.error("Please enter a valid name.");
//         // Optional: Display a user-friendly message if input is empty
//       }
//     });
//   });

//   async function updateStorage(newName) {
//     const apiUrl = `http://localhost:5043/Storage/PutStorage`;

//     // Retrieve storageId from the URL
//     const urlParams = new URLSearchParams(window.location.search);
//     const storageId = urlParams.get("storageId");

//     // Create an object with the data to send
//     const dataToSend = {
//       name: newName,
//       id: parseInt(storageId), // Convert storageId to integer since your DTO expects an integer
//     };

//     try {
//       const response = await fetch(apiUrl, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(dataToSend),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       console.log(`Storage updated with new name: ${newName}`);
//       // Optional: Display a user-friendly success message

//       // Redirect to storage.html after successful deletion
//       window.location.href = `./movie.php?storageId=${storageId}`;

//     } catch (error) {
//       console.error("Error updating storage:", error);
//       // Handle errors, maybe display a message to the user.
//     }
//   }
// document.addEventListener("DOMContentLoaded", () => {
//     const submitButton = document.getElementById("submitButton");
//     const titleInput = document.getElementById("titleInput");
//     const imdbUrlInput = document.getElementById("imdbUrlInput");

//     // Add an event listener to the submit button
//     submitButton.addEventListener("click", async () => {
//         const newTitle = titleInput.value.trim();
//         const newImdbUrl = imdbUrlInput.value.trim();

//         if (newTitle && newImdbUrl) {
//             await updateMovie(newTitle, newImdbUrl);
//             // Optional: Clear the input fields after a successful update
//             titleInput.value = "";
//             imdbUrlInput.value = "";
//         } else {
//             console.error("Please enter a valid title and IMDb URL.");
//             // Optional: Display a user-friendly message if input is empty
//         }
//     });
// });

// async function updateMovie(newTitle, newImdbUrl) {
//     const apiUrl = `http://localhost:5043/Movie/UpdateMovie`;

//     // Retrieve movieId from the URL
//     const urlParams = new URLSearchParams(window.location.search);
//     const movieId = urlParams.get("movieId");

//     // Create an object with the data to send
//     const dataToSend = {
//         title: newTitle,
//         imDbUrl: newImdbUrl,
//         id: parseInt(movieId), // Convert movieId to integer if your server expects an integer
//     };

//     try {
//         const response = await fetch(apiUrl, {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(dataToSend),
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         console.log(`Movie updated with new title: ${newTitle} and new IMDb URL: ${newImdbUrl}`);
//         // Optional: Display a user-friendly success message

//         // Redirect to movie details page after successful update
//         window.location.href = `./movieDetails.php?movieId=${movieId}`;

//     } catch (error) {
//         console.error("Error updating movie:", error);
//         // Handle errors, maybe display a message to the user.
//     }
// }
document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submitButton");
  const titleInput = document.getElementById("titleInput");
  const imdbUrlInput = document.getElementById("imdbUrlInput");
  //const messageDiv = document.getElementById("message");

  submitButton.addEventListener("click", async () => {
    const newTitle = titleInput.value.trim();
    const newImdbUrl = imdbUrlInput.value.trim();
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get("movieId");

    // if (!newTitle || !newImdbUrl) {
    //     showMessage("Please enter a valid title and IMDb URL.", "error");
    //     return;
    // }

    // if (!movieId || isNaN(movieId)) {
    //     showMessage("Invalid movie ID.", "error");
    //     return;
    // }

    await updateMovie(newTitle, newImdbUrl, movieId);
  });
});

async function updateMovie(newTitle, newImdbUrl, movieId) {
  const apiUrl = `http://localhost:5043/Movie/PutMovie`;
  const dataToSend = {
    id: parseInt(movieId),
    newTitle: newTitle,
    newImdbUrl: newImdbUrl,
  };

  try {
    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToSend),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    //showMessage("Movie successfully updated!", "success");
    window.location.href = `./storage.php`;
  } catch (error) {
    console.error("Error updating movie:", error);
    showMessage("Failed to update movie. Please try again.", "error");
  }
}

function showMessage(message, type) {
  const messageDiv = document.getElementById("message");
  messageDiv.textContent = message;
  messageDiv.className =
    type === "success" ? "message success" : "message error";
}
