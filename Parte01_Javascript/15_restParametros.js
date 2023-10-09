// Parametros fixos
// function sum(n1, n2) {
//     return n1 + n2
// }
// console.log(sum(1, 3))

//Parametros dinâmicos

function sum(...args) {
    //console.log(args);
    const contador = 0

    //Somar os valores dentro de um array
    const total = args.reduce((acumulador, contadorAtual) => acumulador + contadorAtual, contador);

    return total;
}

console.log(sum(4, 2, 3, 5, 6));