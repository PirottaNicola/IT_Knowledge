/*La possibilità di comunicare con il server tramite codice dall’interno di una pagina Web è stato uno dei 
principali motivi della rinascita di JavaScript. La tecnologia nota come Ajax (Asynchronous JavaScript And XML) 
rappresenta la rivisitazione di tecnologie esistenti sotto una nuova luce, con l’obiettivo di consentire di inviare 
e ricevere dati dal server in maniera asincrona e con la possibilità di aggiornare porzioni di una pagina Web.
Anche se l’acronimo fa riferimento a XML come formato di rappresentazione dei dati, in realtà esso non è obbligatorio: 
infatti una delle rappresentazioni più spesso utilizzate è JSON. 

Ajax ruota intorno all’oggetto XMLHttpRequest che rappresenta l’intermediario tra il codice JavaScript eseguito 
sul browser e il codice eseguito sul server. Questo oggetto mette a disposizione tutti gli strumenti per creare 
ed inviare richieste HTTP e ricevere ed analizzare le relative risposte.
Quello che segue è un semplice esempio di utilizzo di XMLHttpRequest:
*/
var httpReq = new XMLHttpRequest();
httpReq.onreadystatechange = function() {
    if (httpReq.readyState == 4 && httpReq.status == 200) {
        document.getElementById("myDiv").innerHTML = httpReq.responseText;
    }
};
httpReq.open("GET", "/myServerPage", true);
httpReq.send();
/*Analizzando il codice vediamo che, dopo aver creato un’istanza del nostro oggetto, abbiamo associato all’evento 
readystatechange un gestore che ha il compito di catturare la risposta del server ed assegnarla come contenuto del <div> myDiv.
L’evento readystatechange si verifica ad ogni variazione del valore della proprietà readyState di XMLHttpRequest, 
che rappresenta lo stato di avanzamento della richiesta. 
Nel nostro caso, quando la risposta ricevuta dal server è completa ed il codice di stato HTTP inviato dal server è 200 
(valore che indica che non si sono verificati errori), il contenuto inviato dal server e rappresentato dalla proprietà 
responseText viene assegnato al <div> myDiv.

Dopo aver preparato la funzione che gestirà l’evento di risposta, apriamo una connessione HTTP con il server tramite il metodo open(). 
I parametri che passiamo a questo metodo rappresentano:
il verbo HTTP (GET nel nostro caso);
l’URL della pagina o dello script server side richiesto;
un valore booleano opzionale che indica se la richiesta deve essere effettuata in maniera asincrona (true) o sincrona (false).

Se non è specificato il terzo parametro viene assunto il valore true e la chiamata sarà asincrona. 
Infine inviamo la richiesta tramite il metodo send().
Nota: se l’interazione con il server è sincrona, cioè il terzo parametro del metodo open() è false, 
non dobbiamo gestire readystatechange ma possiamo gestire la risposta del server subito dopo l’invocazione del metodo send().
*/
var httpReq = new XMLHttpRequest();
httpReq.open("GET", "/myServerPage", false);
httpReq.send();
if (httpReq.status == 200) {
    document.getElementById("myDiv").innerHTML = httpReq.responseText;
}

