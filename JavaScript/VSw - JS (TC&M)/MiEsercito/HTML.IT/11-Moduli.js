/*Tra le novità introdotte dalle specifiche ECMAScript 2015 che hanno un impatto significativo nello 
sviluppo con JavaScript è da sottolineare senza dubbio il supporto nativo dei moduli. La definizione 
dei moduli proposta dallo standard evita il ricorso a soluzioni ad hoc e alla implementazione del 
Module Pattern, offrendo un meccanismo comune per tutti gli sviluppatori.
Secondo le specifiche, un modulo JavaScript è memorizzato in un file: esiste esattamente un 
modulo per file e un file contiene un solo modulo. In altre parole, per creare un modulo è sufficiente 
scrivere del codice JavaScript in un file ed esportare uno o più delle funzionalità implementate.
Il seguente è un esempio di modulo che esporta la funzione somma(): */
export function somma(x, y) {
    return x + y;
}
/*Come possiamo vedere, utilizziamo la parola chiave export per indicare che abbiamo intenzione di 
esportare la funzione somma(), cioè la rendiamo accessibile all’esterno del modulo. Tutto ciò che 
non viene esplicitamente esportato non sarà visibile fuori dal modulo: */
function prodotto(x, y) {
    return x * y;
}
export function somma(x, y) {
    return x + y;
}
//Nell’esempio precedente esportiamo la funzione somma() ma non la funzione prodotto().

/*Le funzionalità e gli altri elementi esportati da un modulo JavaScript possono essere importate da 
un altro modulo tramite la parola chiave import. Supponendo di aver salvato in un file mioModulo.js 
il codice visto negli esempi precedenti, il seguente è un esempio di importazione della funzione somma() 
all’interno di un altro modulo: */
import { somma } from "mioModulo";
console.log(somma(2, 5));
/*Abbiamo specificato tra parentesi graffe l’elemento che abbiamo importato dal modulo mioModulo. 
Se non si specifica l’estensione del file che rappresenta il modulo è sottintesa l’estensione .js. 
L’elemento importato viene aggiunto allo scope corrente ed è accessibile come se fosse stato definito 
nel modulo corrente. */

/*Cose da ricordare nell’uso dei moduli
Prima di chiudere questo articolo sui moduli occorre evidenziare tre importanti segnalazioni:
1)l’importazione e l’esportazione di un modulo sono processi statici, cioè allo stato attuale non 
 possiamo importare ed esportare un modulo a runtime in base alla valutazione di determinate condizioni 
 (una proposta in tal senso è allo studio del comitato di standardizzazione)

2)l’importazione di un modulo è soggetta ad hoisting, cioè essa viene effettuata all’inizio della valutazione
 del codice contenuto in un modulo, indipendentemente dalla posizione dell’istruzione di import all’interno del 
 modulo; per convenzione quindi si suggerisce di porre le istruzioni di import in cima ad modulo JavaScript

3)gli elementi importati da un modulo sono in sola lettura, cioè non possiamo assegnare un nuovo valore 
o ridefinire una funzione fuori dal suo scope di origine
*/