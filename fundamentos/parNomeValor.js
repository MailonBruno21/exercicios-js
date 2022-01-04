// par nome valor

const saudacao = `alo amo` //contexto lexico

function exec(){
    const saudacao = `Falaaa chefe`
    return saudacao
}

//Objetos sao grupos de pares nnomes/valorers
const cliente = {
    nome: `Pedro`,
    idade: 32,
    peso: 12,
    endereco: {
        logradouro: `Rua A`,
        numero: 107
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)