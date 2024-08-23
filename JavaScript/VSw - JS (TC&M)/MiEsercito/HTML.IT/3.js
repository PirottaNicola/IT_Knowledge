//JavaScript ci mette a disposizione diversi oggetti predefiniti che risultano molto comodi

//Il primo di questi oggetti che prendiamo in considerazione è OBJECT. ogni oggetto, predefinito o meno che sia, è costruito su Object
var persona = new Object();
persona.nome = "Mario";
persona.cognome = "Rossi";

//l’oggetto Object è anche in grado di generare istanze di oggetti a partire da una qualunque espressione JavaScript
var numero = new Object(12);
var altroNumero = new Object(3 * 2);
var stringa = new Object("test");
var persona = new Object({ nome: "Mario", cognome: "Rossi" });

//metodi condivisi da tutti gli oggetti
var x = new Object(32);
x.toString(); //restituisce "32"

var persona = new Object({ nome: "Mario", cognome: "Rossi" });
persona.toString(); //restituisce "[object Object]"

var x = new Object(32);
x.valueOf(); //restituisce 32

//L’oggetto NUMBER fornisce metodi e proprietà per la manipolazione di valori numerici. !!i metodi number non effettuano conversioni!!
var x = isFinite("123"); // ritorna 'true' perché trasforma la stringa
var y = Number.isFinite("123"); // ritorna 'false'
var z = isNaN("123") //false
x.toFixed(2);
x.toExponential();
x.toPrecision(3);

//MATH: oggetto statico che mette a disposizione proprietà e metodi
Math.max(89, 13, 6.4, 49, 87.2, 121, 40); //121
Math.min(89, 13, 6.4, 49, 87.2, 121, 40); //6.4
Math.pow(4, 3); //4³ = 64
Math.sqrt(144); //12
Math.ceil(3.4); //4
Math.floor(3.4) //3
Math.round(3.4) //3
Math.round(3.6) //4
function generaInteroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//STRING
var x = new String("Una nuova stringa");
var y = x + " concatenata"; //se almeno uno dei due operatori è una stringa, avviene una concatenazione di stringhe
var y = x.length;
var x = "Una nuova stringa".charAt(2);
var x = "Una nuova stringa".replace("s", "S");
var x = "Una nuova stringa".indexOf("nuova"); //restituisce l'indice dell'iniziale della parola trovata, -1 se non la trova
var x = "Una nuova stringa".lastIndexOf("n"); //stessa cosa ma indice dell'ultima lettera
var x = "Una nuova stringa".indexOf("a", 4); //stessa cosa ma controlla a partire dalla quarta posizione
var x = "Una nuova stringa".substr(4, 5); //"nuova" le cinque lettere a partire dalla quarta
var x = "Una nuova stringa".substring(4, 9); //"nuova" le lettere tra la 4 e la 9
var x = "Una nuova stringa".split("n"); //x == ["U", "a ", "uova stri", "ga"]
var x = "Una nuova stringa".split(""); //x == ["U", "n", "a", " ", "n", "u", "o", "v", "a", " ", "s", "t", "r", "i", "n", "g", "a"]
var x = "Una nuova stringa".split("", 5); //x == ["U", "n", "a", " ", "n"] gli elementi oltre il quinto vengono ignorati
var x = " Una nuova stringa ".trim(); //x == "Una nuova stringa"
var y = "Una nuova stringa".startsWith("Una"); //true
var z = "Una nuova stringa".endsWith("."); //false

