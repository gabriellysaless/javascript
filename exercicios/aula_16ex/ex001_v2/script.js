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
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNum(num.value) && !inList(num.value, valores)) {
        window.alert ('Tudo ok!')
    } else {
        window.alert ('Número inválido ou já selecionado.')
    }
}