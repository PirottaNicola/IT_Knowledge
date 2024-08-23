var prova = new Function();
var numero = 1;
var carattere = "Salve";
console.log(typeof prova); // ritorna "function"
console.log(typeof numero); // ritorna "number"
console.log(typeof carattere); // ritorna "string"


var giorniDellaSettimana = [
    "lunedì",
    "martedì",
    "mercoledì",
    "giovedì",
    "venerdì",
    "sabato",
    "domenica"
];
console.log(giorniDellaSettimana[0])


var variElementi = ["gennario", 23, null, ['ciao', 'salve', 'buongiorno']];
console.log(variElementi[2]);
console.log(variElementi[3][2]);


var x = 3;
if (x % 2 == 0) {
    messaggio = x + " è pari";
} else {
    messaggio = x + " è dispari";
}
console.log(messaggio);


//for each
var quantita = [12, 34, 45, 7, 19];
var totale = 0;
var indice;
for (indice in quantita) {
    totale = totale + quantita[indice];
}