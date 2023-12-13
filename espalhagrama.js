const grama = []      
let q = 500000               // Tamanho do array
let p = 0               // Índice do array

function getRandomIntInclusive(p, q) {                                      //Sorteio de um índice do array
    min = Math.ceil(p);
    max = Math.floor(q - 1);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


if (q <= 0) {
    console.log('O array precisa ter mais de zero números.')
    return
}

for (let i = 0; i < q; i++) {
    grama[i] = 0
}
console.log(grama)

/* if (i > 0) {
    while (i > 0) {
        grama[p] = 0
        p++
        i = i - 1
    }
}
*/


let soma = 0
while (!gramaEmTudo()) {           //for(;gramaEmTudo() = false;)
    let sorteado = getRandomIntInclusive(p, q)
    grama[sorteado] = 1
    soma++
    //console.log(grama, sorteado)
}

function gramaEmTudo () {
    for (let i = q; i > 0; i = i -1) {
        if (grama[i] == 0) {
            return false
        }
    }
    return true
}


console.log(grama)
console.log(soma)