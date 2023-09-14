<?php
require_once('database.php');

$bddPDO = connexionBDD();
$requete = "SELECT pseudo,score FROM player order by score DESC";
$result = $bddPDO->query($requete);

$allPlayer = $result->fetchAll(PDO::FETCH_ASSOC);