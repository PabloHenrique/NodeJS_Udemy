/*
VAR = Maneira antiga de declarar uma variável
      Permite que adicionemos um valor e posteriormente podemos alterar depois.
      scope - global or local

LET = Adicionar um valor nele, e podemos alterar depois.
      Utilizar sempre o LET, conforme as boas práticas atuais.
      scope - block

CONST = Adicionar um valor constante, no qual não poderá ser substituido.
      scope - block
*/

let nome = "Pablo";
console.log(nome)
console.log(`Meu nome é ${nome}`)

//console.log(`Meu nome é: ${testeUndefined}`)

let sobrenome;
sobrenome = "Nadai"
console.log(`Meu nome é ${nome} ${sobrenome}`)
