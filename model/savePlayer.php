<?php require ('database.php');

if (isset($_POST['savePlayer'])){

    var_dump($_POST['pseudo'],$_POST['score']);
    $a = addPlayer($_POST['pseudo'],$_POST['score']);
    var_dump($a);
    header('Location: ../index.php');

}


function addPlayer($pseudo,$score){

    $bddPDO=connexionBDD();
    $requete = $bddPDO->prepare('INSERT INTO player (pseudo,score) VALUES (:pseudo,:score)');

    $resultAddPlayer = $requete->execute([':pseudo' => $pseudo, ':score' => (int) $score]);

    return $resultAddPlayer;

}