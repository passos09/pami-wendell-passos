// javascript é uma linguagem fracamente tipada

var VariavelVar = "Olá"
let VariavelLet = 'Tudo bem?'
const VariavelConst = 13

console.log("Olá Mundo!")
console.log(VariavelVar)
console.log(VariavelVar, VariavelLet)
console.log(VariavelVar + VariavelLet)
console.log(VariavelConst + VariavelConst)

VariavelLet = 4
console.log(VariavelLet)

// VariavelConst = 6
// A regra é que a constante não pode
// ser reatribuida
console.log(VariavelConst)