//DATE
//1. Non specifichiamo alcun parametro nel costruttore e otteniamo un oggetto Date con il valore della data e ora corrente.
var w = new Date();
//2. Passiamo un valore numerico che rappresenta il numero di millisecondi dal 1 Gennaio 1970. È possibile specificare anche valori negativi, nel qual caso indica il numero di millisecondi antecedenti la data di riferimento.
var x = new Date(1379989986515);
//3. Specifichiamo una stringa che rappresenta una data:
var y = new Date("01/01/2013 15:30");
//4. Indichiamo come argomenti rispettivamente l’anno, il mese, il giorno, l’ora, i minuti, i secondi e i millisecondi:
var z = new Date(2013, 1, 1, 15, 30, 0, 0);
/*
getFullYear()	Restituisce l’anno rappresentato con quattro cifre
getMonth()	Restituisce il mese (da 0 a 11)
getDate()	Restituisce il giorno del mese (da 1 a 31)
getDay()	Restituisce il giorno della settimana (da 0 a 6)
getHours()	Restituisce l’ora
getMinutes()	Restituisce i minuti
getSeconds()	Restituisce i secondi
getMilliseconds()	Restituisce i millisecondi 

setFullYear()	Imposta l’anno di una data
setMonth()	Imposta il mese di una data
setDate()	Imposta il giorno del mese di unadata
setHours()	Imposta l’ora di una data
setMinutes()	Imposta i minuti di una data
setSeconds()	Imposta i secondi di una data
setMilliseconds()	Imposta i millisecondi di una data
setTime()	Imposta data e ora specificandolain millisecondi rispetto al 1 Gennaio 1970  

toDateString()	Converte la componente data in stringa, escludendo l’ora
toISOString()	Converte una data in stringa in formato ISO
toLocaleDateString()	Converte la componente data in stringa, escludendo l’ora, secondo le impostazioni locali
toLocaleTimeString()	Converte la componente ora in stringa, escludendo la data, secondo le impostazioni locali
toLocaleString()	Converte una data in stringa secondo le impostazioni locali
toString()	Converte una data in stringa
toTimeString()	Converte la componente ora in stringa, escludendo la data
toUTCString()	Converte una data UTC in stringa
*/


//ARRAY (al contrario di java, sono dinamici)
var x = new Array();
x.length = 10;
var x = new Array("uno", "due", "tre");
x.length = 5; //["uno", "due", "tre", undefined, undefined]

stack.push("quattro"); //["uno", "due", "tre", "quattro"]
stack.pop(); //["uno", "due", "tre"]

var y = x.unshift("zero"); //x = ["zero", "uno", "due", "tre"] ; y = 4
var z = x.shift(); //x = ["uno", "due", "tre"]                 ; z = "zero"

var y = x.splice(1, 1, "quattro"); //Il primo argomento indica la posizione dell’array da cui eliminare o aggiungere elementi; il secondo argomento indica il numero di elementi da eliminare; dal terzo argomento in poi è possibile specificare gli elementi da aggiungere.
// x = ["uno", "quattro", "tre"]
// y = ["due"]
var z = x.splice(2, 0, "cinque", "sei", "sette");
// x = ["uno", "quattro", "cinque", "sei", "sette", "tre"]
// z = []

var y = x.slice(1, 3); // y = ["due", "tre"] ottieni la porzione di array compresa tra i due indici

var x = new Array("uno", "due", "tre"); //concatenare array
var y = new Array("quattro", "cinque");
var z = x.concat(y); //["uno", "due", "tre", "quattro", "cinque"]

var x = new Array("uno", "due", "tre");
x.sort(); //["due", "tre", "uno"]
x.reverse(); //["uno", "tre", "due"]

var x = new Array("uno", "due", "tre");
var y = x.indexOf("due"); // 1

var x = new Array("uno", "due", "tre"); // possiamo ottenere una stringa a partire dall'array
var y = x.join(); //"uno,due,tre"  
var y = x.join(" e poi "); //"uno e poi due e poi tre"

//sono stati introdotti anche TYPEDARRAY: consentono a JavaScript di poter manipolare a basso livello dati binari come ad esempio immagini, suoni ed altre risorse multimediali.

//SET : Un Set può contenere dati di qualsiasi tipo ma senza duplicati.
var mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add("tre");

console.log(mySet.size); //3
console.log(mySet.has(2)); //true