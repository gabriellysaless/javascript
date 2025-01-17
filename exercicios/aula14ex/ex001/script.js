function contar() {
    let inicio = document.getElementById('istart')
    let fim = document.getElementById('iend')
    let passo = document.getElementById('istep')
    let res = document.getElementById('resul')

    // Ou if (inicio.value.length == 0 ...) length: comprimento (quantas letras tem)
    if (inicio.value === "" || fim.value === "" || passo.value === ""){
        window.alert('Por favor, preencha todos os campos!')
        res.innerHTML = 'Preencha os campos acima!'
    } else {
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        res.innerHTML = 'Contando... <br>'
    
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO = 1') 
            p = 1
        }

        /* Explicações para entendimento:
            Abaixo coloquei uma variável para contar. Essa é uma boa prática pq guarda o valor inicial inserido (i) e evita confusão no código
        */
        if (i < f) {
            for (let cont = i; cont <= f; cont += p) {
                res.innerHTML += `${cont} \u{1F449}` //&#x1F449
            }
        } else {
            for (let cont = i; cont >= f; cont -= p) {
                res.innerHTML += `${cont} \u{1F449}` //&#x1F449
            }
        }
        res.innerHTML += `\u{1F3C1}` //&#x1F3C1
        }
}