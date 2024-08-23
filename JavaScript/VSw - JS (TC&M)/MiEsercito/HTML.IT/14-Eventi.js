/*Iniziamo dicendo che alcuni eventi sono originati non dall’interazione diretta dell’utente con una 
pagina HTML ma dal browser stesso. Gli eventi di questo tipo, detti anche eventi di interfaccia, 
segnalano il verificarsi di una situazione derivante dalla gestione interna della pagina HTML e 
dell’interfaccia grafica da parte del browser.
Spesso questi eventi sono l’effetto di un evento originato dall’utente. Un classico esempio è il 
click su un link che causa lo scaricamento della pagina corrente e il caricamento di una nuova pagina.
Anche questi eventi per così dire “indiretti” sono intercettabili e gestibili via JavaScript. */

/*L’evento load si verifica quando un oggetto viene caricato dal browser. L’oggetto in questione può 
essere la pagina stessa o uno dei vari componenti che prevedono una richiesta al server, come ad esempio 
un’immagine, uno script, un foglio di stile, un frame.
In generale, per gestire l’evento faremo riferimento all’attributo onload del corrispondente elemento 
HTML o alla proprietà onload dell’oggetto del DOM oppure sfruttiamo il metodo addEventListener() 
specificando il nome di evento load. Il seguente è un esempio di gestione inline dell’evento su un’immagine: 

<script>
function avvisa() {
	alert("Immagine caricata!");
}
</script>
<img id="img" src="miaImmagine.jpg" onload="avvisa()" />

In alternativa possiamo gestirlo con gli altri due approcci come mostrato dal seguente codice:

var img = document.getElementById("img");
img.onload = avvisa;
// oppure ...
img.addEventListener("load", avvisa);                      */

/*L’utilizzo più comune che si fa di questo evento riguarda però il caricamento della pagina. 
Questa circostanza si verifica quando tutti gli elementi che la compongono (testo, immagini, stili e quant’altro) 
sono stati caricati ed è stato generato il corrispondente albero del DOM. Questo è l’evento ideale per effettuare 
inizializzazioni ed impostazioni prima di visualizzare il tutto all’utente.
Per intercettare e gestire l’evento di caricamento della pagina possiamo ricorrere all’attributo onload dell’elemento <body>: 

<body onload="inizializza()"></body>

oppure alla proprietà onload dell’oggetto window:
window.onload = inizializza;                  */


/*Altri eventi che possiamo classificare come eventi legati al browser sono l’evento scroll e l’evento resize. 
Il primo si verifica quando il contenuto di un elemento scorre per consentirne la visualizzazione, mentre il 
secondo si verifica quando cambiano le dimensioni di un elemento. */
window.onscroll = function() {
    console.log(window.pageXOffset + "," + window.pageYOffset);
};

window.onresize = function() {
    console.log(window.innerWidth + "," + window.innerHeight);
};