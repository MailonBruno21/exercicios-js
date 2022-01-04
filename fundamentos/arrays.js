
const valores = [7.7, 8.8, 4.2, 7.9]

console.log(valores[3])

valores.push({id:3}, false, null, `teste`, 5)
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

