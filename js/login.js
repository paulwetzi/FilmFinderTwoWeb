// document.addEventListener("DOMContentLoaded", () => {
//   async function login(email, password) {
//     const apiUrl = "http://localhost:5043/Account/login";

//     const loginData = {
//       email: email,
//       password: password,
//     };

//     try {
//       const response = await fetch(apiUrl, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(loginData),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json(); // Assuming the server returns a JSON object

//       console.log("Login successful!", data);
//       // Assuming the response includes a token, save it for future requests
//       localStorage.setItem("userToken", data.token);
//       // Redirect or update UI accordingly
//       window.location.href = "./storage.php"; // Adjust this as needed
//     } catch (error) {
//       console.error("Error during login: ", error);
//     }
//   }

//   // Function to handle the login form submission
//   async function handleLoginFormSubmission(event) {
//     event.preventDefault(); // Prevent default form submission behavior
//     const email = document.getElementById("emailInput").value;
//     const password = document.getElementById("passwordInput").value;

//     // Call the login method with the input values
//     await login(email, password);
//   }

//   // Add event listener to the login form submission
//   document
//     .getElementById("loginForm")
//     .addEventListener("submit", handleLoginFormSubmission);
// });
document.addEventListener("DOMContentLoaded", () => {
  // Login function that sends a request to the login API endpoint
  async function login(email, password) {
    const apiUrl = "http://localhost:5043/Account/login";

    const loginData = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json(); // Assuming the server returns a JSON object

      console.log("Login successful!", data);
      // Assuming the response includes a token, save it for future requests
      localStorage.setItem("userToken", data.token);
      // Redirect or update UI accordingly
      window.location.href = "./storage.php"; // Adjust this as needed
    } catch (error) {
      console.error("Error during login: ", error);
    }
  }

  // Function to handle the login form submission
  document.getElementById("loginForm").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;

    await login(email, password); // Call the login function with the input values
  });
});
