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
<main class="has-text-centered" id="main-content">
  <h1>add Storage Page</h1>

  <div class="m-3">
    <input type="text" id="nameInput" class="input mb-3" placeholder="name">
    <input type="text" id="descriptionInput" class="input mb-3" placeholder="description">
    <button id="submitButton" class="button is-primary mb-3">Submit</button>
  </div>

  <div class="cards-container" id="cards-container"></div>
  <div class="movies-container" id="movies-container"></div>
</main>

<footer>

</footer>
<script src="postStorage.js"></script>
</body>

</html>