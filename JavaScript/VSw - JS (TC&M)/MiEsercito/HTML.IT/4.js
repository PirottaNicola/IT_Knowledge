/*Poiché le funzioni JavaScript sono oggetti di prima classe, 
possono essere passate come parametri di un’altra funzione. 
La funzione passata come parametro è detta generalmente funzione 
di callback o semplicemente callback. Consideriamo il seguente un esempio: */
function calcola(func, arg1, arg2) {
    return func(arg1, arg2);
}

console.log(calcola(somma, 13, 25)); // 38

/*Un aspetto a cui prestare attenzione quando scriviamo funzioni che accettano callback è 
quello di accertarsi che venga passata effettivamente una funzione prima di invocarla. 
Il seguente esempio mostra come effettuare tale verifica: */
function calcola(func, arg1, arg2) {
    if (func && typeof func === "function") {
        return func(arg1, arg2);
    }
}


/*Dal momento che una funzione è un oggetto è possibile restituirla come valore di ritorno 
dell’esecuzione di un’altra funzione. Consideriamo, ad esempio, il seguente codice: */
var incrementatore = function(incremento) {
    return function(valore) {
        return incremento + valore;
    };
};

var incrementaDiCinque = incrementatore(5);

console.log(incrementaDiCinque(4)); // 9
console.log(incrementaDiCinque(16)); // 21