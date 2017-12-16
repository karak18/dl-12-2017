<?php

    //TODO:Insert form data in database
    $db = "appdb";
    $host = "127.0.0.1:3307";
    $connection = new PDO("mysql:dbname=$db;host=$host", "root", "usbw");

    $stmt = $connection->prepare("delete from contacts where id=?");
    $stmt->execute([$_REQUEST['id']]);


    header('location:index.php');
