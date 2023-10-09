const animals = ["🦊🦝", "🐷🐗", "🐗", "🦓🐮", "🐔", "🐻‍❄️🐨"];

const cowPosition = animals.find((item) => item === "🐗")
const cowIndex = animals.findIndex((item) => item === "🐗")

console.log(cowIndex, " = ", cowPosition);

//length: "calcula o tamanho de caracteres"
const newAnimails = animals.filter((item) => item.length > 2);

console.log(animals, "Animais completos");
console.log(newAnimails, "Animais filtrados"); 