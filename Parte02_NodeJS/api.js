const axios = require('axios');
const API = axios.create({
    baseURL: "https://pokeapi.co/api/v2/"
});

module.exports = API;