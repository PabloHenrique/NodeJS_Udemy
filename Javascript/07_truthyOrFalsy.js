console.log(true);
console.log(19);

//Todo o valor é considerado verdadeiro
if(true){
    console.log("True é truthy!")
}

if(19){
    console.log("19 é truthy!")
}

console.log("\n")

if(""){ //Vazio = False
    console.log("Áspas vazias, é truthy!")
}
else{
    console.log("Áspas vazias, é falsy!")
}

if(0){ //0 = False
    console.log("Valor zerado é truthy!")
}
else{
    console.log("Valor zerado é falsy!")
}
