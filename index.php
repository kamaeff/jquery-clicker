<?php
require_once 'php/Connection.php';

$connection = new Connection();
$db = $connection->connect();

if ($db) {
  echo "<script>console.log('Connection successful');</script>";
} else {
  echo "<script>console.log('Connection failed');</script>";
}
?>

<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>

  <link rel="stylesheet" href="styles/styles.css" />
  <link rel="icon" type="image/x-icon" href="./assets/coinz.svg" />

  <title>Coinz clicker</title>
</head>

<body>
  <header>
    <button class="header__user" onclick="userModal()">
      <i data-lucide="circle-user-round"></i> User
    </button>


    <button class="btn" onclick="changeBg()">
      <div id="btn__state" class="btn__state">☀️</div>
    </button>
  </header>

  <main class="container">
    <div class="container__main">
      <h1 id="text"></h1>

      <div class="cliker">
        <button class="cliker__btn" title="Let's GOOOOO" onclick="clickBtn()">
          <svg id="clicker" width="300px" height="300px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16H13C13.6667 16 15 15.6 15 14C15 12.4 13.6667 12 13 12H11C10.3333 12 9 11.6 9 10C9 8.4 10.3333 8 11 8H12M12 16H9M12 16V18M15 8H12M12 8V6M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>

      <div class="coins">
        <span><i data-lucide="coins"></i>Coinz</span>
        <span id="count">0</span>
      </div>

      <div class="shop">
        <div class="shop__container">
          <button class="shop__container--btn" onclick="upgradeTap()">
            <i data-lucide="circle-plus"></i>Upgrade
          </button>

          <button class="shop__container--btn">
            <i data-lucide="mouse-pointer-click"></i>Auto tap
          </button>
        </div>
      </div>

      <p class="error"></p>
    </div>

    <div class="container--info">
      <h2>Stats:</h2>
      <div>
        <span class="bold">Coinz per tap:</span> <span id="byTap"></span>
      </div>

      <div>
        <span class="bold">AutoTap:</span> <span id="autoTap"></span>
      </div>

      </br>

      <div>
        <span class="bold">Next Upgrade:</span> <span id="nextUpgrade"></span> Coinz
      </div>

    </div>

    <div class="container--rules">
      <h2>Game rules:</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
        dignissimos temporibus assumenda. Voluptatem facere suscipit iste
        alias eligendi animi modi at sapiente eaque! Velit fugit minima nemo
        neque ex quas.
      </p>
    </div>
  </main>

  <footer>
    Created by
    <a href="https://github.com/kamaeff?tab=repositories" target="_blank">Anton Kamaev</a>
  </footer>

  <div class="modal" id="modal">
    <form class="modal__container">

      <button class="close" onclick="closeModal()">

        <i data-lucide="x"></i>
      </button>

      <div class="modal__container--title">
        <svg id="clicker" width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 16H13C13.6667 16 15 15.6 15 14C15 12.4 13.6667 12 13 12H11C10.3333 12 9 11.6 9 10C9 8.4 10.3333 8 11 8H12M12 16H9M12 16V18M15 8H12M12 8V6M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <h2>Coinz</h2>
      </div>


      <div class="form-group">
        <input type="email" id="username" name="username">
        <label [class.error]="errorMessage">Email</label>
      </div>

      <div class="form-group">

        <input type="password" id="password" name="password" />
        <label for="password">Password</label>

        <div class="error italic"></div>

      </div>

      <button class="login__form--btn" type="submit" (click)="login()">Sign in</button>

    </form>
  </div>


  <script type="module" src="./scripts/main.js"></script>

</body>

</html>