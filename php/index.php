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
<header>
  <?php include '../includes/navbar.php'; ?>
</header>
<main class="has-text-centered">
  <h1 class="title">Start</h1>
  <?php include '../includes/searchbar.php'; ?>
  <h1 id="storageName"></h1>
  <p id="storageDescription"></p>
  <div id="movies-container"></div>
</main>
<script src="../js/index.js"></script>
</body>

</html>