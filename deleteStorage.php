<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
  <link rel="stylesheet" href="style.css">
  <title>Document</title>
</head>
<header>
  <?php include 'navbar.php'; ?>
</header>
<main class="has-text-centered" id="main-content">
  <h1>deleteStorage Page</h1>
  <div>
    <h1>Are you sure you want to delete this Storage</h1>

    <button id="deleteButton" class="button is-primary">Delete</button>
    <button id="cancelButton" class="button is-primary">Cancel</button>
  </div>
  <div class="cards-container" id="cards-container"></div>
</main>
<footer>

</footer>
<script src="deleteStorage.js"></script>
</body>
</body>

</html>