//ARROW FUNCTION
var somma = function(x, y) {
    return x + y;
};
var totale = somma(3, 2);

//possiamo riscriverla come:
var somma = (x, y) => x + y;
var totale = somma(3, 2);


//COSTRUTTORI DI OGGETTI
function persona() {
    this.nome = "";
    this.cognome = "";
    this.indirizzo = "";
    this.email = "";
    this.mostraNomeCompleto = function() {... };
    this.calcolaCodiceFiscale = function() {... };
}

var marioRossi = new persona();
marioRossi.nome = "Mario";
marioRossi.cognome = "Rossi";
var giuseppeVerdi = new persona();
giuseppeVerdi.nome = "Giuseppe";
giuseppeVerdi.cognome = "Verdi";


//EREDITARIETA'
//come fare per modificare la struttura di tutti gli oggetti creati tramite un costruttore?
persona.prototype.telefono = "123456";

/* Il meccanismo su cui si basa l’erediterietà prototipale (prototypal inheritance) 
di JavaScript è abbastanza semplice: se una proprietà non si trova in un 
oggetto viene cercata nel suo prototipo.
Il prototipo di un oggetto può a sua volta avere un altro prototipo. 
In questo caso la ricerca di una proprietà o di un metodo risale la 
catena dei prototipi fino ad arrivare all’oggetto Object, il prototipo base di tutti gli oggetti. */

//creare oggetti sulla base di un prototipo
function persona(nome, cognome) {
    this.nome = (nome || "");
    this.cognome = (cognome || "");
}
persona.prototype.indirizzo = "";
persona.prototype.email = "";
persona.prototype.mostraNomeCompleto = function() { return this.nome + " " + this.cognome };

var marioRossi = Object.create(persona.prototype); //con il metodo create creo un nuovo oggetto che mantiene i campi/metodi contrassegnati con prototype


//descrittori delle proprietà
var marioRossi = Object.create(
    persona.prototype, {
        nome: {
            value: "Mario",
            writable: false,
            configurable: false
        },
        cognome: {
            value: "Rossi",
            writable: false,
            configurable: false
        },
        indirizzo: {
            value: "",
            writable: true,
            configurable: true
        },
        email: {
            value: "",
            writable: true,
            configurable: true
        },
        nomeCompleto: {
            configurable: true,
            get: function() { return this.nome + " " + this.cognome; }
        }
    });

/*quelle che seguono sono le opzioni disponibili per la definizione di una proprietà tramite un data descriptor:
writable	    Booleano che indica se il valore della proprietà può essere modificato
configurable	Booleano che indica se il tipo di descrittore può essere modificato e se la proprietà può essere rimossa
enumerable   	Booleano che indica se la proprietà è accessibile durante un ciclo sulle proprietà dell’oggetto
value	        Indica il valore della proprietà

Le opzioni disponibili per la definizione di una proprietà tramite un accessor descriptor sono:
configurable	Booleano che indica se il tipo di descrittore può essere modificato e se la proprietà può essere rimossa
enumerable	    Booleano che indica se la proprietà è accessibile durante un ciclo sulle proprietà dell’oggetto
get	            Funzione senza argomenti invocata quando si accede alla proprietà in lettura
set	            Funzione chiamata quando si accede alla proprietà in scrittura; il nuovo valore da assegnare alla proprietà viene passato come parametro */