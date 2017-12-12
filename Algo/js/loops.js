function facto() {
    var zzz = prompt("veuillez saisir un nombre entier :")
    zzz = parseInt(zzz);
    var res = factoriel(zzz);
    ecrire("le factoriel de " + zzz + " est " + res)
}

function factoriel(n) {
    if (typeof  n !== "number") return null
    var res = 1;
    var i;
    if (n != 0) {
        for (i = 1; i <= n; i += 1) {
            res = res * i
        }
    }
    return res;
}

function ecrire(paramaitrePasseParCeluiQuiUtiliseLaFonction) {
    var div = document.createElement("div");
    div.innerHTML = "<p>" + paramaitrePasseParCeluiQuiUtiliseLaFonction + "</p>"
    document.getElementById("res").appendChild(div)
}

function somme() {
    var a, b;
    var a = prompt("veuillez saisir un nombre entier :")
    a = parseInt(a);
    var b = prompt("veuillez saisir un nombre entier :")
    b = parseInt(b);
    ecrire("la somme de " + a + " et " + b + " ==> " + (a + b))
}

function DixPlus() {
    var i;
    var n = prompt("veuillez saisir un nombre entier :")
    n = parseInt(n);
    for (i = n + 1; i <= n + 10; i += 1) {
        ecrire(i)
    }
}

function strConcat() {
    var str = 999;
    for (i = 0; i < 100; i++) {
        if (i == 10)
            str = str + (i + "");
        else str = str + i
        ecrire(str);
    }

}

function wileTest() {
    var a = prompt("veuillez saisir un nombre entier :")
    a = parseInt(a);
    while (a >= 10) {
        ecrire(a)
        a -= 2; //==>  a=a-2
    }
}

function testSaisie() {
    var a = prompt("veuillez saisir un nombre entier entre 1 et 3 :")
    a = parseInt(a);
    while (!( a <= 3 && a >= 1 )) {
        var a = prompt("Error de saisie veuillez saisir a nouveau:")
        a = parseInt(a);
    }
    alert('saisie correct braveau')
}


function suiteNumerique() {
    var a = prompt("veuillez saisir un nombre entier entre:")
    a = parseInt(a);
    var i = 1;
    resStr = '', rescalc = 0;
    while (i <= a) {
        if (i != a)  resStr += i + " + "
        else  resStr += i + " = "
        rescalc += i;
        i++;
    }
    ecrire(resStr + rescalc)
}


function cinquNumber() {
    var a, somme, max = -1, min, somme = 0;
    var snum = prompt("veuillez saisir le nombre de numeros a saisir")
    snum = parseInt(snum);
    var snumOri = snum;

    while (snum > 0) {
        var a = prompt("veuillez saisir le nombre " + ( (snumOri + 1) - snum))
        a = parseInt(a);
        if (a > max) max = a;
        if (min === undefined || a < min) min = a;
        somme += a;
        snum--;
    }

    ecrire('max ==> ' + max)
    ecrire('min ==> ' + min)
    ecrire('avrage ==> ' + (somme / (snumOri)))

}

function cinquNumberInvers(para) {
    var a, somme, max, min, somme = 0, i = 1;
    var snum = prompt("veuillez saisir le nombre de numeros a saisir")
    snum = parseInt(snum);
    while (i <= snum) {
        var a = prompt("veuillez saisir le nombre " + i)
        a = parseInt(a);
        if (max === undefined || a > max) max = a;
        if (min === undefined || a < min) min = a;
        somme += a;
        i++;
    }
    ecrire('max ==> ' + max)
    ecrire('min ==> ' + min)
    ecrire('avrage ==> ' + (somme / snum))

}



function AyoubToBinary(n) {
    var divmod = n % 2, divres = parseInt(n / 2), res = divmod + "";
    while (divres != 0) {
        divmod = divres % 2;
        divres = parseInt(divres / 2);
        res = divmod + res;
    }
    return res;
}


function ayoubToDecimal(str) {
    var res = 0
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(str.length - 1 - i) === "1") {
            res += Math.pow(2, i)
        }
    }
    return res;
}

function Crypte(textacrypter) {
    textacrypter = textacrypter.toUpperCase()
    var res = ""
    var decalage = 15;
    var ascii = 65;
    var claire = "", crypte;
    for (var i = ascii; i < (ascii + 26); i++) {
        claire += String.fromCharCode(i)
    }
    //claire est bon
    crypte = claire.substr(decalage, claire.length - 1) + claire.substr(0, decalage)
    for (var i = 0; i <= textacrypter.length - 1; i++) {
        var char = textacrypter.charAt(i);
        var posInClaire = claire.indexOf(char)
        res += crypte.charAt(posInClaire);
    }

    ecrire(res);
    // ecrire(crypte);
}


function ArrayMultipl() {
    var t = [1, 5, 8, 6, 4, 51, 100];
    for (i = 0; i < t.length; i++) {
        if (i % 2 === 1) {
            t[i] = t[i] * 2

        } else {
            t[i] = t[i] / 2
        }

    }
    ecrire(t.join("|"))
}


function joinArray(t, sep) {
    if (t === undefined) {
        return undefined
    }
    else if (t.length === 0) {
        return ""
    } else {
        var res = "";
        for (i = 0; i < t.length; i++) {
            if (i === 0) {
//premier element du tableau
            }
            if (i === t.length - 1) {
//dernier element du tableau
                res += t[i]
            }
            else {
                res += t[i] + sep
            }
        }
    }

    return res;
}
function inverArrayVals(t) {

    for (i = 0; i < parseInt(t.length / 2); i++) {
        var tmp = t[t.length - 1 - i];
        t[t.length - 1 - i] = t[i];
        t[i] = tmp;
    }
    return t
}

function trieSimple(t) {
    for (i = 0; i < t.length; i++) {
        for (j = i + 1; j < t.length; j++) {
            if (t[i] < t[j]) {
                var tmp = t[i];
                t[i] = t[j]
                t[j] = tmp
            }
        }
    }
    return t;
}

function trieparSelection(t) {
    for (i = 0; i < t.length; i++) {
        var min = i;
        for (j = i + 1; j < t.length; j++) {
            if (t[min] > t[j])min = j
        }
        if (min != i) {
            var tmp = t[i];
            t[i] = t[min]
            t[min] = tmp
        }

    }
    return t
}


function trieABull(t) {
    var o, k;
    for (o = t.length - 1; o >= 1; o--) {
        for (k = 0; k <= o - 1; k++) {
            if (t[k + 1] > t[k]) {
                var tmp = t[k + 1];
                t[k + 1] = t[k]
                t[k] = tmp
            }
        }
    }
    return t
}


function trieInsert(t) {
    for (i = 1; i < t.length ; i++) {
        var x = t[i];
        var j = i;
        while(j>0&&t[j-1]>x){
            t[j] = t[j - 1];
            j = j - 1 ;
        }
        t[j] = x
    }
    return t
}

var t = [8, 1, 2, 5, 7, 3, 9, 70, 10, 50, 99, 750, 320, 1]
console.log(trieABull(t))

var user = {
    userName:"ayoub",
    password:"",
    age : 10,
    tel:[
        {designation:'fix', num:"0101010101"},
        {designation:'pro', num:"0101010101"}
    ],
    adress:[{
        l1:"",
        l2:"",
        cp:75000,
        ville:""
    },{
        l1:"",
        l2:"",
        cp:75000,
        ville:""
    }],
}
console.log(user.adress.ville)
user.userName = prompt("Entre le nom")
user.adress.ville = prompt("Entre la ville")
console.log(user)
