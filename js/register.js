document.addEventListener("DOMContentLoaded", () => {
  async function register(email, password, name) {
    const apiUrl = "http://localhost:5043/Account/register";

    const registrationData = {
      email: email,
      password: password,
      name: name, // Include this if your registration process requires a name
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json(); // Assuming the server returns a JSON object
      console.log("Registration successful!", data);
      // You might want to automatically log the user in or redirect to a login page
      window.location.href = "./login.html"; // Adjust this as needed
    } catch (error) {
      console.error("Error during registration: ", error);
    }
  }

  // Function to handle the registration form submission
  async function handleRegistrationFormSubmission(event) {
    event.preventDefault(); // Prevent default form submission behavior
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;
    const name = document.getElementById("nameInput").value; // Assuming you're collecting a name

    // Call the register method with the input values
    await register(email, password, name);
  }

  // Add event listener to the registration form submission
  document
    .getElementById("registrationForm")
    .addEventListener("submit", handleRegistrationFormSubmission);
});
