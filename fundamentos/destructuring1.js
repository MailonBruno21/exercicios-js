// Novo recurso do ES2015

const pessoa = {
    nome: `ana`,
    idade: 16,
    endereco: {
        logradouro: `Rua ABC`,
        numero: 1233
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const{ nome: n, idade: i} = pessoa
console.log(n, i)

const{ sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome, bemHumorado)

const { endereco: {logradouro, numero, cep }} = pessoa
console.log(logradouro, numero, cep)
