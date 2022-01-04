const soma = function (x , y){
    return x + y
}

const imprimirResult = function(a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResult(5,6)
imprimirResult(5,6, soma)
imprimirResult(5,6, function(x,y){
    return x - y
})

imprimirResult(5, 6, (x, y) => x * y)


const pessoa = {
    falar: function(){
        console.log('aeeeeeeeeeeeeeeeeee')
    }
}

pessoa.falar()