// Aqui está um comentário

/*
    E desta maneira
    Comentamos várias linhas
    de uma vez
*/

let idade;
idade = 19;

console.log("Pablo Nadai");
console.log(`Você tem ${idade} anos`);

console.log("\n");

console.log("SOMAR: ", 10 + 3);
console.log("SUBTRAIR: ", 10 - 3);
console.log("DIVIDIR: ", 10 / 3);
console.log("MULTIPLICAR: ", 10 * 3);

// =========================== ATRIBUIR ===========================
console.log("\n");

let caixa;
caixa = 1000;
console.log(`Valor atual: ${caixa}`);
//Fazer uma venda
caixa += 38;
console.log(`Valor depois da venda: ${caixa}`);
caixa += 562;
console.log(`Saldo no final da tarde: ${caixa}`);
//Pagar despesa
caixa -= 155;
console.log(`Após pagar a despesa: ${caixa}`);

// =========================== COMPARAR ===========================
console.log("\n");

console.log("10 == 10:", 10 == 10);
console.log("10 == 11:", 10 == 11);
console.log("10 != 11", 10 != 11); //diferente
console.log("10 > 11:", 10 > 11);
console.log("10 < 11:", 10 < 11);
console.log("A == A:", "A" == "A");
console.log("A == a:", "A" == "a");

console.log("\nEstritamente igual");
console.log("10 === 10", 10 === 10);
console.log("10 === '10'", "10" === 10); //verifica também o tipo de dado
console.log("10 !== '10'", "10" !== 10);

// =========================== LÓGICOS ===========================
/*
&& AND
|| OR
!  NOT
*/
console.log("\n");
console.log("10 >= 11 && 10 <= 9?", 10 >= 11 && 10 <= 9);
console.log("NãoNúmero" / 5);
