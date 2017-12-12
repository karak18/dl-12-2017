var h = prompt("Entre l'heur ");
h = parseInt(h)
var m = prompt("Entre les minutes ");
m = parseInt(m)
if (h == 23 && m == 59) {
    h = 0;
    m = 0;
} else if (m == 59) {
    h++;
    m = 0;
} else {
    m++
}
console.log("Dans une minute il sera " + h + " Heurs et " + m + " Minutes")
if (m < 59) {
    m++;
} else {
    if (h == 23) {
        h = 0;
        m = 0;
    } else {
        h++;
        m = 0;

    }
}
console.log("Dans une minute il sera " + h + " Heurs et " + m + " Minutes")