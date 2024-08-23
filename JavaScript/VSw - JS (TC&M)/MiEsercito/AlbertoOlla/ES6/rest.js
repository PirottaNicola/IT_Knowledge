//creare un modulo node js che esporta una funzione che riceve un numero di argoment
// variabile e calcola la media dei numeri, che restituisce senza stamparla

module.exports = function average(...nums) {
    return nums.reduce((total, num) => total + num) / nums.length;
};