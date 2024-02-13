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
<main class="has-text-centered m-3" id="main-content">
  <h1>Storage Page</h1>
  <div class="m-3">
    <input type="text" id="searchInput" class="input mb-3" placeholder="🔎Search">
    <a href="./postStorage.php"><button class="button is is-primary">add Storage</button></a>
  </div>
  <div class="cards-container" id="cards-container"></div>
  <div id="filteredStoragesContainer"></div>

</main>

<footer>

</footer>
<script src="storage.js"></script>
</body>

</html>