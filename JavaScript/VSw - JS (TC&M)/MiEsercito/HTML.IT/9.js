//ECCEZIONI
var x = 0;
try {
    func();
    x = x + 1;
} catch (e) {
    console.log(e.message); // func is not defined
}
console.log(x); //0

/*L’oggetto che rappresenta l’errore viene passato dal sistema come una sorta di parametro a catch. 
Esso prevede fondamentalmente due proprietà: name, che identifica il tipo di eccezione, e message, 
che indica il messaggio specifico dell’eccezione verificatasi. Eventuali proprietà aggiuntive possono 
essere presenti in base allo specifico engine JavaScript.
La possibilità di individuare il tipo di errore tramite name ci consente di gestire diversamente le 
situazioni di errore, come mostrato dal seguente esempio: */
try {
    //Blocco di codice
} catch (e) {
    switch (e.name) {
        case "ReferenceError":
            console.log("Variabile o funzione non definita");
            break;
        case "TypeError":
            console.log("Non è stato utilizzato il tipo di dato previsto");
            break;
            ...
    }
}

/*Infine, abbiamo la possibilità di generare eccezioni da programma tramite l’istruzione throw in modo
da avere una gestione uniforme degli errori. Nel seguente esempio generiamo un’eccezione se una stringa
non rappresenta un indirizzo di e-mail valido: */
function convalidaEmail(value) {
    var emailRegExp = /\w+@\w+\.\w{2,4}/i;
    if (emailRegExp.test(value)) {
        return true;
    } else {
        throw new Error("Email non valida!");
    }
}