/*Nell’esempio che abbiamo analizzato abbiamo ignorato la possibilità che il server ci segnali situazioni di errore. 
In situazioni reali dobbiamo prevedere questa eventualità e gestire opportunamente i codici di stato inviati dal server. 
Un possibile modo di gestire la situazione è mostrato di seguito: */
var httpReq = new XMLHttpRequest();
httpReq.onreadystatechange = function() {
    if (httpReq.readyState == 4) {
        switch (httpReq.status) {
            case 200:
                document.getElementById("myDiv").innerHTML = httpReq.responseText;
                break;
            case 404:
                alert("La pagina indicata non esiste!");
                break;
            case 500:
                alert("Si è verificato un errore sul server!");
                break;
            default:
                alert("Non è possibile elaborare la richiesta (" + httpReq.statusText + ")");
        }
    }
};
/*Quando la ricezione della risposta è completa viene analizzato il codice di stato ed eseguite le istruzioni corrispondenti. 
Da notare l’utilizzo della proprietà statusText che rappresenta il testo associato al codice di stato HTTP.
Nel nostro esempio abbiamo utilizzato la proprietà responseText, che restituisce la risposta del server come semplice testo. 
Se il server invia una risposta in formato XML possiamo utilizzare la proprietà responseXML che restituisce la risposta come 
documento XML e a cui possiamo applicare i metodi per la relativa manipolazione.
Il seguente esempio mostra come assegnare al <div> myDiv il contenuto dell’elemento rappresentato dal tag testo presente 
nell’XML inviato dal server: */
httpReq.onreadystatechange = function() {
    if (httpReq.readyState == 4) {
        switch (httpReq.status) {
            case 200:
                var xmlDoc = httpReq.responseXML;
                document.getElementById("myDiv").innerHTML = xmlDoc.getElementByTagName("testo")[0].childNodes[0].nodeValue;
                break;
                ...
        }
    }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*L’utilizzo di XMLHttpRequest per la gestione di chiamate HTTP da JavaScript risulta abbastanza prolisso e scomodo. 
È chiaramente questa una delle principali ragioni del successo di metodi alternativi, come ad esempio quello offerto da 
jQuery tramite $.ajax(). Per questo ed altri motivi, il gruppo di lavoro WHATWG ha definito recentemente una alternativa a 
XMLHttpRequest: l’API fetch().
Rispetto a XMLHttpRequest, fetch() ha una sintassi più semplice e meglio integrata nel modello ad oggetti di JavaScript. 
L’API prevede una gestione delle chiamate asincrone basata sulle promise (che tratteremo meglio più avanti) ed è pensata 
per essere estesa ed utilizzabile in diversi contesti, non solo all’interno del browser. A questo proposito, dal momento 
che non tutti i contesti in cui fetch() è utilizzabile supportano l’API nativamente, può essere opportuno ricorrere ad un polyfill, 
come ad esempio isomorphic-fetch. Questa libreria è in grado di sopperire al mancato supporto di fetch() sia lato browser che lato 
server su Node.js.
Ma andiamo un po’ sul concreto e vediamo come utilizzare fetch() introducendo alcuni dei casi d’uso più comuni. 
L’utilizzo più semplice dell’API è quello mostrato di seguito: */
fetch("http://www.html.it")
    .then(response => {
        console.log(response);
    })
    .catch(error => console.log("Si è verificato un errore!"))
    /*Come possiamo vedere, abbiamo specificato l’URL su cui effettuare la richiesta HTTP come parametro della funzione fetch() 
    ed abbiamo gestito la risposta come una promise. In caso di successo la promise verrà risolta ed entreremo nel ramo then(), 
    in cui ci verrà fornita la risposta del server sotto forma di oggetto di tipo Response. 

    Occorre sottolineare che la promise restituita dalla funzione fetch() viene risolta ogni qualvolta c’è una risposta da parte 
    del server, non solo quando otteniamo un codice di stato 200. In altre parole, se entriamo nel ramo then() del codice precedente
    non dobbiamo dare per scontato di aver ottenuto il contenuto richiesto al server. È buona norma verificare il codice di stato 
    della risposta e gestirlo opportunamente. Il seguente esempio di codice mostra sinteticamente il significato dei diversi codici di stato:
    */
fetch("http://www.html.it").then(response => {
    if (response.ok) {
        console.log("Contenuto ricevuto");
    }
    if (response.status >= 100 && response.status < 200) {
        console.log("Informazioni per il client");
    }
    if (response.status >= 300 && response.status < 399) {
        console.log("Redirezione");
    }
    if (response.status >= 400 && response.status < 499) {
        console.log("Richiesta errata");
    }
    if (response.status >= 500 && response.status < 599) {
        console.log("Errore sul server");
    }
}).catch(error => console.log("Si è verificato un errore!"))

/*Come possiamo vedere, anche la condizione d’errore sul server (codici di stato compresi tra 500 e 599) determina 
la risoluzione positiva della promise generata da fetch(). Infatti la promise viene rigettata soltanto quando si è 
verificato un problema intrinseco nella comunicazione, come ad esempio nel caso in cui il server non risponde o non 
è disponibile una connessione Internet. In questo caso entreremo nel ramo catch() della gestione della promise. */

/*Una volta inviata la richiesta al server, con molta probabilità vorremo leggere il contenuto della risposta. 
L’oggetto Response ci mette a disposizione alcuni metodi per ottenere il contenuto restituito dal server in base al tipo.
Ciascuno di questi metodi restituisce una promise, quindi se ad esempio ci aspettiamo un JSON come risposta ad una richiesta HTTP, 
potremo ottenere l’oggetto deserializzato come nel seguente esempio: */
fetch("https://www.html.it/api/articoli/123").then(response => {
    if (response.ok) {
        return response.json();
    }
}).then(articolo => console.log(articolo.titolo)).catch(error => console.log("Si è verificato un errore!"))