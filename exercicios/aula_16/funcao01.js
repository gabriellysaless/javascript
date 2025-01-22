function parimp(n) {
    if (n%2 == 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}
/* Posso colocar direto sem variável:
   console.log(parimp(15))
*/
let res = parimp(15)
console.log(res)