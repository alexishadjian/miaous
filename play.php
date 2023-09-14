<?php require_once 'components/header.php'; ?>
    <div id="gameover">
        <p>Game Over</p>

        <span class="score-txt">Vous avez fait un score de <span class="gameover-score"></span></span>

        <form action="./model/savePlayer.php" method="POST">
            <label><b>Enregistrez votre score :</b></label>
            <input name="pseudo" id="pseudo" type="text" placeholder="Entrez votre pseudo" required>
            <input class="finalScore" name="score" type="hidden" value="">

            <input name="savePlayer" type="submit" id='submit' value="Envoyer">
        </form>

        <div class="play-navigation">
            <a class="nav-gameover" href="play.php">Rejouer</a>
            <a class="nav-gameover" href="index.php">Retour à l'accueil</a>
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