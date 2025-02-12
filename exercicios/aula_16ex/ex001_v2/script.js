let num = document.getElementById('inum')
let resp = document.getElementById('itxt')
let res = document.getElementById('resultado')
let valores = []

function isNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) { //-1 significa que não está no array
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNum(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))
        let texto = document.createElement('option')
        texto.innerHTML = `Valor ${num.value} adicionado`
        resp.appendChild(texto)
    } else {
        window.alert ('Número inválido ou já selecionado.')
    }
    res.innerHTML = ``
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length === 0) {
        window.alert('Digite um valor para obter o resultado')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        for(let pos in valores){ // "Para cada posição dentro de valores faça:"
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / valores.length
        res.innerHTML = `
        <p>Ao todo temos ${tot} números cadastrados.</p>
        <p>O maior valor informado foi ${maior}.</p>
        <p>O menor valor informado foi ${menor}.</p>
        <p>Somando todos os valores, temos ${soma}.</p>
        <p>A média dos valores digitados é ${media.toFixed(2)}.</p>
        `
    }
    // quantidade de numeros, maior e menor valor, soma, media
}