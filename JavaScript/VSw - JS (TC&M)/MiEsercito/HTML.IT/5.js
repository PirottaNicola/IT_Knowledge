//THIS
//Un classico esempio è la corretta risoluzione dell’oggetto this, che rappresenta l’oggetto a cui è associata una proprietà o un metodo
var persona = {
    nome: "Mario",
    cognome: "Rossi",
    nomeCognome: function() {
        return this.nome + " " + this.cognome;
    }
};



// saluta() prende come parametro una funzione (nomepersona) e la esegue nel proprio contesto di esecuzione.
function saluta(nomePersona) {
    console.log("Buongiorno " + nomePersona());
}
// usiamo come parametro il metodo persona.nomeCognome
saluta(persona.nomeCognome); //risultato: Buongiorno undefined undefined   invece che   "Buongiorno Mario Rossi".
//l’oggetto this non rappresenta l’oggetto persona ma, nel caso specifico, indica l’oggetto globale, che ad esempio in un browser corrisponde alla finestra corrente (window).