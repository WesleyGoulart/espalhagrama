const grama = []
let i = 3             // Tamanho do array
let p = 0             // Índice do array

function getRandomIntInclusive(p, i) {
    min = Math.ceil(p);
    max = Math.floor(i);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

if (i > 0) {
    while (i > 0) {
        grama[p] = 0
        p++
        i = i - 1
    }
}


const sorteioGrama = grama.map(valor => valor + 1)         // Substitui todos os valores do array por 1


console.log(grama)
console.log(sorteioGrama)
console.log(getRandomIntInclusive(p, i))