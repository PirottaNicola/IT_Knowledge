//creare un modulo node js che esporta una funzione che riceve due argomenti
// e imposta dei valori predefiniti, calcola il valore medio e lo restituisce

module.export = function midpoint(lower = 0, upper = 1) {
    return (lower + upper) / 2;
};

// oppure con arrow function
module.export = (l = 0, u = 1) => (l + u) / 2;