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
  <h1>updateStorage Page</h1>
  <div class="m-3">
    <input type="text" id="titleInput" class="input mb-3" placeholder="new name">
    <button id="submitButton" class="button is-primary mb-3">Submit</button>
  </div>
  <div class="cards-container" id="cards-container"></div>
</main>
<footer>

</footer>
<script src="updateStorage.js"></script>
</body>
</body>

</html>