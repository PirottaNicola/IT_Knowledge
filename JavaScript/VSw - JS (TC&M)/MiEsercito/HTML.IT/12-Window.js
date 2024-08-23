/*Tipicamente i nostri progetti sono eseguiti all’interno sistemi ospite con i quali interagire grazie 
a insiemi di oggetti che espongono interfacce standard, meglio note come API.
Se l’ambito principale e più noto è quello Web, in cui il sistema ospite è il browser, è vero che possiamo 
utilizzare JavaScript anche in ambienti diversi e che possiamo interfacciarci con ciascuno grazie 
alle relative API. Per farci un’idea basta riflettere sul ruolo che ha questo linguaggio nel mobile e 
nei servizi lato server.
In questa sezione esploreremo quindi le principali API che consentono a JavaScript di interagire con 
l’ambiente che lo ospita, iniziando dal Web. */

/*Le Browser API
Come abbiamo già accennato all’inizio della guida, possiamo inserire i nostri script nelle pagine HTML, 
per gestirne gli elementi e modificarli anche in base a sollecitazioni che vengono dall’utente. Tutto ciò 
all’interno del browser.
L’interazione con il browser viene realizzata tramite un’API che, grazie ad alcuni oggetti, consente di 
acquisire informazioni sull’ambiente di esecuzione, di usufruire di alcune funzionalità e di effettuare 
specifiche impostazioni.
Anche se non esiste uno standard ufficiale (solo con HTML5 si stanno definendo delle specifiche comuni), 
la maggior parte dei browser espone un’interfaccia comune gestibile via JavaScript. 
Esaminiamone gli oggetti principali:*/

/* 
L’oggetto window
L’oggetto principale per l’interazione con il browser è window: esso rappresenta una finestra che contiene 
un documento HTML. Quindi ciascuna finestra o tab ha associato un proprio oggetto window e, allo stesso modo, 
a ciascun frame definito in una pagina HTML corrisponde un oggetto window.
Questo oggetto, oltre ad identificare l’elemento visivo del browser, rappresenta anche il contesto di esecuzione 
globale per JavaScript, cioè l’oggetto all’interno del quale vengono definite variabili e funzioni globali. 
Esso è inoltre l’oggetto associato alla parola chiave this quando non esiste un contesto specifico.
Qualsiasi variabile o funzione definita nel contesto globale diventa di fatto proprietà o metodo dell’oggetto 
window.

Alcune proprietà dell’oggetto window ci consentono di ottenere informazioni su diversi aspetti della 
configurazione corrente del browser.
Dimensioni della finestra
Ad esempio, le proprietà innerHeight e innerWidth ci consentono di ottenere le dimensioni interne 
dell’area occupata dalla finestra espresse in pixel, mentre La proprietà screen dell’oggetto window ci fornisce 
informazioni su alcune caratteristiche dello schermo del dispositivo corrente... */
console.log(innerWidth + "x" + innerHeight) // 1280x386

console.log(window.screen.width + "x" + window.screen.height)

console.log(window.screen.availWidth + "x" + window.screen.availHeight);

window.alert("Questo è un messaggio");

if (window.confirm("Confermi l'eliminazione?")) {... }

var nome = window.prompt("Inserisci il tuo nome");
if (nome != null) {... }

window.open("http://www.html.it", "myWindow");
/*La proprietà frames è un array di oggetti window che rappresentano i frame contenuti nella pagina corrente. 
Il seguente codice visualizza gli indirizzi dei frame contenuti nella pagina corrente: */
for (var i = 0; i < frames.length; i++) {
    console.log(frames[i].location.href)
}
/*Dal momento che con la presenza dei frame si viene a creare una gerarchia di oggetti window, 
abbiamo la possibilità di navigare in questa gerarchia tramite le proprietà parent e top: la prima 
rappresenta l’oggetto genitore della finestra o frame corrente, mentre la seconda indica la finestra 
radice della gerarchia. */