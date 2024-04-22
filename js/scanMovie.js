// // Initialization
// Quagga.init({
//     inputStream: {
//         type: "LiveStream",
//         target: document.querySelector('#scanner-container'),
//         constraints: {
//             width: 640,
//             height: 480,
//             facingMode: "environment"
//         }
//     },
//     decoder: {
//         readers: ["ean_reader"]
//     }
// }, function(error) {
//     if (error) {
//         console.log(error);
//         return;
//     }
//     // You might want to start Quagga with a button click or other event
//     // Quagga.start();
// });

// // Start Scanner
// function startScanner() {
//     Quagga.start();
// }

// // Stop Scanner
// function stopScanner() {
//     Quagga.stop();
// }

// // Detection Event
// Quagga.onDetected(function(data) {
//     const barcode = data.codeResult.code;
//     document.querySelector("#results").textContent = barcode;
//     // Stop after successful detection
//     stopScanner();
// });

// const ean = 'YOUR_EAN_HERE';
// const apiKey = 'YOUR_API_KEY_HERE'; // You'll need to sign up and get this from the UPCitemdb website

// fetch(`https://api.upcitemdb.com/prod/trial/lookup?upc=${ean}`)
//     .then(response => response.json())
//     .then(data => {
//         if (data.items && data.items.length > 0) {
//             const movieTitle = data.items[0].title;
//             console.log(movieTitle);
//             // Add additional code to handle other data or display to user
//         }
//     })
//     .catch(error => console.error('Error fetching data:', error));
// Initialization
Quagga.init({
    inputStream: {
        type: "LiveStream",
        target: document.querySelector('#scanner-container'),
        constraints: {
            width: 640,
            height: 480,
            facingMode: "environment"
        }
    },
    decoder: {
        readers: ["ean_reader"]
    }
}, function(error) {
    if (error) {
        console.log(error);
        return;
    }
    // You might want to start Quagga with a button click or other event
    // Quagga.start();
});

// Start Scanner
function startScanner() {
    Quagga.start();
}

// Stop Scanner
function stopScanner() {
    Quagga.stop();
}

// Detection Event
Quagga.onDetected(function(data) {
    const barcode = data.codeResult.code;
    document.querySelector("#results").textContent = barcode;
    // Stop after successful detection
    stopScanner();
    // Fetch movie details after detection
    fetchMovieDetails(barcode);
});

function fetchMovieDetails(ean) {
    const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your API key if needed

    fetch(`https://api.upcitemdb.com/prod/trial/lookup?upc=${ean}`)
        .then(response => response.json())
        .then(data => {
            if (data.items && data.items.length > 0) {
                const movieTitle = data.items[0].title;
                console.log(movieTitle);
                // Add additional code to handle other data or display to user
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}
