//Funcao sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 5)

//funcao scom retorno
function soma(a = 0, b = 0) {
    return a + b
}

console.log(soma(5, 1))
