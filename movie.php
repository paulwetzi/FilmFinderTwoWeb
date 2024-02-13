<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css" />
  <link rel="stylesheet" href="style.css" />
  <title>Document</title>
</head>
<header>
  <?php include 'navbar.php'; ?>
</header>
<main class="has-text-centered">
  <h1 id=""></h1>
  <div class="m-3">
    <input type="text" id="searchInput" class="input mb-3" placeholder="🔎Search">
    <button class="button is-primary" id="addMovieButton">Add Movie</button>
    <button id="deleteStorageButton" class="button is-primary">Delete Storage</button>
    <button id="updateStorageButton" class="button is-primary">Update Storage</button>
  </div>
  <div id="movies-container"></div>
</main>
<footer>

</footer>
<script src="movie.js"></script>
</body>

</html>