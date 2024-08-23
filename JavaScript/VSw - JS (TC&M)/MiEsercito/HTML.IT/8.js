//SYMBOL
/*A differenza però dei tipi di dato tradizionali, i simboli non prevedono una sintassi letterale. 
Cioè, mentre ad esempio possiamo identificare le stringhe come sequenze di caratteri tra apici o doppi apici, 
i booleani come i valori true e false, ect. per i simboli non abbiamo questa possibilità. 
L’unico modo per creare un simbolo è la funzione Symbol() */
var x = Symbol();

//In fase di creazione possiamo assegnare una descrizione al simbolo generato:
var x = Symbol("mioSimbolo");


/*Ma che utilizzo concreto possiamo farne nelle nostre applicazioni JavaScript? 
Proviamo a suggerire i possibili utilizzi con qualche esempio.
Supponiamo di voler identificare un oggetto in maniera univoca assegnando un valore alla sua proprietà id:*/
var item = { descrizione: "Prodotto A", prezzo: 24.5 };
item.id = nuovoId();
/*L’approccio classico consiste nel prevedere una funzione, nuovoId() nel nostro esempio, che gestisca un 
contatore globale da incrementare ad ogni nuova richiesta per un nuovo identificatore. Con i simboli possiamo 
evitare il ricorso a questa funzione scrivendo semplicemente: */
item.id = Symbol(); //È il runtime di JavaScript a generare per noi un valore univoco.


//SERIALIZZAZIONE DI OGGETTI --> JSON
/*La possibilità di memorizzare dati o comunque di rappresentarli in maniera da poterli trasferire tra programmi 
anche diversi è fondamentale nella programmazione. In questo ambito si può far rientrare la serializzazione, 
cioè il processo di trasformazione di un oggetto in un formato facilmente memorizzabile e/o trasmissibile, 
ed il relativo processo inverso, cioè la deserializzazione. 
La maggior parte dei moderni linguaggi di programmazione supporta dei meccanismi che consentono di gestire questi 
processi e rappresentare gli oggetti in formati diversi spesso basati su XML. Negli ultimi tempi, però, si sta sempre 
più affermando la rappresentazione di oggetti in JSON (JavaScript Object Notation). Come indica il nome, 
questo formato nasce dalla notazione letterale degli oggetti di JavaScript, ma è diventato ormai uno standard de facto
 indipendente dal linguaggio di programmazione e dalla piattaforma.
Sostanzialmente JSON utilizza un sottoinsieme della notazione letterale degli oggetti di JavaScript per rappresentarli
 sotto forma di stringa. Ad esempio, il seguente oggetto: */
{ nome: "Mario", cognome: "Rossi" }
//viene rappresentato in JSON con la seguente stringa:
'{nome: "Mario", cognome: "Rossi"}'
/*Naturalmente l’utilizzo di questo formato per la serializzazione e deserializzazione di oggetti in JavaScript è 
del tutto immediato, dal momento che in linea di principio sarebbe sufficiente utilizzare l’eval() della stringa per 
ottenere l’oggetto rappresentato. In pratica però è opportuno effettuare alcuni controlli per evitare errori e l’introduzione 
di codice indesiderato. 
Il metodo parse() prende in input una stringa JSON e genera il corrispondente oggetto JavaScript: */
var marioRossi = JSON.parse('{nome: "Mario", cognome: "Rossi"}');
//Il metodo parse() prende in input una stringa JSON e genera il corrispondente oggetto JavaScript:
var marioRossi = JSON.parse('{nome: "Mario", cognome: "Rossi"}');
//Se l’oggetto da rappresentare contiene dei metodi, questi vengono semplicemente ignorati dal parser.