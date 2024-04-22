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
<!-- <main class="has-text-centered">
  <h1 class="title">Login</h1>
  <div class="m-3">
    <input type="email" id="emailInput" class="input mb-3" placeholder="E-Mail">
    <input type="password" id="passwordInput" class="input mb-3" placeholder="Password">
    <button id="submitButton" class="button is-primary mb-3">Submit</button>
  </div>

  <div class="cards-container" id="cards-container"></div>
  <div class="movies-container" id="movies-container"></div>
  <a href="register.php">I don't have an Account yet</a>
</main> -->
<main class="has-text-centered">
  <h1 class="title">Login</h1>
  <form id="loginForm" class="m-3"> <!-- Added form tag here -->
    <input type="email" id="emailInput" class="input mb-3" placeholder="E-Mail">
    <input type="password" id="passwordInput" class="input mb-3" placeholder="Password">
    <button type="submit" class="button is-primary mb-3">Submit</button> <!-- Make sure this is type="submit" -->
  </form>

  <a href="register.php">I don't have an Account yet</a>
</main>

<script src="../js/login.js"></script>
</body>

</html>