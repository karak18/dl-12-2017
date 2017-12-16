<?php
/**
 * Created by IntelliJ IDEA.
 * User: ayoub
 * Date: 16/12/2017
 * Time: 12:19
 */



if($_SERVER["REQUEST_METHOD"]==="POST")
{
    //TODO:Insert form data in database
    $db = "appdb";
    $host = "127.0.0.1:3307";
    $connection = new PDO("mysql:dbname=$db;host=$host", "root", "usbw");

    $stmt = $connection->prepare("insert into contacts (firstname,lastname) VALUES (?,?)");
    $stmt->execute([$_REQUEST['firstname'],$_REQUEST['lastname']]);


    header('location:index.php');
   // exit;
}
?><!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>

</head>
<body>

<h2 style="text-align: center">Ajout contact</h2>

<form action="add.php" method="post">

    <input type="text" name="firstname" placeholder="Nom" required>
    <input type="text" name="lastname" placeholder="Prenom" required>

    <div style="text-align: right">
        <input type="button" value="Annuler" onclick="window.location.href='./'">
        <input type="submit" value="enregistere">
    </div>
</form>
</body>
</html>