const nome = 'Mailon'
const concatenacao = 'ola ' + nome + '!'

const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

// Expressao
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()

console.log(`Ei... ${up("cuiadado")}!`)