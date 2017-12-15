<?php
try {
    $bdd = new PDO('mysql:host=localhost;dbname=ayoub;charset=utf8', 'root', 'root');

    try {
        $stmt = $bdd->query('select DATE_FORMAT(dateNaissance, "%W - %V - %d/%m/%Y") as toto, concat( YEAR(CURDATE())-YEAR(dateNaissance), "Ans" ) as AGE , ASCII(nom) as CHARASCII, nom as NOM, prenom as PRENOM, CHAR_LENGTH(prenom) as Longeur from user;');
    } catch(PDOException $ex) {
        die('Erreur : ' . $ex->getMessage());
    }



//    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
//        echo $row['nom'] . ' ' . $row['prenom']; //etc...
//    }
    //var_dump($data);
    //exit;
} catch (Exception $e) {
    die('Erreur : ' . $e->getMessage());
}
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css"
          integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
            integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
            crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js"
            integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh"
            crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js"
            integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ"
            crossorigin="anonymous"></script>
</head>
<body>
<table class="table table-inverse">
    <thead>
    <tr>
        <th>nom</th>
        <th>prenom</th>
        <th>Age</th>
    </tr>
    </thead>
    <tbody>
    <?php
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo "<tr><td>" . $row['NOM'] . '</td><td> ' . $row['PRENOM'] . "</td><td> " . $row['toto'] . "</td></tr>"; //etc...
    }
    ?>
    </tbody>
</table>
</body>
</html>
