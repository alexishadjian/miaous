<?php

function connexionBDD(){
    try{

        $host = 'localhost';
        $dbname = 'miaouss';
        // $charset = 'utf8';
        $user = 'root';
        $password = 'root';

        $db = new PDO("mysql:host=$host;dbname=$dbname;charset=UTF8",
            $user,
            $password,
            []
        );

    }catch (Exception $e){
        die('Erreur : ' . $e->getMessage());
    }

    return $db;

}