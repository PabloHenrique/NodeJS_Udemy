const num1_3 = [1, 2, 3];
const num4_6 = [4, 5, 6];

//CONCATENAR OS DOIS ARRAYS
// const num1_6 = num1_3.concat(num4_6);
// console.log(num1_6)

const num1_6 = [...num1_3, ...num4_6];
console.log(num1_6);

//COM OBJETOS
const infoPessoa = {
    nome: "Pablo",
    sobrenome: "Henrique",
}

const endPessoa = {
    rua: "Álvares Cabral",
    numero: "254",
    cidade: "Adamantina",
}

const contatoPessoa = {
    telefone: "(11) 93485-0321",
    email: "pablo@email.com.br"
}

const dadosPessoa = {
    ...infoPessoa,
    ...endPessoa,
    ...contatoPessoa,
}

console.log(dadosPessoa);