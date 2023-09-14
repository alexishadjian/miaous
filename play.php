<?php require_once 'components/header.php'; ?>
<div id="gameover"><p>Game Over</p></div>
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