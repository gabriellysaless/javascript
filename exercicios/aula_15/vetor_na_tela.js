let num = [5, 8, 4, 9, 7]
/*
for(let pos = 0; pos<num.length; pos++) {
    // Lembrar de sempre criar uma variável contadora (pos=0, nesse caso)
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

//Simplificando...
for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}