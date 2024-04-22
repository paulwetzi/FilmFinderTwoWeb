<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css" />
    <link rel="stylesheet" href="../css/style.css" />
    <title><?php include '../includes/title.php'; ?></title>
    <link rel="apple-touch-icon" sizes="180x180" href="../img/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="../img/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="../img/favicon-16x16.png">
    <link rel="manifest" href="../site.webmanifest">
</head>

<body>
    <header>
        <?php include '../includes/navbar.php'; ?>
    </header>
    <main class="has-text-centered" id="main-content">
        <h1 class="title">Scan Movie</h1>

        <div class="m-3">
            <div id="scanner-container"></div>
            <pre id="results"></pre>
            <button onclick="startScanner()">Start Scanner</button>
            <button onclick="stopScanner()">Stop Scanner</button>
        </div>
        <div class="cards-container" id="cards-container"></div>
        <div class="movies-container" id="movies-container"></div>
    </main>
    <script src="https://cdn.rawgit.com/serratus/quaggaJS/0420d5e0/dist/quagga.min.js"></script>
    <script src="../js/scanMovie.js"></script>
</body>

</html>