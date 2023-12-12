const grama = []      
let q = 3              // Tamanho do array
let p = 0               // Índice do array

function getRandomIntInclusive(p, q) {                                      //Sorteio de um índice do array
    min = Math.ceil(p);
    max = Math.floor(q);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomIntInclusive(p, q))

if (q > 0) {
    for (let i = q; i > 0; i = i - 1) {
        grama[p] = 0
        p++
    }
}

/* if (i > 0) {
    while (i > 0) {
        grama[p] = 0
        p++
        i = i - 1
    }
}
*/


const sorteioGrama = grama.map(valor => valor + 1)         // Substitui todos os valores do array por 1

console.log(sorteioGrama)
console.log(grama)