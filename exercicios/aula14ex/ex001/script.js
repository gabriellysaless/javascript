//testes
function contar() {
    let inicio = document.getElementById('istart')
    let fim = document.getElementById('iend')
    let passo = document.getElementById('istep')
    let res = document.getElementById('resul')
    res.innerHTML = `${Number(fim.value) + Number(passo.value)}`
}