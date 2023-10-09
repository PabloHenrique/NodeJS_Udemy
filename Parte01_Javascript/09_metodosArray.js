const colors = ["🔴", "🔵", "🟢", "🟡"]
colors.push("🟠")

console.log("-------------- Vetor -------------- ")
console.log(colors);
colors.reverse();

console.log("\n---------  Vetor Reverse ---------- ")
console.log(colors)

// Verifica cada posição do Array
// function logPosiciotions(item){
//     console.log(item)
// }

// colors.forEach(logPosiciotions)

console.log("\n---------  Callback Funcition ---------- ")
colors.forEach((item, index) => {
    console.log(item, index);
})