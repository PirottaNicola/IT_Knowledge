//creiamo un modulo node.js che esporta una funzione che riceve due argoemnti
//, una stringa e un numero opzionale e restituisce la stringa passata aggiungendo
// un numero di punti esclamativi pari al numero passato o, se non è stato passato, alla lunghezza della stringa

module.exports = function makeImportant(text, count = text.length) {
    return text + "!".repeat(count);
}

//oppure con arrow function
module.exports = (text, count = text.length) => (text + '!'.repeat(count));