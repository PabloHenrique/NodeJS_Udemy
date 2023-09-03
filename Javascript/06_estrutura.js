const media = (2 + 3 + 7 + 9) / 4;
console.log(media);
let resultado;

if (media === 10) {
  resultado = "Aprovado! Nota 10!";
  console.log(resultado);
} else if (media >= 7 && media < 10) {
  resultado = "Aprovado! Foi ótimo!";
} else if (media >= 5 && media < 7) {
  resultado = "Aprovado! Bom!";
} else {
  resultado = "Reprovado :(";
}

console.log(resultado);

// ======================== Ternário ========================
console.log("\n")
let valor = 10
let resultadoValor;

// if(valor = 10){
//   console.log("Sim, valor é igual a 10!")
// }
// else{
//   console.log("Não é 10!")
// }

//let = comparação ? truthy : falsy
resultadoValor = valor >= 10 ? "Sim, valor é igual a 10!" : "Não é 10!";
console.log(resultadoValor)