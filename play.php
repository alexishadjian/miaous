<?php require_once 'components/header.php'; ?>
    <div id="gameover">
        <p>Game Over</p>
        <div class="play-navigation">
            <a class="nav-gameover" href="play.php">Rejouer</a>
            <a class="nav-gameover" href="index.php">Retour a l'accueil</a>
        </div>
    </div>
<div id="play">

    <div class="map-container">
    <div id="map"></div>
        <div class="top-infos wrapper">
            <div class="score-container">
                <img src="assets/img/etoile.png" alt="">
                <span class="score">0</span>
            </div>
            <div class="timer-container">
                <span id="timer">0</span>
            </div>
        </div>
        <div class="bottom-infos wrapper">
            <div class="distance-container">
                <span class="distance">0</span><span>mètres</span>
            </div>
        </div>
    </div>

</div>

<?php require_once 'components/footer.php'; ?>