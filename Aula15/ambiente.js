var num = [2, 8, 7, 4, 9, 1]
num.push(6)
num.sort()
let pos = num.indexOf(1)


if (pos == -1) {
    console.log(`O valor não foi encontrado`)    
} else {
    console.log(`${pos}`)
}
/*
console.log(num)
console.log(`Numero de casas ${num.length}`)
console.log(`primeira casa: ${num[6]}`)
*/
