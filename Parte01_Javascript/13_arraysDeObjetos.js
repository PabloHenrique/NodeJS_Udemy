const animals = [
    {
        nome: "Cachorro",
        idade: 9,
        cor: "Caramelo",
    },
    {
        nome: "Gato",
        idade: 4,
        cor: "Branco",
    },
    {
        nome: "Cavalo",
        idade: 10,
        cor: "Marrom",
    },
]

animals.forEach(element => {
    console.log(element.nome);
});

console.log("\nOutra maneira de exibir: FOR OF")

for (const animal of animals) {
    console.log(animal.nome);
}

//ADICIONAR

animals.push({
    nome: "Tartaruga",
    idade: 16,
    cor: "Verde",
});

console.log("\nAdicionando elemento");

for (const animal of animals) {
    console.log(animal.nome);
}