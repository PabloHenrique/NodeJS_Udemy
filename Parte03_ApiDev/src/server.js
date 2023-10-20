const express = require('express');
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('Server ON na porta 3000');
});

