function contar() {
    let inicio = document.getElementById('istart')
    let fim = document.getElementById('iend')
    let passo = document.getElementById('istep')
    let res = document.getElementById('resul')

    if (inicio.value === "" || fim.value === "" || passo.value === ""){
        window.alert('Por favor, preencha todos os campos!')
    } else {
        let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    
    if (p <= 0) {
        window.alert('Passo inválido! Considerando PASSO = 1') 
        p = 1
    }

    res.innerHTML = 'Contando... <br>'

    if (i < f) {
        while (i <= f) {
            res.innerHTML += `${i} &#x1F449`
            i = `${i + p}`
            i = Number(i)
        }
    } else {
        while (i >= f) {
            res.innerHTML += `${i} &#x1F449`
            i = `${i - p}`
            i = Number(i)
        }
    }
    res.innerHTML += '&#x1F3C1'
    }
}