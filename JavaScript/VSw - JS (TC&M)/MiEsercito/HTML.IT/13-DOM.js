//Oltre a fornire un modo per rappresentare mediante oggetti il documento corrente, il DOM consente 
//di manipolare questi oggetti tramite JavaScript.
var p = document.getElementById("mioParagrafo");
/*Questo metodo, uno dei più utilizzati per la gestione del DOM, restituisce un oggetto che rappresenta il nodo 
di tipo elemento che ha l’attributo id con il valore specificato. Se l’elemento non esiste viene restituito il 
valore null, mentre se esistono più elementi con lo stesso id viene restituito il primo individuato.
Analogo a getElementById() è il metodo getElementsByName(), che restituisce l’elenco dei nodi della pagina 
il cui valore dell’attributo name corrisponde a quello del parametro.
A differenza del primo, però, questo metodo restituisce un elenco di oggetti, ovvero, più precisamente, 
un NodeList, cioè una struttura dati simile ad un array contenente nodi del DOM.
È anche possibile individuare gli elementi di una pagina in base al loro tag utilizzando il metodo 
getElementsByTagName(), come nel seguente esempio:       */
var listaParagrafi = document.getElementByTagName("p");
/*In questo caso il metodo restituisce sotto forma di NodeList l’elenco dei nodi corrispondenti al tag 
specificato come parametro. Specificando come parametro la stringa "*", getElementsByTagName() restituisce 
l’elenco di tutti i nodi della pagina.
Se utilizziamo il metodo getElementByClassName() possiamo ottenere l’elenco dei nodi a cui è stato assegnato 
un determinato valore come attributo class. */

/*querySelector
Tra le novità più introdotte più di recente nelle specifiche del DOM c’è la possibilità di selezionare 
gli elementi di una pagina utilizzando i selettori CSS. Due sono i metodi che consentono questo approccio: 
querySelector() e querySelectorAll(). 
L’uno restituisce il primo elemento trovato, l’altro l’elenco di tutti gli elementi individuati dal selettore. 
Ad esempio, il seguente codice restituisce l’elenco dei <div> di classe messaggio: */
var divList = document.querySelectorAll("div.messaggio");
//Il seguente esempio, seleziona l’elemento con id mioParagrafo, risultando quindi alternativo a getElementById():
var p = document.querySelector("#mioParagrafo");

/*Una volta individuato l’elemento o gli elementi presenti su una pagina, possiamo modificarne il contenuto
 o altre caratteristiche sfruttando proprietà e metodi specifiche dei nodi di tipo elemento. Ad esempio, 
 la proprietà innerHTML rappresenta il contenuto HTML di un elemento ed è accessibile sia in lettura che 
 in scrittura. Il seguente codice modifica il contenuto di un paragrafo: */
var p = document.getElementById("mioParagrafo");
p.innerHTML = "Testo del paragrafo";

var img = document.getElementById("miaImmagine");
console.log(img.src); //"https://www.html.it/default.png"
console.log(img.getAttribute("src")); //"default.png"

//NAVIGARE IL DOM
/*Alcuni metodi del DOM ci consentono di analizzare e muoverci all’interno della struttura di un documento. 
Ad esempio, la proprietà childNodes di un elemento contiene l’elenco dei nodi figli dell’elemento sotto forma 
di NodeList. Consideriamo ad esempio il seguente codice HTML:

<div id="mainDiv">
	<h1>Titolo</h1>
	<p>Un paragrafo</p>
	<p>Un altro paragrafo</p>
</div> 

Possiamo scoprire il contenuto degli elementi figli del <div> principale utilizzando il seguente codice JavaScript:
*/
var div = document.getElementById("mainDiv");
for (var i = 0; i < div.childNodes.length; i++) {
    console.log(div.childNodes[i].innerHTML);
}

/*Sono previsti dei metodi per semplificare la navigazione tra i nodi figlio evitando di ricorrere ad un ciclo. 
Tra questi segnaliamo i metodi firstChild() e lastChild() che restituiscono rispettivamente il primo figlio e 
l’ultimo figlio di un elemento.
Il metodo parentNode() restituisce il nodo genitore dell’elemento corrente, permettendoci di risalire la struttura 
gerarchica dell’albero del DOM.
La navigazione del DOM può avvenire non solo verticalmente , analizzando i figli ed il genitore di un elemento, 
ma anche allo stesso livello dell’albero, scoprendo quali sono i nodi fratelli dell’elemento corrente. 
Ad esempio, i metodi nextSibling() e previousSibling() restituiscono il nodo fratello successivo e precedente 
nella struttura del DOM. */

