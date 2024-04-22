document.addEventListener("DOMContentLoaded", () => {
  const deleteButton = document.getElementById("deleteButton");
  const cancelButton = document.getElementById("cancelButton");

  deleteButton.addEventListener("click", async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const storageId = urlParams.get("storageId");

    if (storageId) {
      await deleteStorage(storageId);
      window.location.href = `./storage.php`;
    } else {
      console.error("No storageId found in the query parameters.");
    }
  });

  cancelButton.addEventListener("click", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const storageId = urlParams.get("storageId");

    if (storageId) {
      window.location.href = `./movie.php?storageId=${storageId}`;
    } else {
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
      },
      body: JSON.stringify({ id: storageId }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    console.log(`Storage with ID ${storageId} successfully deleted!`);

    window.location.href = "/storage.php";
  } catch (error) {
    console.error("Error deleting storage:", error);
  }
}
