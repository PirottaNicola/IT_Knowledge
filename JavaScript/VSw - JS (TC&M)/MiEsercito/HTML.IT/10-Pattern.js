/*I Design Pattern sono soluzioni tecniche a problemi comuni di progettazione del software. 
Essi rappresentano schemi logici di risoluzione di un problema riusabili e indipendenti dal linguaggio 
di programmazione ed offrono un modello di riferimento per la realizzazione di componenti software facilmente manutenibili. */

//SINGLETON PATTERN
/*
Il Singleton Pattern è un pattern che prevede l’esistenza di un’unica istanza di un oggetto. Per un linguaggio 
di programmazione basato sulle classi questo significa che una classe può essere istanziata una sola volta e che 
gli eventuali tentativi di creare una nuova istanza della classe ottengono l’istanza già creata.
In JavaScript possiamo creare oggetti direttamente, dal momento che non sono previste classi. Quindi ogni oggetto 
è in realtà già un singleton. */

//FACTORY PATTERN
/*Il Factory Pattern è un pattern creazionale che ha l’obiettivo di semplificare la creazione di oggetti in situazioni
 in cui abbiamo un’alta varietà di impostazioni iniziali oppure quando l’istanza di oggetto da creare dipende dal contesto
in cui ci troviamo. Proviamo ad introdurre il pattern con un esempio, immaginando di dover consentire la creazione di 
veicoli con caratteristiche specificate al momento della creazione. Il seguente codice mostra come può essere risolto il 
problema sfruttando il Factory Pattern: */
var veicoloFactory = {
    creaVeicolo: function(opzioni) {
        var veicolo;
        if (opzioni && opzioni.length) {
            switch (opzioni.tipo) {
                case "auto":
                    veicolo = new Automobile(opzioni);
                    break;
                case "moto":
                    veicolo = new Moto(opzioni);
                    break;
                case "camion":
                    veicolo = new Camion(opzioni);
                    break;
            }
        }
    };
};

//MODULE PATTERN
/*I moduli sono elementi essenziali dell’architettura di un’applicazione robusta e facilmente gestibile. Essi consentono di
organizzare le parti di un’applicazione in unità separate ma integrabili grazie ai meccanismi di esportazione e importazione,
cioè rispettivamente della possibilità di rendere pubblicamente accessibile del codice e di accedere a codice esportato da altri moduli.
Prima della loro introduzione con ECMASCript 2015, JavaScript non aveva un meccanismo nativo per la definizione dei moduli e molto
spesso il codice veniva scritto senza preoccuparsi di organizzarlo in modo da evitare, ad esempio, conflitti di nomi di variabili 
o funzioni. Anche se le nuove specifiche prevedono questo importante funzionalità, non possiamo ignorare la quantità di codice
JavaScript esistente che implementa i moduli ricorrendo al Module Pattern. */
var modulo = (function() {
    function metodoPrivato() {
        //...
    }
    return {
        metodoPubblico: function() {
            metodoPrivato();
        }
    }
})();


//MVC (Model-View-Controller) Pattern
/*Uno dei più noti pattern architetturali è MVC (Model-View-Controller) Pattern che si pone l’obiettivo 
di disaccoppiare l’interfaccia utente dal modello dei dati in modo da ottenere un’architettura più flessibile. 
Come suggerisce il nome, questo pattern si basa su tre componenti: 
Per fissare meglio le idee, immaginiamo di dover creare un’interfaccia Web per la gestione di dati anagrafici. 
I ruoli del pattern MVC andranno così suddivisi:

- il Model sarà costituito dall’oggetto che rappresenta una persona;
- la View dall’HTML che mostra i dati della persona e ne permette l’interazione con l’utente, come ad esempio 
il salvataggio dopo una modifica;
- il Controller da un oggetto che si occuperà di fornire i dati da mostrare alla View e di gestire i comandi 
impartiti dall’utente.

Alla luce di queste considerazioni, possiamo scrivere il seguente codice HTML per l’interfaccia Web:

<label for="txtNome"><input id="txtNome" type="text" value=""/><br/>
<label for="txtCognome"><input id="txtCognome" type="text" value=""/><br/>
<button id="btnSalva"/>Salva</button><br/>

che sarà gestita dal seguente codice JavaScript:
*/
var model = { nome: "Mario", cognome: "Rossi" };
var view = {
    txtNome: document.getElementById("txtNome");
    txtCognome: document.getElementById("txtCognome");
    btnSalva: document.getElementById("btnSalva");
};
var controller = {
    init: function() {
        view.txtNome.value = model.nome;
        view.txtCognome.value = model.cognome;
        view.btnSalva.onclick = controller.salva;
    },
    salva: function() {
        model.nome = view.txtNome.value;
        model.cognome = view.txtCognome.value;
        //invia il model al server
        invia(model);
    }
};