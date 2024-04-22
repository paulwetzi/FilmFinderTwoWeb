<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css" />
  <link rel="stylesheet" href="../css/style.css" />
  <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
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
  <h1 id="storageName" class="title"></h1>
  <p id="storageDescription"></p>
  <?php include '../includes/searchbar.php'; ?>
  <!-- <div class="m-3">
    <button class="button is-primary" id="addMovieButton">Add Movie</button>
    <button class="button is-primary" id="searchMovieButton">Search Movie</button>
    <button class="button is-primary" id="deleteStorageButton">Delete Storage</button>
    <button class="button is-primary" id="updateStorageButton">Update Storage</button>
  </div> -->
  <div class="dropdown is-hoverable m-3">
    <div class="dropdown-trigger">
        <button class="button is-primary" aria-haspopup="true" aria-controls="dropdown-menu">
          Options
            <!-- <span class="button is-primary">Options</span> -->
            <!-- <span class="icon is-small is-primary"> -->
                <!-- <i class="fas fa-angle-down" aria-hidden="true"></i> -->
            </span>
        </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
            <a href="#" class="dropdown-item" id="addMovieButton">Add Movie</a>
            <a href="#" class="dropdown-item" id="searchMovieButton">Search Movie</a>
            <!-- <a href="#" class="dropdown-item" id="scanMovieButton">Scan Movie</a> -->
            <a href="#" class="dropdown-item" id="deleteStorageButton">Delete Storage</a>
            <a href="#" class="dropdown-item" id="updateStorageButton">Update Storage</a>
        </div>
    </div>
</div>

<div id="movies-container"></div>

</main>
<script src="../js/movie.js"></script>
</body>

</html>