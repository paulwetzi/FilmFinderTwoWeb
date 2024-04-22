document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submitButton");
  const titleInput = document.getElementById("titleInput");
  const descriptionInput = document.getElementById("descriptionInput");

  // Add an event listener to the submit button
  submitButton.addEventListener("click", async () => {
    const newName = titleInput.value.trim();
    const newDescription = descriptionInput.value.trim();

    if (newName && newDescription) {
      await updateStorage(newName, newDescription);
      // Optional: Clear the input field after a successful update
      titleInput.value = "";
      descriptionInput.value = "";
    } else {
      console.error("Please enter a valid name.");
      // Optional: Display a user-friendly message if input is empty
    }
  });
});

async function updateStorage(newName, newDescription) {
  const apiUrl = `http://localhost:5043/Storage/PutStorage`;

  // Retrieve storageId from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const storageId = urlParams.get("storageId");

  // Create an object with the data to send
  const dataToSend = {
    name: newName,
    description: newDescription,
    id: parseInt(storageId),
  };

  try {
    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    console.log(`Storage updated with new name: ${newName}`);
    // Optional: Display a user-friendly success message

    // Redirect to storage.html after successful deletion
    window.location.href = `./movie.php?storageId=${storageId}`;

  } catch (error) {
    console.error("Error updating storage:", error);
    // Handle errors, maybe display a message to the user.
  }
}
