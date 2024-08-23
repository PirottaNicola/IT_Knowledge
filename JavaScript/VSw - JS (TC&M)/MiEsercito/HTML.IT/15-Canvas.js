/*Innanzitutto puntualizziamo il concetto che un canvas è letteralmente una tela su cui possiamo disegnare e colorare ed è 
individuata su una pagina HTML dall’elemento <canvas>: */
// <canvas id="myCanvas"></canvas>

/*La prima cosa da fare per poter lavorare sulla nostra tela è acquisire il contesto di lavoro tramite 
il metodo getContext() dell’oggetto canvas: */
var myCanvas = document.getElementById("myCanvas");
var context = myCanvas.getContext("2d");

/*na volta acquisito il contesto, possiamo utilizzare un ampio numero di metodi e proprietà per creare i nostri elementi grafici. 
Ad esempio, il seguente codice disegna un cerchio del tutto identico a quello che abbiamo creato con SVG: */
context.beginPath();
context.arc(100, 100, 50, 0, 2 * Math.PI);
context.fillStyle = "#00ff00";
context.fill();
context.strokeStyle = "#000000";
context.stroke();

/*Il metodo beginPath() consente di avviare il disegno di un nuovo elemento. Possiamo immaginare che l’invocazione di questo 
metodo appoggi la punta del pennello sulla tela pronto per iniziare il disegno o la colorazione.
Per disegnare il cerchio sfruttiamo il metodo arc(), il cui compito è quello di disegnare un arco, fornendo come 
parametri le coordinate del centro, la dimensione del raggio, l’angolo iniziale e l’angolo finale dell’arco. 
Nel nostro caso abbiamo indicato come arco iniziale l’arco di zero radianti e come angolo finale l’angolo giro (2 pi-greco).
Abbiamo quindi indicato il colore per il riempimento e l’abbiamo applicato tramite il metodo fill() ed il colore del bordo 
applicandolo tramite stroke(). */

/*Per creare l’effetto di animazione analogo a quello che abbiamo realizzato sfruttando SVG, 
procediamo con il parametrizzare le coordinate del cerchio e creare una funzione che ha il compito di disegnarlo: */
var x = 100;
var y = 100;

function drawCircle(x, y) {
    context.beginPath();
    context.arc(x, y, 50, 0, 2 * Math.PI);
    context.fillStyle = "#00ff00";
    context.fill();
    context.strokeStyle = "#000000";
    context.stroke();
}

//Quindi definiamo una funzione che sposta il cerchio all’interno del canvas:
function animate() {
    x = x + 2;
    if (x > myCanvas.width) x = 20;
    context.clearRect(0, 0, myCanvas.width, myCanvas.height);
    drawCircle(x, y);
}

/*Notiamo come per spostare il cerchio abbiamo cancellato l’intera superficie del canvas tramite il metodo clearRect() e 
ridisegnato la figura geometrica cambiando leggermente la coordinata x.
A questo punto non ci resta che attivare l’animazione tramite un timer: */
var timerId;

function startAnimation() {
    if (timerId == null) {
        timerId = setInterval(animate, 20);
    }
}
startAnimation();

/*Per importare un’immagine esistente all’interno di un canvas, possiamo procedere come mostrato dal seguente codice: */
var img = new Image();
img.onload = function() {
    context.drawImage(img, 0, 0);
};
img.src = "immagine.jpg";
/*bbiamo creato un oggetto di tipo immagine inserendolo nel nostro canvas tramite il metodo drawImage(). 
Questo metodo prevede come parametri l’immagine e le coordinate all’interno del canvas in cui visualizzarla.
È importante inserire l’immagine nel canvas dopo che questa sia stata effettivamente caricata nel DOM. 
Per questo motivo il metodo drawImage() viene invocato in corrispondenza dell’evento load.
Una volta nel canvas, possiamo manipolare l’immagine mediante tutte le funzionalità previste dalle API. 
Possiamo anche fare una copia in un formato diverso dall’originale sfruttando il metodo toDataUrl() dell’elemento <canvas>: */
var imgElement = document.createElement("img");
var myCanvas = document.getElementById("myCanvas");
imgElement.src = myCanvas.toDataUrl("image/png");
document.body.appendChild(imgElement);