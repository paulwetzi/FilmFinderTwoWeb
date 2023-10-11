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
    window.location.href = "storage.html";
}

  
    // Add event listener to the submit button
    document
      .getElementById("submitButton")
      .addEventListener("click", handleFormSubmission);
  });

  // async function fetchDataFromAPI(url) {
  //   console.log(url);
  //   try {
      //     const response = await fetch(url, {
          //       headers: {
  //         "Content-Type": "application/json; charset=utf-8",
  //       },
  //     });

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }

  //     return response.json();
  //   } catch (error) {
  //     console.error("Error fetching data: ", error);
  //   }
  // }

  // async function getAllMoviesFromStorage() {
  //   const apiUrl = "http://localhost:5043/Storage/GetAllStorage";
  //   const data = await fetchDataFromAPI(apiUrl);

  //   if (data) {
  //     displayStorage(data);
  //   }
  // }

  // function displayStorage(storages) {
  //   const cardsContainer = document.getElementById("cards-container");
  //   cardsContainer.innerHTML = "";

  //   storages.forEach((storage) => {
  //     const card = document.createElement("div");
  //     card.classList.add("card");

  //     const cardHeader = document.createElement("div");
  //     cardHeader.classList.add("card-header", "m-3");
  //     cardHeader.textContent = storage.name;

  //     card.appendChild(cardHeader);
  //     cardsContainer.appendChild(card);

  //     card.addEventListener("click", () => {
  //       handleStorageCardClick(storage.id);
  //     });
  //   });
  // }

  // async function handleStorageCardClick(storageId) {
  //   const apiUrl = `http://localhost:5043/Movie/GetMovie?id=${storageId}`;
  //   try {
  //     const data = await fetchDataFromAPI(apiUrl);
  //     if (data) {
  //       // displayMovies(data.movies);
  //       console.log(data);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data: ", error);
  //   }
  // }
//     async function deleteStorage(storageId) {
//         const apiUrl = "http://localhost:5043/Storage/DeleteStorage";

//         try {
//             const response = await fetch(apiUrl, {
//                 method: 'DELETE',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ id: storageId })
//             });

//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }

//             console.log(`Storage with ID ${storageId} successfully deleted!`);
//         } catch (error) {
//             console.error("Error deleting storage: ", error);
//         }
//     }

//    async function updateStorage(name, preName) {
//     const apiUrl = "http://localhost:5043/PutStorage";

//     const storageData = {
//         name: name,
//         preName: preName
//     };

//     try {
//         const response = await fetch(apiUrl, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(storageData)
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         console.log(`Storage successfully updated!`);
//     } catch (error) {
//         console.error("Error updating storage: ", error);
//     }
// }

//     window.onload = async function () {
//       await getAllMoviesFromStorage();
//     };
//   });
//
