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
            <p>Distance : <span class="distance">0</span> mètres</p>
            <p>Temps restant : <span id="timer"></span></p>
        </div>
    </div>

</div>

<?php require_once 'components/footer.php'; ?>