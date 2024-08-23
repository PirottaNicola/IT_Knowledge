/*Grazie ad HTML5, oggi possiamo leggere il contenuto di un file direttamente da un browser senza coinvolgere il server. 
Naturalmente la questione sicurezza non è stata messa da parte. Infatti uno script in esecuzione su un browser non può 
autonomamente accedere ad un file del sistema.

Accedere ai file
L’accesso deve essere esplicitamente autorizzato dall’utente tramite l’elemento <input> o il drag and drop.

Sfruttare l’elemento input
Sfruttando l’elemento <input> consentiamo all’utente di indicare un file selezionandolo dal file system locale. 
Specificando l’attributo multiple, come mostrato nel seguente esempio, consentiamo la selezione di più file:

<input type="file" id="fileSelezionati" multiple> 

Sfruttare il drag and drop
Leggermente più complessa è la situazione se si vuole consentire all’utente di specificare uno o più file tramite drag and drop. In questo caso dobbiamo prima definire un’area all’interno della quale consentire il drop dei file, ad esempio un <div>.

Quindi gestiamo gli eventi dragenter, dragover e drop come mostrato dal seguente codice:
*/
var area = document.getElementById("area");
area.addEventListner("dragenter", dragenter);
area.addEventListner("dragover", dragover);
area.addEventListner("drop", drop);

function dragenter(event) {
    event.stopPropagation();
    event.preventDefault();
}

function dragover(event) {
    event.stopPropagation();
    event.preventDefault();
}

function drop(event) {
    event.stopPropagation();
    event.preventDefault();
    var files = event.dataTransfer.files;
    console.log(files.length);
}

/*I gestori dragenter e dragover apparentemente non fanno nulla di particolare tranne che impedire la propagazione 
dell’evento e il comportamento predefinito dell’operazione. Senza queste istruzioni tuttavia il trascinamento dei 
file sulla pagina causerebbe il loro caricamento all’interno della finestra del browser.
Il gestore dell’evento drop, invece, accede all’elenco dei file tramite la proprietà dataTransfer dell’oggetto event 
e mostra il numero di file trascinati all’interno della nostra area.

Usare i file
Cosa fare dei file selezionati dall’utente dipende naturalmente dalla nostra applicazione. è a questo punto che possiamo 
utilizzare le File API, un’interfaccia per l’accesso in lettura ai file selezionati dall’utente ed al loro contenuto. */
//Il seguente codice mostra come accedere in questo caso all’elenco dei file selezionati dall’utente:
var fileSelezionati = document.getElementById("fileSelezionati").files;

/*Indipendentemente da come l’utente abbia selezionato i file, una volta avuto accesso alla lista possiamo gestirli 
sfruttando le funzionalità messe a disposizione dalle File API. Ad esempio, il seguente codice mostra all’interno di 
un elemento della pagina alcune informazioni su ciascun file selezionato: */
var info = document.getElementById("infoDiv");
var file;
for (var i = 0; i < fileSelezionati.length; i++) {
    file = fileSelezionati[i];
    info.innerHTML = info.innerHTML + file.name +
        " (" + file.size + " byte, " +
        file.type + ")<br/>";
}

/*Oggetto File
Le informazioni sui file mostrate fanno capo a tre proprietà di ciascun oggetto File:

name	Nome del file
size	Dimensione del file espressa in byte
type	Il tipo MIME del file, se è possibile determinarlo, altrimenti una stringa vuota 

Ecco un esempio di output generato dallo script precedente:
*/
setup.exe(478720 byte, application / x - msdownload)
setup.ini(279 byte, )
readme_it.txt(11598 byte, text / plain)
readme_it.html(12031 byte, text / html)




//l'oggetto FILEREADER
/*Come abbiamo già accennato, per accedere al contenuto di un file dobbiamo fare ricorso all’oggetto FileReader. 
Tramite una serie di metodi asincroni possiamo gestire il contenuto di un file in maniera abbastanza immediata.

readAsText
Ad esempio, se vogliamo visualizzare il contenuto di un file di testo possiamo procedere come nel seguente esempio: */
var reader = new FileReader();
reader.onload = function(event) {
    var testo = event.target.result;
    document.getElementById("contenuto").innerHTML = testo;
};
reader.readAsText(file);
/*Abbiamo creato un’istanza dell’oggetto FileReader, quindi abbiamo assegnato un gestore all’evento load dell’oggetto 
ed abbiamo invocato il metodo readAsText() passandogli l’oggetto file da leggere. Al termine del caricamento del file 
viene generato l’evento load, in corrispondenza del quale accediamo al contenuto del file tramite la proprietà result di
 target messo a disposizione dall’oggetto event. Questo contenuto lo visualizziamo quindi all’interno di un elemento della pagina.
Il metodo readAsText(), quindi, ci consente di accedere al contenuto di un file interpretandolo come testo. */

/*readAsArrayBuffer
Un approccio più generale che ci consente di accedere al contenuto di qualsiasi tipo di file è fornito da readAsArrayBuffer(). 
Questo metodo ci fornisce la rappresentazione binaria del contenuto del file, ma naturalmente la sua gestione è un po’ più complessa 
e richiede la conoscenza della struttura del file. Il seguente esempio mostra come riconoscere il formato di un file di immagine 
sfruttando il cosiddetto magic number, il numero rappresentato dai primi quattro byte: */
var reader = new FileReader();
reader.onload = function(event) {
    var buffer = event.target.result;
    var int32View = new Int32Array(buffer);
    switch (int32View[0]) {
        case 1196314761:
            tipoImmagine = "png";
            break;
        case 944130375:
            tipoImmagine = "gif";
            break;
        case 544099650:
            tipoImmagine = "bmp";
            break;
        case -520103681:
            tipoImmagine = "jpg";
            break;
        default:
            tipoImmagine = "sconosciuto";
            break;
    }
    console.log(tipoImmagine);
};
reader.readAsArrayBuffer(file);