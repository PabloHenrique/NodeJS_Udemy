const animal = {
    nome: "Elefante",
    cor: "Preto e Branco",
    habitat: "Savana",
    medicamentos: "False",
}

//ACESSAR
console.log('------------------------------------')

console.log(animal)
console.log(animal.nome);
console.log(animal['cor'])

console.log('------------------------------------')

//MODIFICAR
animal.nome = "Zebra"
console.log(animal.nome);

console.log('------------------------------------')

//CRIAR
animal.idade = 4
console.log(animal)

console.log('------------------------------------')

//REMOVER

delete animal.medicamentos;
console.log(animal)

console.log('------------------------------------')

//Verificar

if ("idade" in animal) {
    console.log("Propriedade encontrada!")
}
