const { Router } = require('express');

const routes = new Router();

routes.get('/health', (req, res) => res.send({
    message: 'Conectado com sucesso na porta 3000!',
}));

module.exports = routes;
