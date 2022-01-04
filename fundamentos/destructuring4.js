function rand([ min = 0, max = 500]){
    if(min > max) [min,max] = [max,min]
    const valor = Math.random() *  (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50,40]))
console.log(rand([841]))
console.log(rand([, 15]))
