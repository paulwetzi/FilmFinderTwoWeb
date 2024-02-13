document.addEventListener("DOMContentLoaded", () => {
  // 1. Navbar Burger Toggle
  const burger = document.querySelector(".navbar-burger");
  const menu = document.querySelector(".navbar-menu");

  burger.addEventListener("click", () => {
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  });

  // 2. Delete and Cancel Button Handlers
  const deleteButton = document.getElementById("deleteButton");
  const cancelButton = document.getElementById("cancelButton"); // Assuming only two buttons and the other one is "Cancel"

  deleteButton.addEventListener("click", async () => {
    // Fetch the storageId from URL (if this is still the intended method)
    const urlParams = new URLSearchParams(window.location.search);
    const storageId = urlParams.get("storageId");

    if (storageId) {
      await deleteStorage(storageId);
      // Handle redirect or user feedback after deletion here
      window.location.href = `./storage.php`; // Assuming you still want to redirect
    } else {
      console.error("No storageId found in the query parameters.");
    }
  });

  cancelButton.addEventListener("click", () => {
    // Fetch the storageId from URL
    const urlParams = new URLSearchParams(window.location.search);
    const storageId = urlParams.get("storageId");

    if (storageId) {
      window.location.href = `./movie.php?storageId=${storageId}`;
    } else {
      // Handle or redirect to a default page if storageId isn't available
      window.location.href = "./index.php";
    }
  });
});

async function deleteStorage(storageId) {
  const apiUrl = `http://localhost:5043/Storage/DeleteStorage`;

  try {
    const response = await fetch(apiUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        // ... any other headers ...
      },
      body: JSON.stringify({ id: storageId }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    console.log(`Storage with ID ${storageId} successfully deleted!`);

    // Redirect to storage.html after successful deletion
    window.location.href = "/storage.php";
  } catch (error) {
    console.error("Error deleting storage:", error);
    // Handle errors, maybe display a message to the user.
  }
}
