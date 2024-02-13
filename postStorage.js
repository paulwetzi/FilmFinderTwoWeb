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
  
    async function postStorage(name, description) {
      const apiUrl = "http://localhost:5043/Storage/PostStorage";
  
      const storageData = {
        name: name,
        description: description,
      };
  
      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(storageData),
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        console.log("Storage successfully added!");
      } catch (error) {
        console.error("Error adding storage: ", error);
      }
    }
// Function to handle the submit button click
async function handleFormSubmission() {
    const name = document.getElementById("nameInput").value;
    const description = document.getElementById("descriptionInput").value;

    // Call the postStorage method with the input values
    await postStorage(name, description);

    // Redirect the user to storage.html after successful form submission
    window.location.href = "./storage.php";
}

  
    // Add event listener to the submit button
    document
      .getElementById("submitButton")
      .addEventListener("click", handleFormSubmission);
  });