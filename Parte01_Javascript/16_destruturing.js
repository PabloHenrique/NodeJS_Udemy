const numbers = [1, 2, 3, 4, 5, 6]

// const primeiraPosicao = numbers[0];
// const segundaPosicao = numbers[1];
// const terceiraPosicao = numbers[2];
// const quartaPosicao = numbers[3];

// console.log(primeiraPosicao, segundaPosicao, terceiraPosicao, quartaPosicao);

//DESCONSTRUÇÃO COM ARRAYS
const [primeira, segunda, ...resto] = numbers;
console.log(primeira, segunda, resto);


//DESCONSTRUÇÃO COM OBJETOS
const person = {
    nome: "Pablo",
    idade: 19,
    profissao: "Desenvolvedor",
}

const {nome, idade, profissao} = person;
console.log(nome, idade, profissao)