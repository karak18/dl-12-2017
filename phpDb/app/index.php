<?php
$db = "appdb";
$host = "127.0.0.1:3307";
$connection = new PDO("mysql:dbname=$db;host=$host", "root", "usbw");
$stmt = $connection->prepare("select * from contacts");
$stmt->execute();

// fetch all rows into an array.
$rows = $stmt->fetchAll();

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
<button onclick="window.location.href='add.php'">Ajouter</button>
<table class="responsive-table">
    <thead>
    <tr>
    <th>nom </th>
    <th>Prenom </th>
    <th>Action </th>
    </tr>
    </thead>
    <tbody>

    <?php
    foreach ($rows as $rs) {
        echo "<tr><td>$rs[1]</td><td>$rs[2]</td><td><a onclick='window.location.href=\"delete.php?id=$rs[0]\" '>x</a></td></tr>";
    }
    ?>
    </tbody>

</table>




</body>
</html>