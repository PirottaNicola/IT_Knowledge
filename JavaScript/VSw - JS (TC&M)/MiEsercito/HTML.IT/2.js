/*Una volta dichiarata, una funzione non viene eseguita subito. 
Stiamo semplicemente dicendo all’engine JavaScript che al blocco 
di codice indicato viene assegnato un nome */
function somma() {
    var z = 11 + 5;
    return z;
}
var risultato = somma(); //richiamo la funzione


/* possiamo non definire alcun argomento nella definizione di somma() 
ed accedere ai valori passati in fase di chiamata tramite un array speciale 
predefinito: arguments. 
La disponibilità di arguments ci consente di creare funzioni con un numero di 
parametri non definito. Ad esempio, possiamo sommare un numero indefinito di valori:  */
function somma() {
    var z = 0;
    var i;
    for (i in arguments) {
        z = z + arguments[i];
    }
    return z;
}


/*Con l’avvento di ECMAScript 6 vengono introdotti altri elementi che arricchiscono la
 flessibilità della gestione degli argomenti di una funzione. In particolare viene 
 introdotta la possibilità di specificare dei valori di default */
function somma(x = 0, y = 0) {
    var z = x + y;
    return z;
}


/*Un modo per creare un oggetto è la rappresentazione letterale: 
si potrebbe dire che definiamo l’oggetto a partire dal proprio contenuto, 
come mostrato nel seguente esempio:*/
var oggettoVuoto = {}; //oggetto vuoto
var persona = { "nome": "Mario", "cognome": "Rossi" }; //oggetto composto da due campi
var persona = { nome: "Mario", cognome: "Rossi" }; //i doppi apici non sono obbligatori, ma lo diventano se i nomi dei campi non seguono le regole per i nomi delle variabili

//è possibile creare oggetti annidati
var persona = {
    nome: "Mario",
    cognome: "Rossi",
    indirizzo: {
        via: "Via Garibaldi",
        numero: 15,
        CAP: "00100",
        citta: "Roma"
    }
};

//accedere ad una proprietà
var nomeMario = persona.nome;

/*Se proviamo ad assegnare un valore ad una proprietà non definita 
creiamo di fatto questa proprietà inizializzandola con il valore assegnato */
var persona = {};
persona.nome = "Mario";
persona.cognome = "Rossi";
persona.indirizzo = {
    via: "Via Garibaldi",
    numero: 15,
    CAP: "00100",
    citta: "Roma"
};
persona.eta = 32;

//metodi
function visualizzaNomeCognome() { return "Mario Rossi"; };
persona.nomeCognome = visualizzaNomeCognome;
var nomeCognome = persona.nomeCognome();
//oppure
persona.nomeCognome = function() { return "Mario Rossi"; };