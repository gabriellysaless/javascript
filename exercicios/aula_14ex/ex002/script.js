function clicou(){
    let numb = document.getElementById('inum')
    let resp = document.getElementById('itxt')
    if (numb.value.length == 0) {
        window.alert('[Erro] Digite um número para obter a tabuada')
    } else {
        let n = Number(numb.value)
        let c = 1
        resp.innerHTML = '' // Para limpar a tela quando for mostrar a tabuada de outro número

        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option') // cria o elemento option
            item.text = `${n} x ${c} = ${n*c}` // o q vai ficar escrito dentro do option
            item.value = `tab${c}` // para dar o value, que é útil em outras linguagem como PHP
            resp.appendChild(item) // adiciona o elemento filho (item) dentro da resp (select no HTML)
        }
    }
}