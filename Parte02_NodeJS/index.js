const express = require('express');
const server = express();
server.use(express.json()); //Retorno das requisições em JSON
server.listen(3000); //Ligar servidor na porta 3000

server.get('/first', (request, result) => {
    return result.send({ first: "Olá, Mundo!" })
});

server.get('/query-params', (request, result) => {
    const { name, age } = request.query;
    return result.json({ result: `Nome: ${name} & Idade: ${age}` })
    //http://localhost:3000/query-parameters?name=PabloNadai&age=18
});

var produtos = [];

// SELECIONAR produto cadastrado

server.get('/verProdutos', (request, result) => {
    result.send({ produtos: produtos })
});

// INSERIR produto cadastrado //

server.post('/produtos', (request, result) => {
    const { id, name, price } = request.body
    produtos.push({ id: id, name: name, price: price })
    result.send({ mensagem: 'Success!' })
});

// ALTERAR produto cadastrado //

server.put('/alterarProduto', (request, result) => {
    const { id, name, price } = request.body
    const { oldName } = request.query
    const index = produtos.findIndex(item => item.name == oldName)

    produtos[index].id = id
    produtos[index].name = name
    produtos[index].price = price

    result.send({ mensagem: 'Success!' })
});

// DELETAR produto cadastrado //

server.delete('/deletarProduto/:id', (request, result) => {
    const { id } = request.params

    const novosProdutos = produtos.filter(item => item.id !== parseInt(id))
    produtos = novosProdutos

    result.send({ produtos: produtos })
});