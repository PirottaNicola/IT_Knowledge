//REFLECTION
/* Come diversi linguaggi di programmazione, anche JavaScript supporta la reflection, 
cioè la capacità di analizzare a runtime la struttura degli elementi e dei dati di un programma. */
var persona = {
    nome: "Mario",
    cognome: "Rossi",
    mostraNomeCompleto: function() {
        return this.nome + " " + this.cognome;
    }
};
//possiamo elencare i suoi membri con un ciclo analogo al seguente:
var p;
for (p in persona) { console.log(p); }
//Il risultato che otterremo sarà l’elenco dei nomi delle proprietà e dei metodi dell’oggetto persona.


//REFLECT
/*Reflect è un oggetto globale introdotto dalle specifiche ECMAScript 2015, 
che consente di eseguire operazioni di reflection sugli oggetti JavaScript, 
cioè di analizzare e manipolare programmaticamente le loro proprietà. 
Possiamo ad esempio definire una nuova proprietà o eliminarne una esistente, 
eseguire una funzione con uno specifico valore per this o verificare se un 
oggetto ha una determinata proprietà. */


//PROXY
/*La classe Proxy, introdotta con le specifiche ECMAScript 2015, consente di creare 
oggetti che hanno la capacità di modificare il comportamento predefinito di altri oggetti. 
Nella definizione di un proxy per un oggetto, cioè di un’istanza della classe Proxy, 
possiamo definire un handler e configurare trap per intercettare l’accesso alle sue proprietà 
ed eventualmente modificare il comportamento predefinito. */

//Supponiamo di voler tracciare sulla console ogni accesso alle proprietà di un oggetto. Possiamo definire il seguente handler:
var handler = {
    get(target, propertyName) {
        console.log("Lettura di " + propertyName);
        return target[propertyName];
    },
    set(target, propertyName, value) {
        console.log("Assegnamento di " + value + " a " + propertyName);
        target[propertyName] = value;
    }
};
//Questo handler non è altro che un oggetto con due metodi, get() e set(), 
//che intercettano rispettivamente gli accessi in lettura e scrittura alle 
//proprietà dell’oggetto che vogliamo monitorare. I metodi dell’handler sono 
//chiamati trap e consentono di intercettare accessi e manipolazioni relative all’oggetto di destinazione, il target.

//Una volta definito l’handler, possiamo creare un proxy per un oggetto specificandolo nel costruttore della classe Proxy
var persona = { nome: "Mario", cognome: "Rossi" };
var personaProxata = new Proxy(persona, handler);
//Abbiamo creato un oggetto persona e lo abbiamo passato insieme all’handler al costruttore della classe Proxy. 
//D’ora in poi ogni accesso alle proprietà dell’oggetto personaProxata avrà effetto sull’oggetto persona e 
//verrà intercettato e loggato sulla console:
var nome = personaProxata.nome;
//console: Lettura di nome
personaProxata.nome = "Marco";
//console: Assegnamento di Marco a nome
console.log(persona.nome);
//console: Marco


//DATA BINDING
/*Data binding
Un altro ambito in cui possiamo utilizzare la classe Proxy è nell’implementazione del data binding, 
cioè nel meccanismo che lega le proprietà di due oggetti in modo che le modifiche si propaghino da uno all’altro.
Nel contesto del data binding si parla di un oggetto che fornisce dati (data source object) e di un oggetto 
che li riceve (data target object). L’esempio tipico di applicazione del data binding è quello che associa 
una proprietà di un oggetto con un elemento dell’interfaccia grafica, come ad esempio una casella di testo. */