const animals = ["🦊", "🦝", "🐷", "🐗", "🦓", "🐮", "🐔", "🐻‍❄️"];

console.log(animals, "Antes do Splice!")

// animals.forEach((item, index) => {
//     console.log(item, index);
// })

animals.splice(3, 1) //Remover posição 4 a partir do primeiro
animals.splice(3, 3) //Remove a partir da posição 3, 3 elementos

console.log(animals, "Depois do Splice!")