/*Volendo possiamo scorrere gli elementi sfruttando la funzione forEach del prototipo di Array 
(Array.prototype.forEach.call o più semplicemente [].forEach.call), ecco lo stesso esempio riprodotto 
utilizzando forEach: */
var me = document.getElementById("mainDiv");
var allSiblings = me.parentNode.childNodes;
var mySiblings = [];
[].forEach.call(allSiblings, function(el) {
    if (el !== me) mySiblings.push(el);
});


//consideriamo il seguente esempio:
var mainDiv = document.getElementById("mainDiv");
var img = document.createElement("img");
var srcAttr = document.createAttribute("src");
srcAttr.value = "default.png";
img.setAttributeNode(srcAttr);
mainDiv.appendChild(img);
/*Abbiamo utilizzato il metodo createElement() dell’oggetto document, per creare un elemento <img>.
Poi abbiamo creato l’attributo src con il metodo createAttribute() ed impostato il suo valore.
Quindi abbiamo associato l’attributo appena creato all’elemento <img> tramite setAttributeNode().
Infine abbiamo aggiunto l’elemento in fondo all’elenco dei nodi figli del div mainDiv utilizzando 
il metodo appendChild(). */

/*Oltre ad appendChild() possiamo utilizzare il metodo insertBefore() per inserire un nodo prima di un 
altro (ad esempio in un elenco). Il metodo prevede due paremetri: il nodo da inserire ed il nodo prima 
del quale inserirlo nella lista.
Ad esempio, se avessimo voluto inserire il nodo <img> creato nell’esempio precedente prima del 
<div> mainDiv invece che tra i suoi figli, avremmo scritto il seguente codice: */
document.body.insertBefore(img, mainDiv);

//Oltre ad aggiungere un nodo possiamo rimpiazzarlo con un altro tramite replaceChild()
mainDiv.replaceChild(img, mainDiv.firstChild());

//I metodi removeChild() e removeAttribute() consentono di eliminare elementi ed attributi dal DOM
mainDiv.removeChild(mainDiv.firstChild());
mainDiv.removeAttribute("class");


//EVENTI
/*Per intercettare gli eventi che vengono scatenati, utilizziamo il meccanismo degli handler (o dei listener). 
Possiamo definire come handler una funzione di callback che viene associata ad un certo evento.
I meccanismi per associare eventi e handler sono sostanzialmente tre:
1)Via codice, sfruttando la funzione addEventListener().
2)All’interno del markup HTML, sfruttando speciali attributi dei tag;
3)Nel codice JavaScript, associando specifiche proprietà degli elementi del DOM; */

//La funzione addEventListener() è un metodo esposto dagli elementi del DOM e rappresenta la più comune tra le 
//modalità usate per associare un evento al rispettivo handler. La sua sintassi è molto semplice:
elemento.addEventListener(evento, callback, [useCapture]);

/*Rispetto alle altre modalità addEventListener permette una gestione più raffinata degli handler, consente di definirne e 
gestirne più di uno per lo stesso evento e funziona con qualunque elemento del DOM (non solo con gli elementi HTML).
Altro vantaggio sta nel fatto che possiamo rimuovere l’associazione tra evento e handler utilizzando la funzione 
removeEventListener che prende gli stessi parametri di addEventListener ma ha la funzione opposta. 
Ad esempio per smettere di gestire il click sull’elemento test, che avevamo inserito prima, scriveremo: */
test.removeEventListener('click', clickOnTest);

/*Nella gestione di un evento potremmo essere interessati ad ottenere informazioni specifiche su di esso e 
sull’elemento HTML su cui esso si è verificato. Immaginiamo ad esempio di avere assegnato un unico gestore dell’evento 
clic a tutti i pulsanti di una pagina: */
var buttons = document.getElementsByTagName("button");
var handler = function() { console.log("Clic..."); };
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", handler);
}
/*ome facciamo a sapere quale pulsante è stato cliccato? Un possibile approccio consiste nel far riferimento all’oggetto
 this all’interno della funzione che gestisce l’evento: */
var buttons = document.getElementsByTagName("button");
var handler = function() { console.log("Clic su " + this.innerHTML); };
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", handler);
}
/*L’oggetto this rappresenta normalmente l’elemento su cui si è verificato l’evento corrente. 
Tuttavia questo non è sempre vero, come vedremo più avanti quando parleremo del flusso di propagazione degli eventi. */


//FLUSSO DELLA PROPAGAZIONE DEGLI EVENTI NEL DOM
https: //www.html.it/pag/50666/il-flusso-di-propagazione-degli-eventi-nel-dom/