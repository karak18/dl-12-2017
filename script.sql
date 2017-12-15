drop DATABASE IF EXISTS ayoub;
create DATABASE ayoub;
use ayoub;
-- Supprime la table 
DROP  TABLE IF EXISTS  table000;
-- Creation de la table 
CREATE TABLE table000 (
	`id` INT NOT NULL AUTO_INCREMENT,
	`nom` VARCHAR(255) NULL,
	`prenom` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`id`) 
);
-- insertion des données exemples
insert into `table000` (`nom`,`prenom`) 
values ("Hassani","ayoub"),
		("Hassani2","ayoub"),
		("Hassani3","ayoub");
		
		
 delete from `table000` where id=1
 update `table000` set `nom`="test", `prenom`="modif" where id in (2 ,3,




-- Supprime la table 
DROP  TABLE IF EXISTS  users;
-- Creation de la table 
CREATE TABLE users (
	`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`nom` VARCHAR(255) NOT NULL,
	`prenom` VARCHAR(255) NOT NULL,
	`email` VARCHAR(255) NOT NULL,
	`password` VARCHAR(255) NOT NULL,
	 dateNaissance DATE null
);

-- insert into `users` (`nom`,`prenom`,`email`,`password`) values ("Hassani","Ayoub","hassani.ayoub@gmail.com","123456")


insert into `users` (`nom`,`prenom`,`email`,`password`,`dateNaissance`) 
values ("Hassani","Ayoub","hassani.ayoub@gmail.com","123456","1983-05-08")
CREATE TABLE Facture (
	`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`tva` VARCHAR(255) NULL,
	`date` date NOT NULL
);
CREATE TABLE Client (
	`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`Raison social` VARCHAR(255) NULL unique,
	`adressFactu` VARCHAR(255) NOT NULL
);
CREATE TABLE lineFacture (
	`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`Designation` VARCHAR(255) NULL,
	`qte` int(10) NOT NULL,
	`unitPrice` VARCHAR(255) NOT NULL
);




select 
DATE_FORMAT(dateNaissance, "%W  - %V -  %d/%m/%Y") as DFORMAT,
concat( YEAR(CURDATE())-YEAR(dateNaissance), " Ans" ) as AGE ,
ASCII(nom) as CHARASCII,
nom as NOM,
prenom as PRENOM,
CHAR_LENGTH(prenom) as Longeur

from  user


select 
DATE_FORMAT(dateNaissance, "%W  - %V -  %d/%m/%Y") as DFORMAT,
concat( YEAR(CURDATE())-YEAR(dateNaissance), " Ans" ) as AGE ,
concat(
        "Dans 1500 j ",
        nom,
        " aura ",
		YEAR(ADDDATE(CURDATE(),1500) )- YEAR(dateNaissance),
        " Ans "
		) as test,
ASCII(nom) as CHARASCII,
nom as NOM,
prenom as PRENOM,
CHAR_LENGTH(prenom) as Longeur
from  user


alter table facture ADD iduser INT;
alter table facture ADD FOREIGN KEY (iduser) REFERENCES user(id);

alter table facture ADD idclient INT;
alter table facture ADD FOREIGN KEY (idclient) REFERENCES client(id);


alter table lineFacture ADD idfacture INT;
alter table lineFacture ADD FOREIGN KEY (idfacture) REFERENCES facture(id);

CREATE TABLE user2client (
	`iduser` INT NOT NULL ,
	`idclient` INT NOT NULL,
	FOREIGN KEY (iduser) REFERENCES user(id),
	FOREIGN KEY (idclient) REFERENCES client(id)
);