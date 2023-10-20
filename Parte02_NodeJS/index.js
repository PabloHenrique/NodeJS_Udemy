const express = require('express');
const API = require('./api')
const server = express();
const localStorage = require('localStorage');

server.use(express.json()); //Retorno das requisições em JSON
server.listen(3000); //Ligar servidor na porta 3000

// ------------------------------------------------------ FIRST CALLS ------------------------------------------------------ //

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

// --------------------------------------------------------- API --------------------------------------------------------- //
// Acessando API //

server.get('/pokemon', async (request, result) => { //Não tem tempo definido para executar
    const { status, data } = await API.get('pokemon/1') //Enquando não tiver um retorno, NÃO prossiga

    try {
        return result.send({name: data.name});
    }
    catch (error) {
        return result.send({message: 'Erro!'});
    }
    
});

function verifyUser(req, res, next){ //Criação de um Middlewares -> Validação para as funções
    const { email } = req.body;

    if(!allUsers.find(user => user.email === email)){
        return next();
    }

    return res.status(400).json({Failed: 'Esse e-mail já está cadastrado.'})
}

const allUsers = [];

//Cadastrar
server.post('/register-users', verifyUser, (req, res) => {
    const user = req.body;
    allUsers.push(user);

    localStorage.setItem('users', JSON.stringify(allUsers)); //Só armazena strings inicialmente
    return res.json({ user })
});

//Consultar
server.get('/consultar-usuarios', (req, res) => {
    //res.send({ allUsers: allUsers})
    const users = JSON.parse(localStorage.getItem('users'));
    return res.json(users);
})