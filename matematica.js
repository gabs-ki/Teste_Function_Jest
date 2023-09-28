function soma(a, b) {
    return a + b
}

function subtrair(a, b) {
    return a - b
}

// function fatorial (n) {
//     let fat = 1
//     for (let i=1; i<=n; i++) {
//         fat *= i
//     }

//     return fat
// }

//Linguagem funcional não tem estrutura de repetição

function fatorial (n) {
    //Recursividade é a função chamando ela mesma
    return n <= 1 ? 1 : n * fatorial(n-1)
}

module.exports = {
    soma,
    fatorial
}