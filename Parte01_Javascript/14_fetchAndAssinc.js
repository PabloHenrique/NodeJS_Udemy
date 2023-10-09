/*

ASSINCRONISMO

Quando fazemos um processamento que não tem tempo determinado para concluir

Client <--------> API <--------> Database

Para testar API: https://jsonplaceholder.typicode.com

*/

let resultado = []

fetch('https://jsonplaceholder.typicode.com/users') // O código fora do FETCH, continuará sendo executado, idependente do resultado.
    .then((response) => response.json()) //Promisse: Assim que for resolvido ...
    .then((json) => {
        resultado = json

        for (const item of resultado) {
            console.log(item.name)
        }
    });

