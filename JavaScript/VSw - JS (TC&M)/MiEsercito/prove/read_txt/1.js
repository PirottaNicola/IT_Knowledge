var c = 2; //totale articoli disponibili
function inserisciArticolo() {
    if (c > 0) {
        var a, b, d;
        a = document.getElementById('articoli'); //contenitore degli elementi 'articolo'
        d = document.createElement('div'); //creo nuovo elemento articolo
        d.id = "articolo" //gli do l'id="articolo"
        $(d).load('articolo' + c + '.html'); //ci carico l'html dell'articolo corrispondente
        a.appendChild(d); //attacco d in coda ad a
        c--;
    } else {
        document.getElementById("carica").textContent = "Non ci sono altri articoli disponibili";
    };
}