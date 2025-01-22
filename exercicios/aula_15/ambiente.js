let num = [8, 4, 5, 2]
// CUIDADO: a ordem influencia em como os valores aparecerão
num.push(7)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`Os valores em ordem crescente são ${num.sort()}`)

let pos = num.indexOf(8)
if (pos == -1){
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor após ordem crescente está na posição ${pos}`)
}