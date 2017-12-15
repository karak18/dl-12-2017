class Rat {

    constructor(name, nbLivre, No) {
        this.name = name || "";
        this.nbLivre = nbLivre || 0;
        this.cardCode = No;

    }

    emprunte(b, t) {
        console.warn(this.name + " Emprunt " + t)
        b.emprunt(t, this);
    }

    retourne(b, t) {
        console.warn(this.name + " retourne " + t)
        b.retourne(t, this);
    }

}
class Biblio {
    constructor(L) {
        this.livres = L || []

    }

    emprunt(t, rat) {
        var trouve = false;
        for (var i = 0; i < this.livres.length; i++) {
            var l = this.livres[i]
            if (l.titre == t) {
                trouve = true;
                if (!l.dispo) console.error('Livre indisponible ' + t);
                else {
                    l.cardCodeEmprun = rat.cardCode;
                    l.dispo = false;
                }
            }
        }
        if (!trouve) console.error('Livre introuveable ' + t)
    }

    retourne(t, rat) {
        var trouve = false;
        for (var i = 0; i < this.livres.length; i++) {
            var l = this.livres[i]
            if (l.titre == t) {
                trouve = true;
                if (l.dispo) console.error('Imposible de rtourné un livre non emprunté' + t);
                else {
                    l.cardCodeEmprun = "";
                    l.dispo = true;
                }
            }
        }
        if (!trouve) console.error('Livre introuveable ' + t)
    }

    addLivre(livre) {
        this.livres.push(livre)
    }

    removeLivre(livre) {
        this.livres = this.livres.filter((l, i)=> {
            return l.id != livre.id
        })
    }

}
class Livre {
    constructor(T, id) {
        if (!id || id === 0 || id === "") {
            //TODO: verifier dans la bibliotheque l'existance
            console.error('Id not correct')
        }
        this.titre = T
        this.id = id;
        this.dispo = true;
        this.cardCodeEmprun = ""

    }
}


//var r1 = new Rat("ayoub", 0, "mks00078934");
//var r2 = new Rat("bakay", 0, "BBBB3213213");
//var B = new Biblio([l1, l2, l3]);
//var l1 = new Livre("ayoub ", 1)
//B.addLivre(L1)
//var l2 = new Livre("hassani", 2)
//var l3 = new Livre("toto", 3)
//
//
//
////r2.emprunte(B,)
//r1.emprunte(B, "hassani")
//r2.emprunte(B, "hassani")
//r1.retourne(B, "hassani")
//r2.emprunte(B, "hassani")
//console.log(l1, l2, l3, B)


class User {
    constructor(nom, pren, a) {
        this.nom = nom;
        this.prenom = pren;
        this.age = a;
    }
}

function trieInsert(t) {
    for (i = 1; i < t.length; i++) {
        var x = t[i];
        var j = i;
        while (j > 0 && t[j - 1].nom > x.nom) {
            t[j] = t[j - 1];
            j = j - 1;
        }
        t[j] = x
    }
    return t
}
function trieABull(t) {
    var o, k;
    for (o = t.length - 1; o >= 1; o--) {
        for (k = 0; k <= o - 1; k++) {
            if (t[k + 1].nom < t[k].nom) {
                var tmp = t[k + 1];
                t[k + 1] = t[k]
                t[k] = tmp
            }
        }
    }
    return t
}
function getV() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 6);
}


var users = [];
for (i = 0; i < 100; i++) {
    users.push(new User(getV(), getV(), parseInt(Math.random() * 100)))
}


function getZAscii() {
    var ZAscii = 65 + 26;
    return ZAscii;
}
function getAlphaArray(decal) {
    var ZAscii = 91;
    var base = []
    for (var i = 65; i < getZAscii(); i++) {
        base.push(String.fromCharCode(i))
    }
    while (!decal == 0) {
        base.push(base.shift())
        decal--;
    }
    return base
}


function getA(decalage) {
    var base = []
    for (var i = 65 + decalage; i < (65 + 26 ); i++) {
        base.push(String.fromCharCode(i))
    }
    for (var i = 65; i < 65 + decalage; i++) {
        base.push(String.fromCharCode(i))
    }
    return base
}


var t = [];
for (i = 0; i < 12; i++) {
    t[i] = [];
    for (j = 0; j < 12; j++) {
        t[i][j] = i + "/" + j
    }
}


var arrayRes = []
for (i = 0; i < 26; i++) {
    arrayRes[i] = getA(i)
}

chaine = "j adore ecouter la radio toute la journee";
cle = "M USIQU EMUSIQU EM USIQU EMUSI QU EMUSIQU";
var res = "";
for (i = 0; i < chaine.length; i++) {
    var char = chaine.charAt(i).toUpperCase();
    if (char === " ")
        res += char;
    else {
        var charC = cle.charAt(i).toUpperCase();
        var clere = arrayRes[0];
        var col = arrayRes[0].indexOf(char);
        var ligne = arrayRes[0].indexOf(charC);
        res += arrayRes[col][ligne]
    }

}

console.log(res)


var mois = 7;
var moisChaine = "toto";
switch (mois) {
    case 1:
        moisChaine = "Janvier"
        break;
    case 2:
        moisChaine = "Fevrier"
        break;
    case 3:
        moisChaine = "Marse"
        break;
    case 5:
        moisChaine = "May"
        break;

    default:
        moisChaine = "Non traité"
        break;
}

console.log(moisChaine)


function triePaireImpaire(t){
    var sorted = false;
    while(!sorted){
        sorted = true;
        for (i = 1; i < t.length-1; i+=2) {
            if(t[i]>t[i+1]){
               var tmp  =  t[i];
                t[i] = t[i+1]
                t[i+1] = tmp;
                sorted = false;
            }
        }
        for (i = 0; i < t.length-1; i+=2) {
            if(t[i]>t[i+1]){
                var tmp  =  t[i];
                t[i] = t[i+1]
                t[i+1] = tmp;
                sorted = false;
            }
        }
    }
    return t
}

function ecrire(paramaitrePasseParCeluiQuiUtiliseLaFonction) {
    var div = document.createElement("div");
    div.innerHTML = "<p>" + paramaitrePasseParCeluiQuiUtiliseLaFonction + "</p>"
    document.getElementById("res").appendChild(div)
}
function addBtn() {
    var b = document.createElement("button");
    b.innerHTML = "recherche"
    b.onclick = start
    document.getElementById("res").appendChild(b)
}

addBtn()
var tab = []

for(var i=0;i<1000;i++){
     var str = getV();
    tab.push(str)
    ecrire(str)
}
tab = triePaireImpaire(tab);




function start(){
    var zzz = prompt("veuillez saisir un nombre entier :")
    trouve=false;

    while(!trouve){
        var mid =tab[  parseInt(tab.length/2)  ]
        if(zzz < mid){
            tab = tab.slice(0,parseInt(tab.length/2))
        }else{
            tab = tab.slice(parseInt(tab.length/2),tab.length)
        }
        if(tab.length<=5)trouve = true;
    }
    enRecherche = true;
    console.log(zzz ,mid, zzz<mid,tab)
    for(var i=0;(enRecherche && i<tab.length);i++){
       if( tab[i] === zzz){
           //trouvé
           enRecherche = false;
           console.log(zzz+ ' a ete trouvé a la position '+(i))
           //i=10000;
       }

    }
   if(enRecherche) console.log(zzz+ ' N \'as pas ete trouvé')

}

