/*Nella programmazione JavaScript si fa spesso ricorso ad un modello di programmazione concorrente in base al quale 
possiamo pensare che diverse attività possano avvenire virtualmente in parallelo e possano comunicare tra di loro in maniera asincrona.
Pensiamo, ad esempio, al verificarsi di eventi: questi si possono verificare in maniera indipendente dall’esecuzione del 
flusso principale del nostro script e, virtualmente, possono verificarsi più eventi contemporaneamente. 
Se abbiamo previsto gestori di eventi per più eventi, ci aspettiamo che questi vengano eseguiti immediatamente al 
verificarsi del relativo evento. 

In realtà le cose non stanno proprio così. Il modello di concorrenza di JavaScript è diverso da quello di altri linguaggi
come ad esempio C o Java.
Mentre infatti nei linguaggi di programmazione che supportano la concorrenza una porzione di codice di un thread può essere
 interrotta per mandare avanti l’esecuzione di un altro thread, in JavaScript tutto avviene in un unico thread.
Il modello di concorrenza in base al quale abbiamo l’illusione che più thread siano in esecuzione è quello dell’event loop:
 ogni evento inserisce un messaggio in una coda che viene elaborata sequenzialmente dal runtime di JavaScript in un ciclo infinito.
In pratica, un engine JavaScript non fa altro che verificare la presenza di messaggi nella coda ed eseguire il codice dell’eventuale
 gestore per passare poi al messaggio successivo. È importante aver chiaro che il codice eseguito tra un messaggio ed il successivo
  viene eseguito senza interruzioni. Qualsiasi evento che si verifica durante l’esecuzione di un ciclo dell’event loop non può
   interromperlo.
Comprendere il modello di concorrenza su cui si basa JavaScript è importante per capire il motivo di certi comportamenti e per
 poter scrivere codice efficiente.
Infatti, se questo meccanismo ha dalla sua parte un’estrema semplicità ed efficienza dovute all’assenza del cambio di contesto
 tra thread diversi, non è tuttavia immune da piccoli inconvenienti.



 Per mantenere responsiva l’interfaccia utente mentre si effettuano elaborazioni impegnative con JavaScript siamo costretti 
 a ricorrere a qualche trucco sfruttando meglio che possiamo il ciclo di elaborazione del runtime.
L’uso di setTimeout() è un esempio tipico di questo approccio. Essa ci consente di rendere in qualche modo asincrona l’elaborazione
 JavaScript, ma non parallela. In altre parole, qualsiasi elaborazione eseguita dall’interprete JavaScript non può avvenire in 
 parallelo a un’altra: tutte le attività sono sequenziali, anche se possiamo spezzarle, inframezzarle con altre ed avere 
 l’illusione di una forma di parallelismo.
Per sopperire a questa limitazione, la specifica HTML5 introduce un’importante novità in questo ambito: i Web Worker. 
Un Web Worker è un thread eseguito parallelamente all’esecuzione del thread principale del JavaScript engine.


Oltre ai Web Worker che abbiamo analizzato, le specifiche prevedono un altro tipo di worker: gli Shared Worker.
I worker che abbiamo visto finora, detti anche Dedicated Worker, hanno una relazione diretta con il thread e/o lo 
script che li hanno generati, cioè con essi può interagire soltanto il thread che li ha generati. Gli Shared Worker, 
invece, possono comunicare con tutti gli script che condividono la stessa origine, cioè tutti gli script appartenenti 
ad uno stesso sito o applicazione Web.
*/


//funzioni asincrone con Async/wait
https: //www.html.it/pag/69778/funzioni-asincrone-con-asyncawait/