//forma literal
function fun1() {

}

// Armazenar em uma variavel
const fun2 = function(){}

//Armazenar em um array
const array = {function (a,b) {return a + b}, fun1, fun2}

const obj = {}
obj.falar = function() {return 'eae'}
console.log(obj.falar())

// Passar como pararmetro
function run(fun){
    fun()
}

run(function(){console.log("executandoo") })

//Funcao retorna funcao
function soma(a , b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(2,6)(6)